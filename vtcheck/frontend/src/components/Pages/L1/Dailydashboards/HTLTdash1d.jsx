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

const HTLTdash1d = () => {
    
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const toggleDailyDropdown = (e) => {
    e.preventDefault();
    navigate('/ht_lt_panel_1_d_dashboard');
  };

  const toggleMonthlyDropdown = (e) => {
    e.preventDefault();
    navigate('/ht_lt_panel_1_m_dashboard');
  };

  const toggleQuarterlyDropdown = (e) => {
    e.preventDefault();
    navigate('/ht_lt_panel_1_q_dashboard');
  };

  const toggleTimeBasedDropdown = (e) => {
    e.preventDefault();
    navigate('/ht_lt_panel_1_tb_dashboard');
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
      .get("https://scheq.in/api/ht_lt_panel_1_d")
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
        'Indicator RYB',
        'Breaker Condition',
        'Breaker Off',
        'Breaker Trip',
        'Spring Charge',
        'Trip Circuit Healthy',
        'Breaker in Test Position',
        'Breaker in Service Position',
        '3PH OC & EF trip',
        'DC Supply Healthy',
        'Spare Heater Circuit Healthy',
        'Emergency Switch',
        'Panel Key Availability',
        'Selector Switches',
        'Burning Smell',
        'Fire Extinguisher Nearby',
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
                item.indicatorRYB,
                item.breakerCondition,
                item.breakerOff,
                item.breakerTrip,
                item.springCharge,
                item.tripCktHealthy,
                item.breakerTestPosition,
                item.breakerServicePosition,
                item.tripOC_EF,
                item.DCSupplyHealthy,
                item.spareHeaterCktHealthy,
                item.emergencySwitch,
                item.panelKeyAvailable,
                item.selectorSwitches,
                item.burnSmell,
                item.fireExtinguisher,
                item.remarks,
            ];
            csvRows.push(row.join(','));
        } else {
            // If no data for the date, add a row with zeros
            const zeroRow = [
                date,
                0, // Indicator RYB
                0, // Breaker Condition
                0, // Breaker Off
                0, // Breaker Trip
                0, // Spring Charge
                0, // Trip Circuit Healthy
                0, // Breaker in Test Position
                0, // Breaker in Service Position
                0, // 3PH OC & EF trip
                0, // DC Supply Healthy
                0, // Spare Heater Circuit Healthy
                0, // Emergency Switch
                0, // Panel Key Availability
                0, // Selector Switches
                0, // Burning Smell
                0, // Fire Extinguisher Nearby
                '', // Remarks
            ];
            csvRows.push(zeroRow.join(','));
        }
    });

    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'ht_lt_panel_1_daily_checksheet_data.csv');
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
                    <h1 className='text-2xl mt-2 font-extrabold text-gray-200'>HT & LT Panel - 1 Dashboard VT1014532-F10</h1>
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
                <h1 className="text-2xl text-center font-bold mb-4">HT LT Panel - 1 Daily Dashboard</h1>
                {data.slice(0, 1).map((item) => (
                    <div key={item._id} className="p-4 border rounded shadow">
                        <h2 className="font-semibold text-xl text-center mb-2">Visual Inspection</h2><br />
                        <div className="grid grid-cols-4 gap-y-12 gap-x-4">
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Indicator RYB", "indicatorRYB")} />
                                <p className="text-center mt-2">Indicator RYB</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Breaker Condition", "breakerCondition")} />
                                <p className="text-center mt-2">Breaker Condition</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Breaker Off", "breakerOff")} />
                                <p className="text-center mt-2">Breaker Off</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Breaker Trip", "breakerTrip")} />
                                <p className="text-center mt-2">Breaker Trip</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Spring Charge", "springCharge")} />
                                <p className="text-center mt-2">Spring Charge</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Trip Circuit Healthy", "tripCktHealthy")} />
                                <p className="text-center mt-2">Trip Circuit Healthy</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Breaker in Test Position", "breakerTestPosition")} />
                                <p className="text-center mt-2">Breaker in Test Position</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Breaker in Service Position", "breakerServicePosition")} />
                                <p className="text-center mt-2">Breaker in Service Position</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("3PH OC & EF trip", "tripOC_EF")} />
                                <p className="text-center mt-2">3PH OC & EF trip</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("DC Supply Healthy", "DCSupplyHealthy")} />
                                <p className="text-center mt-2">DC Supply Healthy</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Spare Heater Circuit Healthy", "spareHeaterCktHealthy")} />
                                <p className="text-center mt-2">Spare Heater Circuit Healthy</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Emergency Switch", "emergencySwitch")} />
                                <p className="text-center mt-2">Emergency Switch</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Panel Key Availability", "panelKeyAvailable")} />
                                <p className="text-center mt-2">Panel Key Availability</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Selector Swicthes", "selectorSwitches")} />
                                <p className="text-center mt-2">Selector Swicthes</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Burning Smell", "burnSmell")} />
                                <p className="text-center mt-2">Burning Smell</p>
                            </div>
                            <div className="shadow-md p-2 bg-white rounded-sm">
                                <Pie data={getPieData("Fire Extinguisher Nearby", "fireExtinguisher")} />
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
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Indicator RYB</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Breaker Condition</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Breaker Off</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Breaker Trip</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Spring Charge</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Trip Circuit Healthy</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Breaker in Test Position</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Breaker in Service Position</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">3PH OC & EF trip</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">DC Supply Healthy</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Spare Heater Circuit Healthy</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Emergency Switch</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Panel Key Availability</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Selector Swicthes</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Burning Smell</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Fire Extinguisher Nearby</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold whitespace-nowrap w-1/12">Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                            <tr key={item._id} className="hover:bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2 text-sm font-medium whitespace-nowrap">{new Date(item.submissionDate).toISOString().split('T')[0]}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.indicatorRYB}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.breakerCondition}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.breakerOff}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.breakerTrip}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.springCharge}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.tripCktHealthy}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.breakerTestPosition}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.breakerServicePosition}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.tripOC_EF}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.DCSupplyHealthy}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.spareHeaterCktHealthy}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.emergencySwitch}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.panelKeyAvailable}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.selectorSwitches}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.burnSmell}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">{item.fireExtinguisher}</td>
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

export default HTLTdash1d;
