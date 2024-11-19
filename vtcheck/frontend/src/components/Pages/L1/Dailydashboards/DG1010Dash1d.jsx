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

const DG1010Dash1d = () => {
    
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const toggleDailyDropdown = (e) => {
    e.preventDefault();
    navigate('/dg_1010_1_d_dashboard');
  };

  const toggleMonthlyDropdown = (e) => {
    e.preventDefault();
    navigate('/dg_1010_1_d_dashboard');
  };

  const toggleQuarterlyDropdown = (e) => {
    e.preventDefault();
    navigate('/dg_1010_1_d_dashboard');
  };

  const toggleTimeBasedDropdown = (e) => {
    e.preventDefault();
    navigate('/dg_1010_1_d_dashboard');
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
      .get("https://scheq.in/api/dg_1010_1_d")
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
        'Outlet Valve of Diesel Tank',
        'Emergency Switch',
        'DG Set Mode',
        'Oil Leakage',
        'Coolant Level',
        'Exhaust Condition',
        'Abnormal Vibration / Noise',
        'Diesel Level (Ltrs)',
        'Avg. Voltage of Alternator',
        'Avg. Amps of Alternator',
        'Kilowatt Hours (KWH)',
        'Power of Alternator (KW)',
        'Power factor of DG (PF)',
        'Frequency of Alternator',
        'Running time of Engine (Hours)',
        'Coolant Temperature (⁰C)',
        'Oil Temperature (⁰C)',
        'PCC Battery Voltage (V)',
        'Torque (%)',
        'RPM of Engine',
        'Fault History',
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
                item.OutletValve,
                item.EmergencySwitch,
                item.DGmode,
                item.OilLeakage,
                item.CoolantLevel,
                item.DGexhaust,
                item.VibrationsNoises,
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
                '', 
            ];
            csvRows.push(zeroRow.join(','));
        }
    });

    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'dg_1010_1_daily_checksheet_data.csv');
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
                    <h1 className='text-2xl mt-2 font-extrabold text-gray-200'>DG-1010 - 1 Dashboard VT1014532-F10</h1>
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
                <h1 className="text-2xl text-center font-bold mb-4">DG-1010 - 1 Daily Dashboard</h1>
                {data.slice(0, 1).map((item) => (
                    <div key={item._id} className="p-4 border rounded shadow-md">
                        <h2 className="font-semibold text-xl text-center mb-2">Visual Inspection Status</h2><br />
                        <div className="grid grid-cols-4 gap-y-12 gap-x-4">
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Outlet Valve of Diesel Tank", "OutletValve")} />
                                <p className="text-center mt-2">Outlet Valve of Diesel Tank</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Emergency Switch", "EmergencySwitch")} />
                                <p className="text-center mt-2">Emergency Switch</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("DG Set Mode", "DGmode")} />
                                <p className="text-center mt-2">DG Set Mode</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Oil Leakage Present", "OilLeakage")} />
                                <p className="text-center mt-2">Oil Leakage</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Coolant Level", "CoolantLevel")} />
                                <p className="text-center mt-2">Coolant Level</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Exhaust Condition", "DGexhaust")} />
                                <p className="text-center mt-2">Exhaust Condition</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Oil Leakage Present", "VibrationsNoises")} />
                                <p className="text-center mt-2">Abnormal Vibration / Noise</p>
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
                            { inputData: 'input1', label: 'Diesel Level (Ltrs)', backgroundColor: 'darkblue' },
                            { inputData: 'input2', label: 'Avg. Voltage of Alternator', backgroundColor: 'crimson' },
                            { inputData: 'input3', label: 'Avg. Amps of Alternator', backgroundColor: 'darkgreen' },
                            { inputData: 'input4', label: 'Kilowatt Hours (KWH)', backgroundColor: 'orange' },
                            { inputData: 'input5', label: 'Power of Alternator (KW)', backgroundColor: 'gray' },
                            { inputData: 'input6', label: 'Power Factor of DG (PF)', backgroundColor: 'yellow' },
                            { inputData: 'input7', label: 'Frequency of Alternator', backgroundColor: 'purple' },
                            { inputData: 'input8', label: 'Running time of Engine (Hours)', backgroundColor: 'darkorange' },
                            { inputData: 'input9', label: 'Coolant Temperature (⁰C)', backgroundColor: 'violet' },
                            { inputData: 'input10', label: 'Oil Temperature (⁰C)', backgroundColor: 'yellowgreen' },
                            { inputData: 'input11', label: 'PCC Battery Voltage (V)', backgroundColor: 'cyan' },
                            { inputData: 'input12', label: 'Torque (%)', backgroundColor: 'gold' },
                            { inputData: 'input13', label: 'RPM of Engine', backgroundColor: 'green' },
                            { inputData: 'input14', label: 'Fault History', backgroundColor: 'darkgray' },
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
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Outlet Valve of Diesel Tank</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Emergency Switch</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">DG Set Mode</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Oil Leakage</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Coolant Level</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Exhaust Condition</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Abnormal Vibration / Noise</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Diesel Level (Ltrs)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Engine Speed</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Lube Oil Pressure</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Coolant Temperature (°C)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Intake Air Temperature (°C)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Engine Run Time (Hour)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Battery (V)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Actuator Command (%)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">ECP Fault Code</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Fault History</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                            <tr key={item._id} className="hover:bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2 text-sm font-medium whitespace-nowrap">{new Date(item.submissionDate).toISOString().split('T')[0]}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.OutletValve}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.EmergencySwitch}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.DGmode}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.OilLeakage}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.CoolantLevel}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.DGexhaust}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.VibrationsNoises}</td>
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

export default DG1010Dash1d;
