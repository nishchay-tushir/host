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

const SoftenerUnitDash1d = () => {
    
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const toggleDailyDropdown = (e) => {
    e.preventDefault();
    navigate('/softener_unit_1_d_dashboard');
  };

  const toggleMonthlyDropdown = (e) => {
    e.preventDefault();
    navigate('/softener_unit_1_m_dashboard');
  };

  const toggleQuarterlyDropdown = (e) => {
    e.preventDefault();
    navigate('/softener_unit_1_q_dashboard');
  };

  const toggleTimeBasedDropdown = (e) => {
    e.preventDefault();
    navigate('/softener_unit_1_tb_dashboard');
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
      .get("https://scheq.in/api/softener_unit_1_d")
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
        'Main Panel Supply',
        'Valve Carbon Filter',
        'Valve Sand Filter',
        'Leakage Check',
        'Carbon Filter Regeneration',
        'Sand Filter Backwash',
        'Sand Filter Service',
        'Sand Filter Rinse',
        'Carbon Filter Backwash',
        'Carbon Filter Service',
        'Carbon Filter Rinse',
        'NaCl Stock',
        'Sodium Hypo Stock',
        'Dosing Operation',
        'Flow Meter Inlet Reading',
        'Flow Meter Outlet Reading',
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
                item.mainPanelSupply,
                item.valveCarbonFilter,
                item.valveSandFilter,
                item.leakageCheck,
                item.carbonFilterRegeneration,
                item.sandFilterBackwash,
                item.sandFilterService,
                item.sandFilterRinse,
                item.carbonFilterBackwash,
                item.carbonFilterService,
                item.carbonFilterRinse,
                item.naClStock,
                item.sodiumHypoStock,
                item.dosingOperation,
                item.flowMeterInletReading,
                item.flowMeterOutletReading,
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
                '',
            ];
            csvRows.push(zeroRow.join(','));
        }
    });

    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'softener_unit_1_daily_checksheet_data.csv');
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
                    <h1 className='text-2xl mt-2 font-extrabold text-gray-200'>Softener Unit - 1 Dashboard VT1014532-F10</h1>
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
                <h1 className="text-2xl text-center font-bold mb-4">Softener Unit - 1 Daily Dashboard</h1>
                {data.slice(0, 1).map((item) => (
                    <div key={item._id} className="p-4 border rounded shadow-md">
                        <h2 className="font-semibold text-xl text-center mb-2">Visual Inspection Status</h2><br />
                        <div className="grid grid-cols-4 gap-y-12 gap-x-4">
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Main Panel Supply", "mainPanelSupply")} />
                                <p className="text-center mt-2">Main Panel Supply</p>
                            </div>

                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Valve Carbon Filter", "valveCarbonFilter")} />
                                <p className="text-center mt-2">Valve Carbon Filter</p>
                            </div>

                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Valve Sand Filter", "valveSandFilter")} />
                                <p className="text-center mt-2">Valve Sand Filter</p>
                            </div>

                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Leakage Check", "leakageCheck")} />
                                <p className="text-center mt-2">Leakage Check</p>
                            </div>

                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Carbon Filter Regeneration", "carbonFilterRegeneration")} />
                                <p className="text-center mt-2">Carbon Filter Regeneration</p>
                            </div>

                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Sand Filter Backwash", "sandFilterBackwash")} />
                                <p className="text-center mt-2">Sand Filter Backwash</p>
                            </div>

                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Sand Filter Service", "sandFilterService")} />
                                <p className="text-center mt-2">Sand Filter Service</p>
                            </div>

                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Sand Filter Rinse", "sandFilterRinse")} />
                                <p className="text-center mt-2">Sand Filter Rinse</p>
                            </div>

                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Carbon Filter Backwash", "carbonFilterBackwash")} />
                                <p className="text-center mt-2">Carbon Filter Backwash</p>
                            </div>

                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Carbon Filter Service", "carbonFilterService")} />
                                <p className="text-center mt-2">Carbon Filter Service</p>
                            </div>

                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Carbon Filter Rinse", "carbonFilterRinse")} />
                                <p className="text-center mt-2">Carbon Filter Rinse</p>
                            </div>

                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("NaCl Stock", "naClStock")} />
                                <p className="text-center mt-2">NaCl Stock</p>
                            </div>

                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Sodium Hypo Stock", "sodiumHypoStock")} />
                                <p className="text-center mt-2">Sodium Hypo Stock</p>
                            </div>

                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Dosing Operation", "dosingOperation")} />
                                <p className="text-center mt-2">Dosing Operation</p>
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
                            { inputData: 'flowMeterInletReading', label: 'Flow Meter Inlet Reading', backgroundColor: 'darkblue' },
                            { inputData: 'flowMeterOutletReading', label: 'Flow Meter Outlet Reading', backgroundColor: 'crimson' },
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
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Main Panel Supply</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Valve Carbon Filter</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Valve Sand Filter</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Leakage Check</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Carbon Filter Regeneration</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Sand Filter Backwash</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Sand Filter Service</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Sand Filter Rinse</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Carbon Filter Backwash</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Carbon Filter Service</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Carbon Filter Rinse</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">NaCl Stock</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Sodium Hypo Stock</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Dosing Operation</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Flow Meter Inlet Reading</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Flow Meter Outlet Reading</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                            <tr key={item._id} className="hover:bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2 text-sm font-medium whitespace-nowrap">{new Date(item.submissionDate).toISOString().split('T')[0]}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.mainPanelSupply}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.valveCarbonFilter}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.valveSandFilter}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.leakageCheck}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.carbonFilterRegeneration}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.sandFilterBackwash}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.sandFilterService}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.sandFilterRinse}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.carbonFilterBackwash}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.carbonFilterService}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.carbonFilterRinse}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.naClStock}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.sodiumHypoStock}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.dosingOperation}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.flowMeterInletReading}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.flowMeterOutletReading}</td>
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

export default SoftenerUnitDash1d;
