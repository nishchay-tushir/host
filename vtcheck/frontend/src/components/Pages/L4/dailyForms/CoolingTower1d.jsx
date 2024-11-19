import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const CoolingTower1d = () => {
  const [formData, setFormData] = useState({
    PowerSupply: '',
    OilLevel: '',
    WaterLevel: '',
    WaterLeakage: '',
    PressuriseUnit: '',
    Pumps: '',
    PipeLeaks: '',
    VibrationsNoises: '',
    remarks: '',
  });
  
  const [submittedToday, setSubmittedToday] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    // Fetch submission status for today
    axios.get('https://scheq.in/api/cooling_tower_1_d/status')
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
        axios.post('https://scheq.in/api/cooling_tower_1_d', autoFormData)
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
    
    axios.post('https://scheq.in/api/cooling_tower_1_d', formData)
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
      <h1 className='text-4xl font-semibold mb-6 text-center'>Cooling Tower - 1</h1>
      <h1 className='text-xl font-semibold text-center'>Equipment Name: Cooling Tower-1</h1>
      <h1 className='text-xl font-semibold mb-6 text-center'>(Equipment no: VT/FM/UTM/CT/092)</h1>
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
                <label className='text-md font-medium mb-1'>Check main Panel Power Supply is ON<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                <select name='PowerSupply' value={formData.PowerSupply || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="ON">ON</option>
                  <option value="OFF">OFF</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check the Operating Oil Level<br /><span className='text-sm'>(Acceptance Criteria - Maximum)</span></label>
                <select name='OilLevel' value={formData.OilLevel || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="Maximum">Maximum</option>
                  <option value="Below Maximum">Below Maximum</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check Water Level of the Cooling in Sump<br /><span className='text-sm'>(Acceptance Criteria - High)</span></label>
                <select name='WaterLevel' value={formData.WaterLevel || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Any Leakage of Water?<br /><span className='text-sm'>(Acceptance Criteria - No)</span></label>
                <select name='WaterLeakage' value={formData.WaterLeakage || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check Pressurise Unit<br /><span className='text-sm'>(Acceptance Criteria - Auto)</span></label>
                <select name='PressuriseUnit' value={formData.PressuriseUnit || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="Auto">Auto</option>
                  <option value="Manual">Manual</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check all pumps<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                <select name='Pumps' value={formData.Pumps || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="ON">ON</option>
                  <option value="OFF">OFF</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Any Water Pipe Line Leakage?<br /><span className='text-sm'>(Acceptance Criteria - No)</span></label>
                <select name="PipeLeaks" value={formData.PipeLeaks || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Any Abnormal Noise or Vibrations?<br /><span className='text-sm'>(Acceptance Criteria - No)</span></label>
                <select name="VibrationsNoises" value={formData.VibrationsNoises || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
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

export default CoolingTower1d;