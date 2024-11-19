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

const DG1010Dash1m = () => {
    
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
      .get("https://scheq.in/api/dg_1010_1_m")
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
'Use LOTO before start start of the work at incomer supply (Acceptance Criteria - Lock out with life tag)',
    'Check diesel level tube transparancy (Acceptance Criteria - ON/No leakage)',
    'Check the outlet valve of the Diesel tank.(Kept it in Open condition always) (Acceptance Criteria - ON/No leakage)',
    'Check the emergency switch ON or OFF condition. (Without work Don’t press emergency Switch) (Acceptance Criteria - Observation(no emergency stop))',
    'Check for any oil leakage  (Acceptance Criteria - No leakage)',
    'Check cover body for any damage (Acceptance Criteria - No Damage)',
    'Check door condition & closing condition  (Acceptance Criteria - Good)',
    'Check door lock  (Acceptance Criteria - Working )',
    'Check door rubber gasket  (Acceptance Criteria - Good )',
    'Check & Clean radiator (Acceptance Criteria - Clean)',
    'Check diseal water filter & drain it (Acceptance Criteria - Drain )',
    'Clean the radiator fan (Acceptance Criteria - Clean)',
    'Check the radiator fan belt tension (Acceptance Criteria - Tighten)',
    'Check the coolent level if require top up (Acceptance Criteria - Maximum)',
    'Inspect the Exhaust of DG(It should not excess (Acceptance Criteria - No Rust/leakage of smoke )',
    'Clean all parts of DC set (Acceptance Criteria - Clean )',
    'Check the governor for smooth working. (No another material is allowed to placed near the governor) (Acceptance Criteria - OK)',
    'Take trial of unit (Acceptance Criteria - Running)',
    'Check any leakage of Diesel which has abnormal aspets to environment (Acceptance Criteria - No Leakage)',
    'Check noise level which is to be below harmful level (Acceptance Criteria - Below 85db)',
    'Check the fire extinguisher (Acceptance Criteria - Nearest to unit)',
    'Regular checking of the pressue in fire extinguisher cylinder (Acceptance Criteria - Green Zone)',
    'Check the Battery charging terminal in the synchornization panel(24V- DC)',
    'Check for battery terminal voltage with multimeter (Should not excess than 13.5 V)',
    'Check the RPM of Engine(Rated= 1500)  ',
    'Exhuast level of DG must be in acceptable government norms',
    'Check emission of CO2',
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
                item.input1,
                item.input2,
                item.input3,
                item.input4,
                item.input5,
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
                '',
            ];
            csvRows.push(zeroRow.join(','));
        }
    });

    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'dg_1010_1_monthly_checksheet_data.csv');
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
                    <h1 className='text-2xl my-4 font-extrabold text-gray-200'>DG - 1010 - 1 Dashboard VT1014532-F10</h1>
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
                <h1 className="text-2xl text-center font-bold mb-4">DG - 1010 - 1 Monthly Dashboard</h1>
                {data.slice(0, 1).map((item) => (
                    <div key={item._id} className="p-4 border rounded shadow">
                        <h2 className="font-semibold text-xl text-center mb-2">Visual Inspection</h2><br />
                        <div className="grid grid-cols-4 gap-y-12 gap-x-4">
                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Use LOTO before start start of the work at incomer supply (Acceptance Criteria - Lock out with life tag)", "dropdown1")} />
                            <p className="text-center mt-2">Use LOTO before start start of the work at incomer supply (Acceptance Criteria - Lock out with life tag)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check diesel level tube transparancy (Acceptance Criteria - ON/No leakage)", "dropdown2")} />
                            <p className="text-center mt-2">Check diesel level tube transparancy (Acceptance Criteria - ON/No leakage)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check the outlet valve of the Diesel tank.(Kept it in Open condition always) (Acceptance Criteria - ON/No leakage)", "dropdown3")} /> 
                            <p className="text-center mt-2">Check the outlet valve of the Diesel tank.(Kept it in Open condition always) (Acceptance Criteria - ON/No leakage)</p>       
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check the emergency switch ON or OFF condition. (Without work Don’t press emergency Switch) (Acceptance Criteria - Observation(no emergency stop))", "dropdown4")} />
                            <p className="text-center mt-2">Check the emergency switch ON or OFF condition. (Without work Don’t press emergency Switch) (Acceptance Criteria - Observation(no emergency stop))</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check DG is in Auto or in Manual mode (Acceptance Criteria - Observation(Auto))", "dropdown5")} />
                            <p className="text-center mt-2">Check DG is in Auto or in Manual mode (Acceptance Criteria - Observation(Auto))</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check for any oil leakage  (Acceptance Criteria - No leakage)", "dropdown6")} />
                            <p className="text-center mt-2">Check for any oil leakage  (Acceptance Criteria - No leakage)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check the coolent level  (Acceptance Criteria - Maximum)", "dropdown7")} />
                            <p className="text-center mt-2">Check the coolent level  (Acceptance Criteria - Maximum)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Inspect the Exhaust of DG(It should not excess) (Acceptance Criteria - No Rust/leakage of smoke)", "dropdown8")} />
                            <p className="text-center mt-2">Inspect the Exhaust of DG(It should not excess) (Acceptance Criteria - No Rust/leakage of smoke)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Inspect if any abnormal vibration and noise in DG  (Acceptance Criteria - No vibration )", "dropdown9")} />
                            <p className="text-center mt-2">Inspect if any abnormal vibration and noise in DG  (Acceptance Criteria - No vibration )</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check for oil levals - Once in a day (Acceptance Criteria - Maximum)", "dropdown10")} />
                            <p className="text-center mt-2">Check for oil levals - Once in a day (Acceptance Criteria - Maximum)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check cover body for any damage (Acceptance Criteria - No damage)", "dropdown11")} />
                            <p className="text-center mt-2">Check cover body for any damage (Acceptance Criteria - No damage)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check door condition & closing condition (Acceptance Criteria - Good)", "dropdown12")} />
                            <p className="text-center mt-2">Check door condition & closing condition (Acceptance Criteria - Good)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check door lock  (Acceptance Criteria - Working )", "dropdown13")} />
                            <p className="text-center mt-2">Check door lock  (Acceptance Criteria - Working )</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check & Clean radiator (Acceptance Criteria - Clean)", "dropdown14")} />
                            <p className="text-center mt-2">Check & Clean radiator (Acceptance Criteria - Clean)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Clean the radiator fan (Acceptance Criteria - Clean)", "dropdown15")} />
                            <p className="text-center mt-2">Clean the radiator fan (Acceptance Criteria - Clean)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check the radiator fan belt tension (Acceptance Criteria - Tighten)", "dropdown16")} />
                            <p className="text-center mt-2">Check the radiator fan belt tension (Acceptance Criteria - Tighten)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check diseal water filter & drain it (Acceptance Criteria - Drain )", "dropdown17")} />
                            <p className="text-center mt-2">Check diseal water filter & drain it (Acceptance Criteria - Drain )</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check the governor for smooth working. (No another material is allowed to placed near the governor) (Acceptance Criteria - OK)", "dropdown18")} />
                            <p className="text-center mt-2">Check the governor for smooth working. (No another material is allowed to placed near the governor) (Acceptance Criteria - OK)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Take trial of unit (Acceptance Criteria - Running)", "dropdown19")} />
                            <p className="text-center mt-2">Take trial of unit (Acceptance Criteria - Running)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check any leakage of Diesel which has abnormal aspets to environment (Acceptance Criteria - No Leakage)", "dropdown20")} />
                            <p className="text-center mt-2">Check any leakage of Diesel which has abnormal aspets to environment (Acceptance Criteria - No Leakage)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check noise level which is to be below harmful level (Acceptance Criteria - Below 85db)", "dropdown21")} />
                            <p className="text-center mt-2">Check noise level which is to be below harmful level (Acceptance Criteria - Below 85db)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check the fire extinguisher (Acceptance Criteria - Nearest to unit)", "dropdown22")} />
                            <p className="text-center mt-2">Check the fire extinguisher (Acceptance Criteria - Nearest to unit)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Regular checking of the pressue in fire extinguisher cylinder (Acceptance Criteria - Green Zone)", "dropdown23")} />
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
                            { inputData: 'input1', label: 'Check Neutral and earthing of DG electrical panel(Multimeter)', backgroundColor: 'darkblue' },
                            { inputData: 'input2', label: 'Check for battery terminal voltage with multimeter (Should not excess than 13.5 V)', backgroundColor: 'crimson' },
                            { inputData: 'input3', label: 'Check the RPM of Engine(Taco meter)', backgroundColor: 'darkgreen' },
                            { inputData: 'input4', label: 'Exhuast level of DG must be in acceptable government norms', backgroundColor: 'yellowgreen' },
                            { inputData: 'input5', label: 'Check emission of CO2', backgroundColor: 'maroon' },
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
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Use LOTO before start start of the work at incomer supply (Acceptance Criteria - Lock out with life tag)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check diesel level tube transparancy (Acceptance Criteria - ON/No leakage)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check the outlet valve of the Diesel tank.(Kept it in Open condition always) (Acceptance Criteria - ON/No leakage)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check the emergency switch ON or OFF condition. (Without work Don’t press emergency Switch) (Acceptance Criteria - Observation(no emergency stop))</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check for any oil leakage  (Acceptance Criteria - No leakage)</th>     
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check cover body for any damage (Acceptance Criteria - No Damage)</th> 
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check door condition & closing condition  (Acceptance Criteria - Good)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check door lock  (Acceptance Criteria - Working )</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check door rubber gasket  (Acceptance Criteria - Good )</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check & Clean radiator (Acceptance Criteria - Clean)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check diseal water filter & drain it (Acceptance Criteria - Drain )</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Clean the radiator fan (Acceptance Criteria - Clean)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check the radiator fan belt tension (Acceptance Criteria - Tighten)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check the coolent level if require top up (Acceptance Criteria - Maximum)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Inspect the Exhaust of DG(It should not excess (Acceptance Criteria - No Rust/leakage of smoke )</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Clean all parts of DC set (Acceptance Criteria - Clean )</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check the governor for smooth working. (No another material is allowed to placed near the governor) (Acceptance Criteria - OK)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Take trial of unit (Acceptance Criteria - Running)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check any leakage of Diesel which has abnormal aspets to environment (Acceptance Criteria - No Leakage)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check noise level which is to be below harmful level (Acceptance Criteria - Below 85db)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check the fire extinguisher (Acceptance Criteria - Nearest to unit)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Regular checking of the pressue in fire extinguisher cylinder (Acceptance Criteria - Green Zone)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check the Battery charging terminal in the synchornization panel(24V- DC)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check for battery terminal voltage with multimeter (Should not excess than 13.5 V)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check the RPM of Engine(Rated= 1500)  </th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Exhuast level of DG must be in acceptable government norms</th>        
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check emission of CO2</th>
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
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.input1}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.input2}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.input3}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.input4}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.input5}</td>
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

export default DG1010Dash1m;
