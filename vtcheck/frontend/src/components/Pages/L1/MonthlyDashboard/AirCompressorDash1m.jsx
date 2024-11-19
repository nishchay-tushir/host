import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import vitesco from '../../../Assets/vitesco.png';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const AirCompressorDash1m = () => {
    
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const toggleMonthlyDropdown = (e) => {
    e.preventDefault();
    navigate(0);
  };

  const toggleHome = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const sendEmail = (e) => {
      e.preventDefault();
      window.location.href = 'mailto:operations@webinn.ltd?subject=Contact%20Us&body=Hello%2C%0D%0A%0D%0A';
  };

  const Logout = (e) => {
      e.preventDefault();
      enqueueSnackbar('Successfully Logged out!', { variant: 'success' });
      navigate('/login');
  };

  useEffect(() => {
    // Fetch data from the API
    axios
      .get("https://scheq.in/api/air_compressor_1_m")
      .then((response) => {
        setData(response.data); // Set the fetched data
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Add a loading spinner here if needed
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Helper function to get chart data based on value frequency
  const getPieData = (label, field) => {
    const valueCounts = data.reduce((acc, item) => {
      const value = item[field];
      acc[value] = acc[value] ? acc[value] + 1 : 1;
      return acc;
    }, {});

    return {
      labels: Object.keys(valueCounts),
      datasets: [
        {
          label: `${label}`,
          data: Object.values(valueCounts),
          backgroundColor: [
            "green", // Green
            "crimson", // Red
            "orange", // Yellow
            "#03A9F4", // Blue
            "#9C27B0", // Purple
            "#FF9800", // Orange
          ], // Add more colors as needed
          hoverOffset: 4,
        },
      ],
    };
  };


  const getBarChartData = (inputData, label, backgroundColor) => {
    const labels = data.map(item => new Date(item.submissionDate).toISOString().split('T')[0]); // Extract dates for labels
    const chartData = data.map(item => item[inputData]);

    // Compute stats
    const total = chartData.reduce((sum, val) => sum + val, 0);
    const count = chartData.length;
    const avg = (total / count).toFixed(2);
    const highest = Math.max(...chartData);
    const lowest = Math.min(...chartData);

    // Calculate median
    const sortedData = [...chartData].sort((a, b) => a - b);
    const median = count % 2 === 0
        ? ((sortedData[count / 2 - 1] + sortedData[count / 2]) / 2).toFixed(2)
        : sortedData[Math.floor(count / 2)].toFixed(2);

    // Calculate standard deviation
    const variance = chartData.reduce((acc, val) => acc + Math.pow(val - avg, 2), 0) / count;
    const standardDeviation = Math.sqrt(variance).toFixed(2);

    // Calculate skewness
    const skewness = (chartData.reduce((acc, val) => acc + Math.pow(val - avg, 3), 0) / count) / Math.pow(standardDeviation, 3);
    
    // Calculate kurtosis
    const kurtosis = (chartData.reduce((acc, val) => acc + Math.pow(val - avg, 4), 0) / count) / Math.pow(standardDeviation, 4) - 3; // Subtract 3 for excess kurtosis

    return {
        labels,
        datasets: [
            {
                label,
                data: chartData,
                backgroundColor,
            },
        ],
        stats: { avg, highest, lowest, count, median, standardDeviation, skewness: skewness.toFixed(2), kurtosis: kurtosis.toFixed(2) },
    };
};


  const exportToCSV = () => {
    const csvRows = [];

    const headers = [
        'Date',
    'Use LOTO before start of work at incomer supply (Acceptance Criteria - Lock out with life tag)',
    'Clean the air filter & condition, replace after every 4000 hrs (Acceptance Criteria - No Dust & Dirt)',
    'Check the greasing frequency done after 4000 hrs (Acceptance Criteria - Greased)',
    'Replace oil & oil filter every 8000 hrs (Acceptance Criteria - ROTO-Z-80Ltr)',
    'Check outlet condition of valve (Acceptance Criteria - Open)',
    'Check the condensate drain valve in Auto & Manual (Acceptance Criteria - Auto)',
    'Check no vibration or abnormal noise (Acceptance Criteria - Normal)',
    'Check inlet valve condition of air receiver tank (Acceptance Criteria - ON)',
    'Check outlet valve condition of air receiver tank (Acceptance Criteria - ON)',
    'Drain the condensate manually of air receiver tanks - Once in a day (Acceptance Criteria - Done)',
    'Clean all parts of compressor motor & fan cover (Acceptance Criteria - Cleaning by Blower/Cloth)',
    'Clean radiators with blower and compressed air (Acceptance Criteria - Cleaned)',
    'Check the neutral and earthing connection of air compressor (Acceptance Criteria - Earth/Neutral Value)',
    'Clean panel cabinet by vacuum cleaner, clean power panel air filter (Acceptance Criteria - Clean)',
    'Check & tighten electrical/mechanical connections if loosened (Acceptance Criteria - Tightened)',
    'Check air compressor foundation and tighten if loosened (Acceptance Criteria - Tightened)',
    'Check & tighten motor terminals of compressor motor (Acceptance Criteria - No burns or color changes)',
    'Check condition of incoming supply terminals to MCB/Starter (Acceptance Criteria - No rusted bolts)',
    'Clean pressure switch & solenoid valve (Acceptance Criteria - No dust & dirt)',
    'Lubricate motor bearings (Acceptance Criteria - Roto Glide Green FS/Amber-VSD)',
    'Check & clean contactors with CRC (Acceptance Criteria - No carbon/rusty bolts)',
    'Check cover body for any damage (Acceptance Criteria - No damage)',
    'Check door condition & closing (Acceptance Criteria - Good)',
    'Check door lock (Acceptance Criteria - Working)',
    'Check foam sheet inside door (Acceptance Criteria - Good)',
    'Check air pipe line for any damage (Acceptance Criteria - No damage)',
    'Take trial & note parameters (Acceptance Criteria - Machine running)',
    'Clean unit properly (Acceptance Criteria - Cleaned by blower/cotton)',
    'Check any leakage of oil which has abnormal aspets to environment (Acceptance Criteria - No Leakage)',
    'Check noise level which is to be below harmful level (Acceptance Criteria - Below 85db)',
    'Check the fire extinguisher (Acceptance Criteria - Nearest to unit)',
    'Regular checking of the pressue in fire extinguisher cylinder (Acceptance Criteria - Green Zone)',
    'Check the pressure shown on air receiver tanks(BAR / Kg/cm²)',
    'Check the Current',
    'Check the Voltage',
    'Check PH valve of water',
    'Remarks',
    ];
    csvRows.push(headers.join(','));

    // Create a set of submission dates
    const submissionDates = new Set(data.map(item => new Date(item.submissionDate).toISOString().split('T')[0]));

    // Create an array for the full date range
    const dateRange = [];
    const currentDate = new Date(startDate);
    const endDateObj = new Date(endDate);

    while (currentDate <= endDateObj) {
        dateRange.push(new Date(currentDate).toISOString().split('T')[0]);
        currentDate.setDate(currentDate.getDate() + 1);
    }

    // Add rows for each date in the range
    dateRange.forEach(date => {
        if (submissionDates.has(date)) {
            // If data exists for the date, add the actual data
            const item = data.find(item => new Date(item.submissionDate).toISOString().split('T')[0] === date);
            const row = [
                date,
                item.dropdown1,
                item.dropdown2,
                item.dropdown3,
                item.dropdown4,
                item.dropdown5,
                item.dropdown6,
                item.dropdown7,
                item.dropdown8,
                item.dropdown9,
                item.dropdown10,
                item.dropdown11,
                item.dropdown12,
                item.dropdown13,
                item.dropdown14,
                item.dropdown15,
                item.dropdown16,
                item.dropdown17,
                item.dropdown18,
                item.dropdown19,
                item.dropdown20,
                item.dropdown21,
                item.dropdown22,
                item.dropdown23,
                item.dropdown24,
                item.dropdown25,
                item.dropdown26,
                item.dropdown27,
                item.dropdown28,
                item.dropdown29,
                item.dropdown30,
                item.dropdown31,
                item.dropdown32,
                item.input1,
                item.input2,
                item.input3,
                item.input4,
                item.remarks,
            ];
            csvRows.push(row.join(','));
        } else {
            // If no data for the date, add a row with zeros
            const zeroRow = [
                date,
                0,
                0,
                0, 
                0, 
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0, 
                0, 
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0, 
                0, 
                0,
                0,
                0,
                0,
                0,
                0,
                '',
            ];
            csvRows.push(zeroRow.join(','));
        }
    });

    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'air_compressor_1_monthly_checksheet_data.csv');
    a.click();
    window.URL.revokeObjectURL(url);
};

  return (

    <>
        <div className='flex m-2 fixed'>
            <div className='w-1/5'>
                <img className='w-10/12' src={vitesco} alt="" />
            </div>
            <div className='flex w-full text-center m-4 bg-gray-900 z-50 rounded-xl shadow-lg shadow-gray-700 ml-6 overflow-hidden'>
                <div className='w-full'>
                    <h1 className='text-2xl my-4 font-extrabold text-gray-200'>Air Compressor - 1 Dashboard VT1014532-F10</h1>
                </div>
            </div>
        </div>
        <br /><br /><br /><br />
        <div className='bg-gray-900 w-fit m-3 rounded-xl z-50 p-2 shadow-lg shadow-gray-700 text-white overflow-hidden fixed'>
            <h1 onClick={toggleHome} className='p-2 cursor-pointer shadow-md rounded-lg my-1 hover:bg-green-700'>Home</h1>
            <h1 onClick={toggleMonthlyDropdown} className='p-2 cursor-pointer shadow-md rounded-lg my-1 bg-green-700'>Monthly Dashboard</h1><br />
            <h1 onClick={sendEmail} className='p-2 my-1 cursor-pointer shadow-md hover:bg-gray-700 hover:text-green-400 rounded-lg'>Contact us</h1>
            <h1 onClick={Logout} className='p-2 my-1 cursor-pointer hover:bg-gray-700 shadow-md hover:text-green-400 rounded-lg'>Logout</h1>
        </div>
            <>
                <br />
                <div className="ml-56 p-4">
                <h1 className="text-2xl text-center font-bold mb-4">Air Compressor - 1 Monthly Dashboard</h1>
                {data.slice(0, 1).map((item) => (
                    <div key={item._id} className="p-4 border rounded shadow">
                        <h2 className="font-semibold text-xl text-center mb-2">Visual Inspection</h2><br />
                        <div className="grid grid-cols-4 gap-y-12 gap-x-4">
                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Use LOTO before start of work at incomer supply (Acceptance Criteria - Lock out with life tag)", "dropdown1")} />
                            <p className="text-center mt-2">Use LOTO before start of work at incomer supply (Acceptance Criteria - Lock out with life tag)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Clean the air filter & condition, replace after every 4000 hrs (Acceptance Criteria - No Dust & Dirt)", "dropdown2")} />
                            <p className="text-center mt-2">Clean the air filter & condition, replace after every 4000 hrs (Acceptance Criteria - No Dust & Dirt)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check the greasing frequency done after 4000 hrs (Acceptance Criteria - Greased)", "dropdown3")} />
                            <p className="text-center mt-2">Check the greasing frequency done after 4000 hrs (Acceptance Criteria - Greased)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Replace oil & oil filter every 8000 hrs (Acceptance Criteria - ROTO-Z-80Ltr)", "dropdown4")} />
                            <p className="text-center mt-2">Replace oil & oil filter every 8000 hrs (Acceptance Criteria - ROTO-Z-80Ltr)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check outlet condition of valve (Acceptance Criteria - Open)", "dropdown5")} />
                            <p className="text-center mt-2">Check outlet condition of valve (Acceptance Criteria - Open)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check the condensate drain valve in Auto & Manual (Acceptance Criteria - Auto)", "dropdown6")} />
                            <p className="text-center mt-2">Check the condensate drain valve in Auto & Manual (Acceptance Criteria - Auto)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check no vibration or abnormal noise (Acceptance Criteria - Normal)", "dropdown7")} />
                            <p className="text-center mt-2">Check no vibration or abnormal noise (Acceptance Criteria - Normal)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check inlet valve condition of air receiver tank (Acceptance Criteria - ON)", "dropdown8")} />
                            <p className="text-center mt-2">Check inlet valve condition of air receiver tank (Acceptance Criteria - ON)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check outlet valve condition of air receiver tank (Acceptance Criteria - ON)", "dropdown9")} />
                            <p className="text-center mt-2">Check outlet valve condition of air receiver tank (Acceptance Criteria - ON)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Drain the condensate manually of air receiver tanks - Once in a day (Acceptance Criteria - Done)", "dropdown10")} />
                            <p className="text-center mt-2">Drain the condensate manually of air receiver tanks - Once in a day (Acceptance Criteria - Done)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Clean all parts of compressor motor & fan cover (Acceptance Criteria - Cleaning by Blower/Cloth)", "dropdown11")} />
                            <p className="text-center mt-2">Clean all parts of compressor motor & fan cover (Acceptance Criteria - Cleaning by Blower/Cloth)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Clean radiators with blower and compressed air (Acceptance Criteria - Cleaned)", "dropdown12")} />
                            <p className="text-center mt-2">Clean radiators with blower and compressed air (Acceptance Criteria - Cleaned)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check the neutral and earthing connection of air compressor (Acceptance Criteria - Earth/Neutral Value)", "dropdown13")} />
                            <p className="text-center mt-2">Check the neutral and earthing connection of air compressor (Acceptance Criteria - Earth/Neutral Value)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Clean panel cabinet by vacuum cleaner, clean power panel air filter (Acceptance Criteria - Clean)", "dropdown14")} />
                            <p className="text-center mt-2">Clean panel cabinet by vacuum cleaner, clean power panel air filter (Acceptance Criteria - Clean)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check & tighten electrical/mechanical connections if loosened (Acceptance Criteria - Tightened)", "dropdown15")} />
                            <p className="text-center mt-2">Check & tighten electrical/mechanical connections if loosened (Acceptance Criteria - Tightened)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check air compressor foundation and tighten if loosened (Acceptance Criteria - Tightened)", "dropdown16")} />
                            <p className="text-center mt-2">Check air compressor foundation and tighten if loosened (Acceptance Criteria - Tightened)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check & tighten motor terminals of compressor motor (Acceptance Criteria - No burns or color changes)", "dropdown17")} />
                            <p className="text-center mt-2">Check & tighten motor terminals of compressor motor (Acceptance Criteria - No burns or color changes)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check condition of incoming supply terminals to MCB/Starter (Acceptance Criteria - No rusted bolts)", "dropdown18")} />
                            <p className="text-center mt-2">Check condition of incoming supply terminals to MCB/Starter (Acceptance Criteria - No rusted bolts)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Clean pressure switch & solenoid valve (Acceptance Criteria - No dust & dirt)", "dropdown19")} />
                            <p className="text-center mt-2">Clean pressure switch & solenoid valve (Acceptance Criteria - No dust & dirt)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Lubricate motor bearings (Acceptance Criteria - Roto Glide Green FS/Amber-VSD)", "dropdown20")} />
                            <p className="text-center mt-2">Lubricate motor bearings (Acceptance Criteria - Roto Glide Green FS/Amber-VSD)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check & clean contactors with CRC (Acceptance Criteria - No carbon/rusty bolts)", "dropdown21")} />
                            <p className="text-center mt-2">Check & clean contactors with CRC (Acceptance Criteria - No carbon/rusty bolts)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check cover body for any damage (Acceptance Criteria - No damage)", "dropdown22")} />
                            <p className="text-center mt-2">Check cover body for any damage (Acceptance Criteria - No damage)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check door condition & closing (Acceptance Criteria - Good)", "dropdown23")} />
                            <p className="text-center mt-2">Check door condition & closing (Acceptance Criteria - Good)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check door lock (Acceptance Criteria - Working)", "dropdown24")} />
                            <p className="text-center mt-2">Check door lock (Acceptance Criteria - Working)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check foam sheet inside door (Acceptance Criteria - Good)", "dropdown25")} />
                            <p className="text-center mt-2">Check foam sheet inside door (Acceptance Criteria - Good)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check air pipe line for any damage (Acceptance Criteria - No damage)", "dropdown26")} />
                            <p className="text-center mt-2">Check air pipe line for any damage (Acceptance Criteria - No damage)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Take trial & note parameters (Acceptance Criteria - Machine running)", "dropdown27")} />
                            <p className="text-center mt-2">Take trial & note parameters (Acceptance Criteria - Machine running)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Clean unit properly (Acceptance Criteria - Cleaned by blower/cotton)", "dropdown28")} />
                            <p className="text-center mt-2">Clean unit properly (Acceptance Criteria - Cleaned by blower/cotton)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check any leakage of oil which has abnormal aspets to environment (Acceptance Criteria - No Leakage)", "dropdown29")} />
                            <p className="text-center mt-2">Check any leakage of oil which has abnormal aspets to environment (Acceptance Criteria - No Leakage)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check noise level which is to be below harmful level (Acceptance Criteria - Below 85db)", "dropdown30")} />
                            <p className="text-center mt-2">Check noise level which is to be below harmful level (Acceptance Criteria - Below 85db)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check the fire extinguisher (Acceptance Criteria - Nearest to unit)", "dropdown31")} />
                            <p className="text-center mt-2">Check the fire extinguisher (Acceptance Criteria - Nearest to unit)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Regular checking of the pressue in fire extinguisher cylinder (Acceptance Criteria - Green Zone)", "dropdown32")} />
                            <p className="text-center mt-2">Regular checking of the pressue in fire extinguisher cylinder (Acceptance Criteria - Green Zone)</p>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>


                <br /><br />
                <div>
                    <h1 className="text-xl ml-56 text-center font-semibold mb-4">Visual Inspection & Record</h1>
                    <div className="ml-56">
                        {[
                            { inputData: 'input1', label: 'Check the pressure shown on air receiver tanks(BAR / Kg/cm²)', backgroundColor: 'darkblue' },
                            { inputData: 'input2', label: 'Check the Current', backgroundColor: 'crimson' },
                            { inputData: 'input3', label: 'Check the Voltage', backgroundColor: 'darkgreen' },
                            { inputData: 'input4', label: 'Check PH valve of water', backgroundColor: 'yellowgreen' },
                        ].map((chart, index) => {
                            const chartData = getBarChartData(chart.inputData, chart.label, chart.backgroundColor);
                            const { avg, highest, lowest, count, median, standardDeviation, skewness, kurtosis } = chartData.stats;

                            return (
                                <div key={index} className="p-4 flex shadow-md m-4 mt-6 bg-white">
                                    <div className="w-3/5">
                                        <Bar data={chartData} />
                                    </div>
                                      <div className="ml-2 grid grid-cols-3 text-center">
                                        <p className="p-4 m-2 rounded-md shadow-gray-700 shadow-md bg-gray-800 text-gray-200">Average <br /><span className="text-3xl font-bold ">{avg}</span></p>
                                        <p className="p-4 m-2 rounded-md shadow-gray-700 shadow-md bg-gray-800 text-gray-200">Maximum <br /><span className="text-3xl font-bold ">{highest}</span></p>
                                        <p className="p-4 m-2 rounded-md shadow-gray-700 shadow-md bg-gray-800 text-gray-200">Minimum <br /><span className="text-3xl font-bold ">{lowest}</span></p>
                                        <p className="p-4 m-2 rounded-md shadow-gray-700 shadow-md bg-gray-800 text-gray-200">Count <br /><span className="text-3xl font-bold ">{count}</span></p>
                                        <p className="p-4 m-2 rounded-md shadow-gray-700 shadow-md bg-gray-800 text-gray-200">Median <br /><span className="text-3xl font-bold ">{median}</span></p>
                                        <p className="p-4 m-2 rounded-md shadow-gray-700 shadow-md bg-gray-800 text-gray-200">Std Dev <br /><span className="text-3xl font-bold ">{standardDeviation}</span></p>
                                        <p className="p-4 m-2 rounded-md shadow-gray-700 shadow-md bg-gray-800 text-gray-200">Skewness <br /><span className="text-3xl font-bold ">{skewness}</span></p>
                                        <p className="p-4 m-2 rounded-md shadow-gray-700 shadow-md bg-gray-800 text-gray-200">Kurtosis <br /><span className="text-3xl font-bold ">{kurtosis}</span></p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <br /><br />


                <div className="ml-56 bg-white p-4 m-4 shadow-md">
                  <h1 className="font-semibold text-xl text-center mb-2">Data Chart</h1><br />
                    <div className="overflow-y-auto overflow-x-auto max-h-96">
                        <table className="table-auto border-collapse w-full bg-white shadow-md">
                        <thead className="bg-gray-200 sticky top-0">
                            <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Date</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Use LOTO before start of work at incomer supply (Acceptance Criteria - Lock out with life tag)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Clean the air filter & condition, replace after every 4000 hrs (Acceptance Criteria - No Dust & Dirt)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check the greasing frequency done after 4000 hrs (Acceptance Criteria - Greased)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Replace oil & oil filter every 8000 hrs (Acceptance Criteria - ROTO-Z-80Ltr)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check outlet condition of valve (Acceptance Criteria - Open)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check the condensate drain valve in Auto & Manual (Acceptance Criteria - Auto)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check no vibration or abnormal noise (Acceptance Criteria - Normal)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check inlet valve condition of air receiver tank (Acceptance Criteria - ON)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check outlet valve condition of air receiver tank (Acceptance Criteria - ON)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Drain the condensate manually of air receiver tanks - Once in a day (Acceptance Criteria - Done)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Clean all parts of compressor motor & fan cover (Acceptance Criteria - Cleaning by Blower/Cloth)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Clean radiators with blower and compressed air (Acceptance Criteria - Cleaned)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check the neutral and earthing connection of air compressor (Acceptance Criteria - Earth/Neutral Value)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Clean panel cabinet by vacuum cleaner, clean power panel air filter (Acceptance Criteria - Clean)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check & tighten electrical/mechanical connections if loosened (Acceptance Criteria - Tightened)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check air compressor foundation and tighten if loosened (Acceptance Criteria - Tightened)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check & tighten motor terminals of compressor motor (Acceptance Criteria - No burns or color changes)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check condition of incoming supply terminals to MCB/Starter (Acceptance Criteria - No rusted bolts)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Clean pressure switch & solenoid valve (Acceptance Criteria - No dust & dirt)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Lubricate motor bearings (Acceptance Criteria - Roto Glide Green FS/Amber-VSD)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check & clean contactors with CRC (Acceptance Criteria - No carbon/rusty bolts)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check cover body for any damage (Acceptance Criteria - No damage)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check door condition & closing (Acceptance Criteria - Good)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check door lock (Acceptance Criteria - Working)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check foam sheet inside door (Acceptance Criteria - Good)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check air pipe line for any damage (Acceptance Criteria - No damage)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Take trial & note parameters (Acceptance Criteria - Machine running)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Clean unit properly (Acceptance Criteria - Cleaned by blower/cotton)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check any leakage of oil which has abnormal aspets to environment (Acceptance Criteria - No Leakage)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check noise level which is to be below harmful level (Acceptance Criteria - Below 85db)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check the fire extinguisher (Acceptance Criteria - Nearest to unit)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Regular checking of the pressue in fire extinguisher cylinder (Acceptance Criteria - Green Zone)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check the pressure shown on air receiver tanks(BAR / Kg/cm²)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check the Current</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check the Voltage</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check PH valve of water</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                            <tr key={item._id} className="hover:bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{new Date(item.submissionDate).toISOString().split('T')[0]}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown1}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown2}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown3}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown4}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown5}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown6}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown7}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown8}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown9}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown10}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown11}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown12}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown13}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown14}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown15}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown16}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown17}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown18}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown19}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown20}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown21}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown22}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown23}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown24}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown25}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown26}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown27}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown28}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown29}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown30}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown31}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dropdown32}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.input1}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.input2}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.input3}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.input4}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.remarks}</td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                </div>
                <div className="ml-56 z-50 p-4">
                    <div className="flex justify-center space-x-4 mb-4">
                        <div>
                            <label className="block">Start Date:</label>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="yyyy/MM/dd" className="border rounded p-2 shadow-md" />
                        </div>
                        <div>
                            <label className="block">End Date:</label>
                            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} dateFormat="yyyy/MM/dd" className="border rounded p-2 shadow-md" />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button onClick={exportToCSV} className="bg-green-600 text-white p-2 rounded-sm shadow hover:bg-green-900" >Export Data</button>
                    </div>
                </div>
            </>
    </>

  );
};

export default AirCompressorDash1m;