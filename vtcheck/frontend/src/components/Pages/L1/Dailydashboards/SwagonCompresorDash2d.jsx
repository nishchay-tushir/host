import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import vitesco from '../../../Assets/vitesco.png';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const SwagonCompresorDash2d = () => {
    
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const toggleDailyDropdown = (e) => {
    e.preventDefault();
    navigate('/swagon_compressor_2_d_dashboard');
  };

  const toggleMonthlyDropdown = (e) => {
    e.preventDefault();
    navigate('/swagon_compressor_2_m_dashboard');
  };

  const toggleQuarterlyDropdown = (e) => {
    e.preventDefault();
    navigate('/swagon_compressor_2_q_dashboard');
  };

  const toggleTimeBasedDropdown = (e) => {
    e.preventDefault();
    navigate('/swagon_compressor_2_tb_dashboard');
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
      .get("https://scheq.in/api/swagon_compressor_2_d")
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

  const exportToCSV = () => {
    const csvRows = [];

    const headers = [
        'Date',
        'Condition of the Swagon Compressor',
        'Display parameter (Temperature)',
        'Humidity',
        'Cooling',
        'Leakage of Refrigerant Line Joints',
        'Clogging in the Filter',
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
                item.WorkingCondition,
                item.Temp,
                item.Humidity,
                item.Cooling,
                item.Leakage,
                item.Clogging,
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
                '',
            ];
            csvRows.push(zeroRow.join(','));
        }
    });

    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', '/swagon_compressor_2_daily_checksheet_data.csv');
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
                    <h1 className='text-2xl mt-2 font-extrabold text-gray-200'>Swagon Compresor - 2 Dashboard VT1014532-F10</h1>
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
                <h1 className="text-2xl text-center font-bold mb-4">Swagon Compresor - 2 Daily Dashboard</h1>
                {data.slice(0, 1).map((item) => (
                    <div key={item._id} className="p-4 border rounded shadow">
                        <h2 className="font-semibold text-xl text-center mb-2">Visual Inspection</h2><br />
                        <div className="grid grid-cols-4 gap-y-12 gap-x-4">
                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Condition of the Swagon Compressor", "WorkingCondition")} />
                            <p className="text-center mt-2">Condition of the Swagon Compressor</p>
                        </div>

                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Display parameter (Temperature)", "Temp")} />
                            <p className="text-center mt-2">Display parameter (Temperature)</p>
                        </div>

                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Humidity", "Humidity")} />
                            <p className="text-center mt-2">Humidity</p>
                        </div>

                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Cooling", "Cooling")} />
                            <p className="text-center mt-2">Cooling</p>
                        </div>

                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Leakage of Refrigerant Line Joints", "Leakage")} />
                            <p className="text-center mt-2">Leakage of Refrigerant Line Joints</p>
                        </div>

                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Clogging in the Filter", "Clogging")} />
                            <p className="text-center mt-2">Clogging in the Filter</p>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>

                <div className="ml-56 bg-white p-4 m-4 shadow-md">
                  <h1 className="font-semibold text-xl text-center mb-2">Data Chart</h1><br />
                    <div className="overflow-y-auto overflow-x-auto max-h-96">
                        <table className="table-auto border-collapse w-full bg-white shadow-md">
                        <thead className="bg-gray-200 sticky top-0">
                            <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Date</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Condition of the Swagon Compressor</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Display parameter (Temperature)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Humidity</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Cooling</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Leakage of Refrigerant Line Joints</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Clogging in the Filter</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                            <tr key={item._id} className="hover:bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2 text-sm font-medium whitespace-nowrap">{new Date(item.submissionDate).toISOString().split('T')[0]}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.WorkingCondition}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.Temp}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.Humidity}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.Cooling}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.Leakage}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.Clogging}</td>
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

export default SwagonCompresorDash2d;
