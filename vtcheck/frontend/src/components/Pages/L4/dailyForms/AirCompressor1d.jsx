import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const AirCompressor1d = () => {
  const [formData, setFormData] = useState({
    Housekeeping: '',
    AvailabilityFireExt: '',
    CompSwitch: '',
    AlarmIndication: '',
    ValveCondition: '',
    CondensateDrain: '',
    VibrationsNoises: '',
    AirOilLeak: '',
    OilLevel: '',
    InletOutlet: '',
    DrainCondensate: '',
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
    input8: '',
    input9: '',
    input10: '',
    input11: '',
    input12: '',
    remarks: '',
  });
  
  const [submittedToday, setSubmittedToday] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  const inputLabels = [
    'Check Running Hours', 'Check Loading Hours', 'Check Unload Hours', 'Check Loading Pressure',
    'Check Unloading Pressure', 'Check the compressor outlet pressure (BAR)', 'Check the compressor outlet temperature (⁰C)', 'Check main motor winding temperature',
    'Check oil winding tempreture', 'Check the tank gauge pressure', 'Check the main motor current load', 'Check the main motor current unload',
  ];

  useEffect(() => {
    // Fetch submission status for today
    axios.get('https://scheq.in/api/air_compressor_1_d/status')
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
        axios.post('https://scheq.in/api/air_compressor_1_d', autoFormData)
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
    
    axios.post('https://scheq.in/api/air_compressor_1_d', formData)
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
      <h1 className='text-4xl font-semibold mb-6 text-center'>Air Compressor - 1</h1>
      <h1 className='text-xl font-semibold text-center'>Equipment Name: Air Compressor - 1 (1653CFM/S ZR 275)</h1>
      <h1 className='text-xl font-semibold mb-6 text-center'>(Equipment no: VT/FM/UTM/AC920CFM/083)</h1>
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
                <label className='text-md font-medium mb-1'>Check the Housekeeping / Cleaning of Air Comp <br /><span className='text-sm'>(Acceptance Criteria - Clean)</span></label>
                <select name='Housekeeping' value={formData.Housekeeping || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="Clean">Clean</option>
                  <option value="Uncleaned">Uncleaned</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check the Availability of Fire Extinguisher & Rubber Mat<br /><span className='text-sm'>(Acceptance Criteria - Available)</span></label>
                <select name='AvailabilityFireExt' value={formData.AvailabilityFireExt || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="Available">Available</option>
                  <option value="Unavailable">Unavailable</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check Panel for switches of compressor & in Auto mode<br /><span className='text-sm'>(Acceptance Criteria - Auto)</span></label>
                <select name='CompSwitch' value={formData.CompSwitch || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="Auto">Auto</option>
                  <option value="Manual">Manual</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check any Alarm indication on display screen<br /><span className='text-sm'>(Acceptance Criteria - No Alarm)</span></label>
                <select name='AlarmIndication' value={formData.AlarmIndication || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="No-Alarm">No-Alarm</option>
                  <option value="Active-Alarm">Active-Alarm</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check outlet condition of valve<br /><span className='text-sm'>(Acceptance Criteria - Open)</span></label>
                <select name='ValveCondition' value={formData.ValveCondition || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="Open">Open</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check condensate drain (Auto drain condition)<br /><span className='text-sm'>(Acceptance Criteria - No Condensate Water)</span></label>
                <select name='CondensateDrain' value={formData.CondensateDrain || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="No Condensate Water">No Condensate Water</option>
                  <option value="Condensate Water Present">Condensate Water Present</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check for any vibration or noise<br /><span className='text-sm'>(Acceptance Criteria - Normal)</span></label>
                <select name="VibrationsNoises" value={formData.VibrationsNoises || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="Normal">Normal</option>
                  <option value="Abnormal">Abnormal</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check any leakages of air & oil<br /><span className='text-sm'>(Acceptance Criteria - No Leakage)</span></label>
                <select name="AirOilLeak" value={formData.AirOilLeak || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="No Leakage">No Leakage</option>
                  <option value="Leakage Present">Leakage Present</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check oil level in compressor<br /><span className='text-sm'>(Acceptance Criteria - Maximum)</span></label>
                <select name="OilLevel" value={formData.OilLevel || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="Maximum">Maximum</option>
                  <option value="Below Maximum">Below Maximum</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check inlet & outlet valve condition of air receiver tank<br /><span className='text-sm'>(Acceptance Criteria - Observation (On/Off))</span></label>
                <select name="InletOutlet" value={formData.InletOutlet || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="On">On</option>
                  <option value="Off">Off</option>
                </select>
              </div>
              <br />
              <h1 className='text-2xl font-medium text-center'>Drain Manually</h1>
              <br />
              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Drain the condensate manually of air receiver tanks<br /><span className='text-sm'>(Acceptance Criteria - No Condensate Water)</span></label>
                <select name="DrainCondensate" value={formData.DrainCondensate || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="Drained">Drained</option>
                  <option value="Undrained">Undrained</option>
                </select>
              </div>
            </div>
            <br /><br /><br /><hr /><hr /><br /><br />
            <h1 className='text-2xl font-semibold mb-6 text-center'>Visual Inspection & Record</h1><br /><br />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {inputLabels.map((label, i) => (
                <div key={i} className='flex flex-col'>
                  <label className='text-md font-medium mb-1'>{label}</label>
                  <input type="number" name={`input${i + 1}`} value={formData[`input${i + 1}`]} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>
              ))}
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

export default AirCompressor1d;
