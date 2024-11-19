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

const FireExtinguisherDash144m = () => {
    
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
      .get("https://scheq.in/api/fire_extinguisher_144_m")
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
        'Check pressure (Acceptance Criteria - In Green zone)',
        'Check tupe as mentioned in fire extinguisher (Acceptance Criteria - OK)',
        'Check seal condition(Proper) (Acceptance Criteria - Done)',
        'Check hose pipe condition (Acceptance Criteria - Done)',
        'Check hose pipe resting bracket (Acceptance Criteria - Done)',
        'Check hose pipe clamping (Acceptance Criteria - Not loose)',
        'Check \'L\' type clamping condition  (Acceptance Criteria - No loose, Proper)',
        'Check refrence due date is not competed (Acceptance Criteria - Done)',
        'Check cleanliness of unit (Acceptance Criteria -Dust free)',
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
                '',
            ];
            csvRows.push(zeroRow.join(','));
        }
    });

    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'fire_extinguisher_144_monthly_checksheet_data.csv');
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
                    <h1 className='text-2xl my-4 font-extrabold text-gray-200'>Fire Extinguisher - 144 Dashboard VT1014532-F10</h1>
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
                <h1 className="text-2xl text-center font-bold mb-4">Fire Extinguisher - 144 Monthly Dashboard</h1>
                {data.slice(0, 1).map((item) => (
                    <div key={item._id} className="p-4 border rounded shadow">
                        <h2 className="font-semibold text-xl text-center mb-2">Visual Inspection</h2><br />
                        <div className="grid grid-cols-4 gap-y-12 gap-x-4">
                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check pressure (Acceptance Criteria - In Green zone)", "dropdown1")} />
                            <p className="text-center mt-2">Check pressure (Acceptance Criteria - In Green zone)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check tube as mentioned in fire extinguisher (Acceptance Criteria - OK)", "dropdown2")} />
                            <p className="text-center mt-2">Check tube as mentioned in fire extinguisher (Acceptance Criteria - OK)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check seal condition (Proper) (Acceptance Criteria - Done)", "dropdown3")} />
                            <p className="text-center mt-2">Check seal condition (Proper) (Acceptance Criteria - Done)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check hose pipe condition (Acceptance Criteria - Done)", "dropdown4")} />
                            <p className="text-center mt-2">Check hose pipe condition (Acceptance Criteria - Done)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check hose pipe resting bracket (Acceptance Criteria - Done)", "dropdown5")} />
                            <p className="text-center mt-2">Check hose pipe resting bracket (Acceptance Criteria - Done)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check hose pipe clamping (Acceptance Criteria - Not loose)", "dropdown6")} />
                            <p className="text-center mt-2">Check hose pipe clamping (Acceptance Criteria - Not loose)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check 'L' type clamping condition (Acceptance Criteria - No loose, Proper)", "dropdown7")} />
                            <p className="text-center mt-2">Check "L" type clamping condition (Acceptance Criteria - No loose, Proper)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check reference due date is not completed (Acceptance Criteria - Done)", "dropdown8")} />
                            <p className="text-center mt-2">Check reference due date is not completed (Acceptance Criteria - Done)</p>
                        </div>


                        <div className="shadow-md p-2 bg-white rounded-sm">
                            <Pie data={getPieData("Check cleanliness of unit (Acceptance Criteria - Dust free)", "dropdown9")} />
                            <p className="text-center mt-2">Check cleanliness of unit (Acceptance Criteria - Dust free)</p>
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
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Date</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check pressure (Acceptance Criteria - In Green zone)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check tupe as mentioned in fire extinguisher (Acceptance Criteria - OK)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check seal condition(Proper) (Acceptance Criteria - Done)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check hose pipe condition (Acceptance Criteria - Done)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check hose pipe resting bracket (Acceptance Criteria - Done)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check hose pipe clamping (Acceptance Criteria - Not loose)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check 'L' type clamping condition  (Acceptance Criteria - No loose, Proper)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check refrence due date is not competed (Acceptance Criteria - Done)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold min-w-40">Check cleanliness of unit (Acceptance Criteria -Dust free)</th>
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

export default FireExtinguisherDash144m;
