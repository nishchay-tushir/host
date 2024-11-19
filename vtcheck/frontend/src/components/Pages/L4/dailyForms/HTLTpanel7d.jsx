import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const HTLTpanel7d = () => {
  const [formData, setFormData] = useState({
    indicatorRYB: '',
    breakerCondition: '',
    breakerOff: '',
    breakerTrip: '',
    springCharge: '',
    tripCktHealthy: '',
    breakerTestPosition: '',
    breakerServicePosition: '',
    tripOC_EF: '',
    DCSupplyHealthy: '',
    spareHeaterCktHealthy: '',
    emergencySwitch: '',
    panelKeyAvailable: '',
    selectorSwitches: '',
    burnSmell: '',
    fireExtinguisher: '',
    remarks: '',
  });
  
  const [submittedToday, setSubmittedToday] = useState(null);
  const { enqueueSnackbar } = useSnackbar();


  useEffect(() => {
    // Fetch submission status for today
    axios.get('https://scheq.in/api/ht_lt_panel_7_d/status')
      .then(response => {
        if (response.data.submittedToday) {
          setSubmittedToday('Filled for today');
        } else {
          setSubmittedToday('Not Filled');
        }
      })
      .catch(error => {
        console.error('Error fetching status:', error);
      });

    // Automatically submit '0' at the end of the day if not submitted
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0); // set time to midnight
    const timeUntilMidnight = midnight.getTime() - now.getTime();

    const timer = setTimeout(() => {
      if (submittedToday !== 'Filled for today') {
        const autoFormData = {
          ...Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: '0' }), {}),
          date: new Date().toISOString().split('T')[0], // include the current date
        };
        axios.post('https://scheq.in/api/ht_lt_panel_7_d', autoFormData)
          .then(response => {
            enqueueSnackbar('Form auto-submitted with 0 values!', { variant: 'info' });
            setSubmittedToday('Filled for today');
          })
          .catch(error => {
            console.error('Error auto-submitting form:', error);
          });
      }
    }, timeUntilMidnight);

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, [submittedToday, formData, enqueueSnackbar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emptyFields = Object.entries(formData).filter(([key, value]) => value === '').map(([key]) => key);
    if (emptyFields.length > 0) {
      enqueueSnackbar('Please fill out all fields before submitting.', { variant: 'error' });
      return;
    }
    
    axios.post('https://scheq.in/api/ht_lt_panel_7_d', formData)
      .then(response => {
        enqueueSnackbar('Form submitted successfully!', { variant: 'success' });
        setSubmittedToday('Filled for today');
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        enqueueSnackbar('Error submitting form. Please try again.', { variant: 'error' });
      });
  };


  return (
    <div className='p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg my-6'>
      <h1 className='text-3xl font-semibold mb-8 text-center'>Daily Checksheet</h1>
      <h1 className='text-4xl font-semibold mb-6 text-center'>HT & LT Panel - 7</h1>
      <h1 className='text-xl font-semibold text-center'>Equipment Name: 22KV Outgoing Indoor VCB HT Panel</h1>
      <h1 className='text-xl font-semibold mb-6 text-center'>(Equipment no: VT/FM/UTM/HTP/OG/007)</h1>
      <hr /><hr /><br /><br />
      {submittedToday === 'Filled for today' ? (
        <div className='text-center text-green-500 text-xl font-semibold'>
          {submittedToday}
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
          <h1 className='text-2xl font-semibold mb-6 text-center'>Visual Inspection</h1><br />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check indicator R, Y, B signal<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                <select name='indicatorRYB' value={formData.indicatorRYB || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="ON">ON</option>
                    <option value="OFF">OFF</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check for breaker condition<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                <select name='breakerCondition' value={formData.breakerCondition || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="ON">ON</option>
                    <option value="OFF">OFF</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check for breaker off<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                <select name='breakerOff' value={formData.breakerOff || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="ON">ON</option>
                    <option value="OFF">OFF</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check for breaker trip<br /><span className='text-sm'>(Acceptance Criteria - No trip)</span></label>
                <select name='breakerTrip' value={formData.breakerTrip || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="No trip">No trip</option>
                    <option value="Tripped">Tripped</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check for spring charge<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                <select name='springCharge' value={formData.springCharge || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="ON">ON</option>
                    <option value="OFF">OFF</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check for trip ckt healthy<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                <select name='tripCktHealthy' value={formData.tripCktHealthy || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="ON">ON</option>
                    <option value="OFF">OFF</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check for breaker in test position<br /><span className='text-sm'>(Acceptance Criteria - OFF)</span></label>
                <select name='breakerTestPosition' value={formData.breakerTestPosition || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="OFF">OFF</option>
                    <option value="ON">ON</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check for breaker in service position<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                <select name='breakerServicePosition' value={formData.breakerServicePosition || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="ON">ON</option>
                    <option value="OFF">OFF</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check 3PH OC & EF trip<br /><span className='text-sm'>(Acceptance Criteria - OFF)</span></label>
                <select name='tripOC_EF' value={formData.tripOC_EF || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="OFF">OFF</option>
                    <option value="ON">ON</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check for DC supply healthy<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                <select name='DCSupplyHealthy' value={formData.DCSupplyHealthy || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="ON">ON</option>
                    <option value="OFF">OFF</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check for spare heater ckt healthy<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                <select name='spareHeaterCktHealthy' value={formData.spareHeaterCktHealthy || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="ON">ON</option>
                    <option value="OFF">OFF</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check emergency switch<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                <select name='emergencySwitch' value={formData.emergencySwitch || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="ON">ON</option>
                    <option value="OFF">OFF</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Suitable panel key is available<br /><span className='text-sm'>(Acceptance Criteria - Available)</span></label>
                <select name='panelKeyAvailable' value={formData.panelKeyAvailable || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="Available">Available</option>
                    <option value="Not Available">Not Available</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check all selector switches<br /><span className='text-sm'>(Acceptance Criteria - Remote)</span></label>
                <select name='selectorSwitches' value={formData.selectorSwitches || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="Remote">Remote</option>
                    <option value="Local">Local</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Any burning smell?<br /><span className='text-sm'>(Acceptance Criteria - NO)</span></label>
                <select name='burnSmell' value={formData.burnSmell || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="NO">NO</option>
                    <option value="YES">YES</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Fire extinguisher in place<br /><span className='text-sm'>(Acceptance Criteria - Yes)</span></label>
                <select name='fireExtinguisher' value={formData.fireExtinguisher || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                </div>
            </div>
            <br /><br />
                <div className='flex flex-col'>
                  <label className='text-md font-medium mb-1'>Highlight Issues (if any). Type 'None' for No Issues.</label>
                  <textarea name='remarks' value={formData.remarks} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Enter any additional remarks here' />
                </div>
            <br />
            <div className='flex justify-center'>
              <button type="submit" className='mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>Submit</button>
            </div>
            <br />
          </form>
        </>
      )}
    </div>
  );
}

export default HTLTpanel7d;
