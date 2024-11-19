import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const AirChiller1d = () => {
  const [formData, setFormData] = useState({
    LWT: '',
    Compressor1: '',
    Compressor2: '',
    WaterLeakage: '',
    RefrigerantLeakage: '',
    OilLevel: '',
    AbnormalNoise: '',
    Vibrations: '',
    MCCvoltage: '',

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
    input13: '',
    input14: '',
    input15: '',
    input16: '',
    input17: '',

    inputs1: '',
    inputs2: '',
    inputs3: '',
    inputs4: '',
    inputs5: '',
    inputs6: '',
    inputs7: '',
    inputs8: '',
    inputs9: '',
    inputs10: '',
    inputs11: '',
    inputs12: '',
    inputs13: '',
    inputs14: '',
    inputs15: '',
    inputs16: '',
    inputs17: '',
    inputs18: '',
    inputs19: '',
    remarks: '',
  });
  
  const [submittedToday, setSubmittedToday] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  const inputLabels1 = [
    'Comp 1 (%)', 'Suction Pressure (Bar)', 'Discharge Pressure (Bar)', 'OPD Pressure', 'Current (Amp)',
    'Suction Temp.', 'Discharge Temp', 'Suction Sat', 'Suction Temp', 'Suction SH',
    'Run Hours', 'No. of Starts', 'Evap in Temperature', 'Evap out Temperature', 'Ambient Temperature',
    'Pump Inlet Pressure', 'Pump Outlet Pressure'
  ];

  const inputLabels2 = [
    'Comp 2 (%)', 'Suction Pressure (Bar)', 'Discharge Pressure (Bar)', 'OPD Pressure', 'Current (Amp)',
    'Suction Temp.', 'Discharge Temp', 'Suction Sat', 'Suction Temp', 'Suction SH',
    'Run Hours', 'No. of Starts', 'Evap in Temperature', 'Evap out Temperature', 'Ambient Temperature',
    'Pump Inlet Pressure', 'Pump Outlet Pressure', 'Check current on MCC electrical panel', 'Check the power factor'
  ];

  useEffect(() => {
        // Fetch submission status for today
        axios.get('https://scheq.in/api/air_chiller_1_d/status')
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
            axios.post('https://scheq.in/api/air_chiller_1_d', autoFormData)
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
        
        axios.post('https://scheq.in/api/air_chiller_1_d', formData)
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
      <h1 className='text-4xl font-semibold mb-6 text-center'>Air Chiller - 1</h1>
      <h1 className='text-xl font-semibold text-center'>Equipment Name: Air Cooled Chiller Unit 1</h1>
      <h1 className='text-xl font-semibold mb-6 text-center'>(Equipment no: VT/FM/UTM/ACC/090)</h1>
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
                <label className='text-md font-medium mb-1'>LWT<br /><span className='text-sm'>(Acceptance Criteria - 20-25°C)</span></label>
                <select name='LWT' value={formData.LWT || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="20-25°C">20-25°C</option>
                  <option value="Below 20-25°C">Below 20-25°C</option>
                  <option value="Above 20-25°C">Above 20-25°C</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Compressor 1<br /><span className='text-sm'>(Acceptance Criteria - ON/OFF)</span></label>
                <select name='Compressor1' value={formData.Compressor1 || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="ON">ON</option>
                  <option value="OFF">OFF</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Compressor 2<br /><span className='text-sm'>(Acceptance Criteria - ON/OFF)</span></label>
                <select name='Compressor2' value={formData.Compressor2 || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="ON">ON</option>
                  <option value="OFF">OFF</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check if any Water Leakage found<br /><span className='text-sm'>(Acceptance Criteria - No)</span></label>
                <select name='WaterLeakage' value={formData.WaterLeakage || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check if any Refrigerant leakage found<br /><span className='text-sm'>(Acceptance Criteria - No)</span></label>
                <select name='RefrigerantLeakage' value={formData.RefrigerantLeakage || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check oil level of compressor<br /><span className='text-sm'>(Acceptance Criteria - Maximum)</span></label>
                <select name='OilLevel' value={formData.OilLevel || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check if any Abnormal Noise<br /><span className='text-sm'>(Acceptance Criteria - No)</span></label>
                <select name='AbnormalNoise' value={formData.AbnormalNoise || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check for any Vibration<br /><span className='text-sm'>(Acceptance Criteria - No)</span></label>
                <select name="Vibrations" value={formData.Vibrations || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check Voltage on MCC electrical panel<br /><span className='text-sm'>(Acceptance Criteria - 415 V)</span></label>
                <select name="MCCvoltage" value={formData.MCCvoltage || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="415 V">415 V</option>
                  <option value="Above 415 V">Above 415 V</option>
                  <option value="Below 415 V">Below 415 V</option>
                </select>
              </div>
            </div>
            <br /><br /><br /><hr /><hr /><br /><br />
            <h1 className='text-2xl font-semibold mb-6 text-center'>Visual Inspection & Record: Compressor - 1</h1><br /><br />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {inputLabels1.map((label, i) => (
                <div key={i} className='flex flex-col'>
                  <label className='text-md font-medium mb-1'>{label}</label>
                  <input type="number" name={`input${i + 1}`} value={formData[`input${i + 1}`]} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>
              ))}
            </div>
            <br />
            <br /><br /><br /><hr /><hr /><br /><br />
            <h1 className='text-2xl font-semibold mb-6 text-center'>Visual Inspection & Record: Compressor - 2</h1><br /><br />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {inputLabels2.map((label, i) => (
                <div key={i} className='flex flex-col'>
                  <label className='text-md font-medium mb-1'>{label}</label>
                  <input type="number" name={`inputs${i + 1}`} value={formData[`inputs${i + 1}`]} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500' />
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

export default AirChiller1d;