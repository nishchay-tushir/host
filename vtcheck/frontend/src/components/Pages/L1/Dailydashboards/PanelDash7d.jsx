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

const PanelDash7d = () => {
    
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const toggleDailyDropdown = (e) => {
    e.preventDefault();
    navigate('/panel_7_d_dashboard');
  };

  const toggleMonthlyDropdown = (e) => {
    e.preventDefault();
    navigate('/panel_7_m_dashboard');
  };

  const toggleQuarterlyDropdown = (e) => {
    e.preventDefault();
    navigate('/panel_7_q_dashboard');
  };

  const toggleTimeBasedDropdown = (e) => {
    e.preventDefault();
    navigate('/panel_7_tb_dashboard');
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
      .get("https://scheq.in/api/panel_7_d")
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
      'Indicator R, Y, B',
      'Input Supply (240 V)',
      'Input Supply (415 V)',
      'Earthing & Neutral Connection',
      'Emergency Switch',
      'Auto/Manual Condition',
      'Burning Smell',
      'Abnormal Sound',
      'Panel Door Condition',
      'Rubber Mat Availability',
      'Door Lock Condition',
      'Fire Extinguisher',
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
                item.Indicator,
                item.InputSupply240,
                item.InputSupply415,
                item.EarthingConnection,
                item.EmergencySwitch,
                item.AutoManual,
                item.BurnSmell,
                item.AbnormalSound,
                item.PanelDoorCondition,
                item.RubberMat,
                item.DoorLockCondition,
                item.FireExtinguisher,
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
                '',
            ];
            csvRows.push(zeroRow.join(','));
        }
    });

    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'panel_7_daily_checksheet_data.csv');
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
                    <h1 className='text-2xl mt-2 font-extrabold text-gray-200'>Panel - 7 Dashboard VT1014532-F10</h1>
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
                <h1 className="text-2xl text-center font-bold mb-4">Panel - 7 Daily Dashboard</h1>
                {data.slice(0, 1).map((item) => (
                    <div key={item._id} className="p-4 border rounded shadow">
                        <h2 className="font-semibold text-xl text-center mb-2">Visual Inspection</h2><br />
                        <div className="grid grid-cols-4 gap-y-12 gap-x-4">
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Indicator R, Y, B", "Indicator")} />
                                <p className="text-center mt-2">Indicator R, Y, B</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Input Supply (240 V)", "InputSupply240")} />
                                <p className="text-center mt-2">Input Supply (240 V)</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Input Supply (415 V)", "InputSupply415")} />
                                <p className="text-center mt-2">Input Supply (415 V)</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Earthing & Neutral Connection", "EarthingConnection")} />
                                <p className="text-center mt-2">Earthing & Neutral Connection</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Emergency Switch", "EmergencySwitch")} />
                                <p className="text-center mt-2">Emergency Switch</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Auto/Manual Condition", "AutoManual")} />
                                <p className="text-center mt-2">Auto/Manual Condition</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Burning Smell", "BurnSmell")} />
                                <p className="text-center mt-2">Burning Smell</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Abnormal Sound", "AbnormalSound")} />
                                <p className="text-center mt-2">Abnormal Sound</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Panel Door Condition", "PanelDoorCondition")} />
                                <p className="text-center mt-2">Panel Door Condition</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Rubber Mat Availability", "RubberMat")} />
                                <p className="text-center mt-2">Rubber Mat Availability</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Door Lock Condition", "DoorLockCondition")} />
                                <p className="text-center mt-2">Door Lock Condition</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Fire Extinguisher Nearby", "FireExtinguisher")} />
                                <p className="text-center mt-2">Fire Extinguisher Nearby</p>
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
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Indicator R, Y, B</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Input Supply (240 V)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Input Supply (415 V)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Earthing & Neutral Connection</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Emergency Switch</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Auto/Manual Condition</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Burning Smell</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Abnormal Sound</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Panel Door Condition</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Rubber Mat Availability</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Door Lock Condition</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Fire Extinguisher</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                            <tr key={item._id} className="hover:bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2 text-sm font-medium whitespace-nowrap">{new Date(item.submissionDate).toISOString().split('T')[0]}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.Indicator}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.InputSupply240}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.InputSupply415}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.EarthingConnection}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.EmergencySwitch}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.AutoManual}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.BurnSmell}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.AbnormalSound}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.PanelDoorCondition}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.RubberMat}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.DoorLockCondition}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.FireExtinguisher}</td>
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

export default PanelDash7d;
