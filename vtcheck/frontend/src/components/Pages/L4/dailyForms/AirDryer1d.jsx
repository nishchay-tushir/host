import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const AirDryer1d = () => {
  const [formData, setFormData] = useState({
    dropdown1: '',
    dropdown2: '',
    dropdown3: '',
    dropdown4: '',
    dropdown5: '',
    dropdown6: '',
    dropdown7: '',
    dropdown8: '',
    Leakage: '',
    DrainValve: '',
    AbnormalNoise: '',
    FuseCondition: '',
    Cleanliness: '',
    RefrigerantLeak: '',
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
    input8: '',
    remarks: '',
  });
  
  const [submittedToday, setSubmittedToday] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  const dropdownLabels = [
    'Check the main electrical panel is ON', 'Check the switch of Dryer on main Panel', 'Check the switch of Dryer on sub panel', 
    'Check the Inlet valve condition (It must be open if it is in ON condition)', 'Check the outlet valve condition (It must be open if it is in ON condition)',
    'Check the run enable valve', 'Check the flow switch', 'Check the dryer running status'
  ];
  const inputLabels = [
    'Check for the dryer PDP from the display of dryer', 'Check the Relative humidity', 'Check for the running hours', 'Check the EEV 1 :%Opened',
    'Check the EEV 2 :%Opened', 'Check the electronic HGBP valve 1', 'Check the electronic HGBP valve 2', 'Check the calculated power from the display of dryer',
  ];

  useEffect(() => {
    // Fetch submission status for today
    axios.get('https://scheq.in/api/air_dryer_1_d/status')
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
        axios.post('https://scheq.in/api/air_dryer_1_d', autoFormData)
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
    
    axios.post('https://scheq.in/api/air_dryer_1_d', formData)
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
      <h1 className='text-4xl font-semibold mb-6 text-center'>Air Dryer - 1</h1>
      <h1 className='text-xl font-semibold text-center'>Equipment Name: Air Dryer-1 ( FD1500VSD+)</h1>
      <h1 className='text-xl font-semibold mb-6 text-center'>(Equipment no: VT/FM/UTM/AD1500VSD/084)</h1>
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
              {dropdownLabels.map((label, i) => (
                <div key={i} className='flex flex-col'>
                  <label className='text-md font-medium mb-1'>{label}<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                  <select name={`dropdown${i + 1}`} value={formData[`dropdown${i + 1}`]} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="ON">ON</option>
                    <option value="OFF">OFF</option>
                  </select>
                </div>
              ))}

              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Any Leakage Found?<br /><span className='text-sm'>(Acceptance Criteria - No)</span></label>
                <select name="Leakage" value={formData.Leakage || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check auto drain valve is working fine<br /><span className='text-sm'>(Acceptance Criteria - Yes)</span></label>
                <select name="DrainValve" value={formData.DrainValve || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Any abnormal sound and noise of the dryer?<br /><span className='text-sm'>(Acceptance Criteria - No)</span></label>
                <select name="AbnormalNoise" value={formData.AbnormalNoise || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check the fuse condition inside the Electrical sub panel of the dryer <br /><span className='text-sm'>(Acceptance Criteria - OK)</span></label>
                <select name="FuseCondition" value={formData.FuseCondition || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="OK">OK</option>
                  <option value="NOK">NOK</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check the cleanliness of the machine<br /><span className='text-sm'>(Acceptance Criteria - Clean)</span></label>
                <select name="Cleanliness" value={formData.Cleanliness || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="Clean">Clean</option>
                  <option value="Dirty">Dirty</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Any leakage of refrigerant line joints with Soap solution?<br /><span className='text-sm'>(Acceptance Criteria - NO)</span></label>
                <select name="RefrigerantLeak" value={formData.RefrigerantLeak || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <option value="" disabled>Select</option>
                  <option value="NO">NO</option>
                  <option value="YES">YES</option>
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

export default AirDryer1d;
