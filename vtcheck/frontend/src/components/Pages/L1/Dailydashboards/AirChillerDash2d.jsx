import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LinearScale, BarElement, CategoryScale } from "chart.js";
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import vitesco from '../../../Assets/vitesco.png';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const AirChillerDash2d = () => {
    
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const toggleDailyDropdown = (e) => {
    e.preventDefault();
    navigate('/air_chiller_2_d_dashboard');
  };

  const toggleMonthlyDropdown = (e) => {
    e.preventDefault();
    navigate('/air_chiller_2_m_dashboard');
  };

  const toggleQuarterlyDropdown = (e) => {
    e.preventDefault();
    navigate('/air_chiller_2_q_dashboard');
  };

  const toggleTimeBasedDropdown = (e) => {
    e.preventDefault();
    navigate('/air_chiller_2_tb_dashboard');
  }

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
      .get("https://scheq.in/api/air_chiller_2_d")
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
        'LWT',
        'Compressor 1',
        'Compressor 2',
        'Water Leakage',
        'Refrigerant Leakage',
        'Oil Level of Compressor',
        'Abnormal Noise',
        'Abnormal Vibration',
        'Voltage on MCC Electrical Panel',
        'Comp 1 (%)',
        'Suction Pressure (Bar)',
        'Discharge Pressure (Bar)',
        'OPD Pressure',
        'Current (Amp)',
        'Suction Temp.',
        'Discharge Temp',
        'Suction Sat',
        'Suction Temp',
        'Suction SH',
        'Run Hours',
        'No. of Starts',
        'Evap in Temperature',
        'Evap out Temperature',
        'Ambient Temperature',
        'Pump Inlet Pressure',
        'Pump Outlet Pressure',
        'Comp 2 (%)',
        'Suction Pressure (Bar)',
        'Discharge Pressure (Bar)',
        'OPD Pressure',
        'Current (Amp)',
        'Suction Temp.',
        'Discharge Temp',
        'Suction Sat',
        'Suction Temp',
        'Suction SH',
        'Run Hours',
        'No. of Starts',
        'Evap in Temperature',
        'Evap out Temperature',
        'Ambient Temperature',
        'Pump Inlet Pressure',
        'Pump Outlet Pressure',
        'current on MCC Electrical Panel',
        'Power factor',
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
                item.LWT,
                item.Compressor1,
                item.Compressor2,
                item.WaterLeakage,
                item.RefrigerantLeakage,
                item.OilLevel,
                item.AbnormalNoise,
                item.Vibrations,
                item.MCCvoltage,
                item.input1,
                item.input2,
                item.input3,
                item.input4,
                item.input5,
                item.input6,
                item.input7,
                item.input8,
                item.input9,
                item.input10,
                item.input11,
                item.input12,
                item.input13,
                item.input14,
                item.input15,
                item.input16,
                item.input17,
                item.inputs1,
                item.inputs2,
                item.inputs3,
                item.inputs4,
                item.inputs5,
                item.inputs6,
                item.inputs7,
                item.inputs8,
                item.inputs9,
                item.inputs10,
                item.inputs11,
                item.inputs12,
                item.inputs13,
                item.inputs14,
                item.inputs15,
                item.inputs16,
                item.inputs17,
                item.inputs18,
                item.inputs19,
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
    a.setAttribute('download', 'air_chiller_2_daily_checksheet_data.csv');
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
                    <h1 className='text-2xl mt-2 font-extrabold text-gray-200'>Air Cooled Chiller - 2 Dashboard VT1014532-F10</h1>
                </div>
            </div>
        </div>
        <br /><br /><br /><br />
        <div className='bg-gray-900 w-fit m-3 rounded-xl z-50 p-2 shadow-lg shadow-gray-700 text-white overflow-hidden fixed'>
            <h1 onClick={toggleHome} className='p-2 cursor-pointer shadow-md rounded-lg my-1 hover:bg-green-700'>Home</h1>
            <h1 onClick={toggleDailyDropdown} className='p-2 cursor-pointer shadow-md rounded-lg my-1 bg-green-700'>Daily Dashboard</h1>
            <h1 onClick={toggleMonthlyDropdown} className='p-2 cursor-pointer shadow-md rounded-lg my-1 hover:bg-green-700'>Monthly Dashboard</h1>
            <h1 onClick={toggleQuarterlyDropdown} className='p-2 cursor-pointer shadow-md rounded-lg my-1 hover:bg-green-700'>Quarterly Dashboard</h1>
            <h1 onClick={toggleTimeBasedDropdown} className='p-2 cursor-pointer shadow-md rounded-lg my-1 hover:bg-green-700'>Time-Based Dashboard</h1><br />
            <h1 onClick={sendEmail} className='p-2 my-1 cursor-pointer shadow-md hover:bg-gray-700 hover:text-green-400 rounded-lg'>Contact us</h1>
            <h1 onClick={Logout} className='p-2 my-1 cursor-pointer hover:bg-gray-700 shadow-md hover:text-green-400 rounded-lg'>Logout</h1>
        </div>
            <>
                <br />
                <div className="ml-56 p-4">
                <h1 className="text-2xl text-center font-bold mb-4">Air Cooled Chiller - 2 Daily Dashboard</h1>
                {data.slice(0, 1).map((item) => (
                    <div key={item._id} className="p-4 border rounded shadow-md">
                        <h2 className="font-semibold text-xl text-center mb-2">Visual Inspection Status</h2><br />
                        <div className="grid grid-cols-4 gap-y-12 gap-x-4">
                        <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("LWT", "LWT")} />
                                <p className="text-center mt-2">LWT</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Compressor 1", "Compressor1")} />
                                <p className="text-center mt-2">Compressor 1</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Compressor 2", "Compressor2")} />
                                <p className="text-center mt-2">Compressor 2</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Water Leakage", "WaterLeakage")} />
                                <p className="text-center mt-2">Water Leakage</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Refrigerant Leakage", "RefrigerantLeakage")} />
                                <p className="text-center mt-2">Refrigerant Leakage</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Oil Level of Compressor", "OilLevel")} />
                                <p className="text-center mt-2">Oil Level of Compressor</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Abnormal Noise", "AbnormalNoise")} />
                                <p className="text-center mt-2">Abnormal Noise</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Abnormal Vibration", "Vibrations")} />
                                <p className="text-center mt-2">Abnormal Vibration</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Voltage on MCC Electrical Panel", "MCCvoltage")} />
                                <p className="text-center mt-2">Voltage on MCC Electrical Panel</p>
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
                            { inputData: 'input1', label: 'Comp 1 (%)', backgroundColor: 'darkblue' },
                            { inputData: 'input2', label: 'Suction Pressure (Bar)', backgroundColor: 'green' },
                            { inputData: 'input3', label: 'Discharge Pressure (Bar)', backgroundColor: 'red' },
                            { inputData: 'input4', label: 'OPD Pressure', backgroundColor: 'purple' },
                            { inputData: 'input5', label: 'Current (Amp)', backgroundColor: 'orange' },
                            { inputData: 'input6', label: 'Suction Temp.', backgroundColor: 'cyan' },
                            { inputData: 'input7', label: 'Discharge Temp', backgroundColor: 'magenta' },
                            { inputData: 'input8', label: 'Suction Sat', backgroundColor: 'yellow' },
                            { inputData: 'input9', label: 'Suction Temp', backgroundColor: 'brown' },
                            { inputData: 'input10', label: 'Suction SH', backgroundColor: 'teal' },
                            { inputData: 'input11', label: 'Run Hours', backgroundColor: 'navy' },
                            { inputData: 'input12', label: 'No. of Starts', backgroundColor: 'salmon' },
                            { inputData: 'input13', label: 'Evap in Temperature', backgroundColor: 'lightcoral' },
                            { inputData: 'input14', label: 'Evap out Temperature', backgroundColor: 'khaki' },
                            { inputData: 'input15', label: 'Ambient Temperature', backgroundColor: 'lightblue' },
                            { inputData: 'input16', label: 'Pump Inlet Pressure', backgroundColor: 'lightgreen' },
                            { inputData: 'input17', label: 'Pump Outlet Pressure', backgroundColor: 'lightsalmon' },
                            { inputData: 'inputs1', label: 'Comp 2 (%)', backgroundColor: 'violet' },
                            { inputData: 'inputs2', label: 'Suction Pressure (Bar)', backgroundColor: 'yellow' },
                            { inputData: 'inputs3', label: 'Discharge Pressure (Bar)', backgroundColor: 'grey' },
                            { inputData: 'inputs4', label: 'OPD Pressure', backgroundColor: 'lightpink' },
                            { inputData: 'inputs5', label: 'Current (Amp)', backgroundColor: 'lightseagreen' },
                            { inputData: 'inputs6', label: 'Suction Temp.', backgroundColor: 'cyan' },
                            { inputData: 'inputs7', label: 'Discharge Temp', backgroundColor: 'lightsteelblue' },
                            { inputData: 'inputs8', label: 'Suction Sat', backgroundColor: 'gold' },
                            { inputData: 'inputs9', label: 'Suction Temp', backgroundColor: 'lavender' },
                            { inputData: 'inputs10', label: 'Suction SH', backgroundColor: 'plum' },
                            { inputData: 'inputs11', label: 'Run Hours', backgroundColor: 'powderblue' },
                            { inputData: 'inputs12', label: 'No. of Starts', backgroundColor: 'peru' },
                            { inputData: 'inputs13', label: 'Evap in Temperature', backgroundColor: 'lightsalmon' },
                            { inputData: 'inputs14', label: 'Evap out Temperature', backgroundColor: 'pink' },
                            { inputData: 'inputs15', label: 'Ambient Temperature', backgroundColor: 'peachpuff' },
                            { inputData: 'inputs16', label: 'Pump Inlet Pressure', backgroundColor: 'magenta' },
                            { inputData: 'inputs17', label: 'Pump Outlet Pressure', backgroundColor: 'wheat' },
                            { inputData: 'inputs18', label: 'Current on MCC Electrical Panel', backgroundColor: 'crimson' },
                            { inputData: 'inputs19', label: 'Power factor', backgroundColor: 'goldenrod' },
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
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Date</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">LWT</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Compressor 1</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Compressor 2</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Water Leakage</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Refrigerant Leakage</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Oil Level of Compressor</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Abnormal Noise</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Abnormal Vibration</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Voltage on MCC Electrical Panel</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Comp 1 (%)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Suction Pressure (Bar)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Discharge Pressure (Bar)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">OPD Pressure</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Current (Amp)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Suction Temp.</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Discharge Temp</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Suction Sat</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Suction Temp</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Suction SH</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Run Hours</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">No. of Starts</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Evap in Temperature</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Evap out Temperature</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Ambient Temperature</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Pump Inlet Pressure</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Pump Outlet Pressure</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Comp 2 (%)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Suction Pressure (Bar)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Discharge Pressure (Bar)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">OPD Pressure</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Current (Amp)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Suction Temp.</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Discharge Temp</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Suction Sat</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Suction Temp</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Suction SH</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Run Hours</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">No. of Starts</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Evap in Temperature</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Evap out Temperature</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Ambient Temperature</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Pump Inlet Pressure</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Pump Outlet Pressure</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Current on MCC Electrical Panel</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Power factor</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                            <tr key={item._id} className="hover:bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2 text-sm font-medium whitespace-nowrap">{new Date(item.submissionDate).toISOString().split('T')[0]}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.LWT}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.Compressor1}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.Compressor2}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.WaterLeakage}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.RefrigerantLeakage}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.OilLevel}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.AbnormalNoise}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.Vibrations}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.MCCvoltage}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.input1}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.input2}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.input3}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.input4}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.input5}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.input6}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.input7}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.input8}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.input9}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.input10}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.input11}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.input12}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.input13}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.input14}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.input15}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.input16}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.input17}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.inputs1}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.inputs2}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.inputs3}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.inputs4}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.inputs5}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.inputs6}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.inputs7}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.inputs8}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.inputs9}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.inputs10}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.inputs11}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.inputs12}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.inputs13}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.inputs14}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.inputs15}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.inputs16}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.inputs17}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.inputs18}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.inputs19}</td>
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
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="yyyy/MM/dd" className="border rounded outline-0 p-2 shadow-md" />
                        </div>
                        <div>
                            <label className="block">End Date:</label>
                            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} dateFormat="yyyy/MM/dd" className="border rounded outline-0 p-2 shadow-md" />
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

export default AirChillerDash2d;
