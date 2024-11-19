import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const DG5001d = () => {
    const [formData, setFormData] = useState({
        OutletValve: '',
        EmergencySwitch: '',
        DGmode: '',
        OilLeakage: '',
        CoolantLevel: '',
        DGexhaust: '',
        VibrationsNoises: '',
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
        remarks: '',
      });
      
      const [submittedToday, setSubmittedToday] = useState(null);
      const { enqueueSnackbar } = useSnackbar();
    
      const inputLabels = [
        'Check Diesel Level', 'Check Engine Speed', 'Check Lube Oil Pressure', 'Check Coolant Temperature (°C)',
        'Check Intake Air Temperature', 'Check Engine run time (Hour)', 'Check Battery (V)', 'Fule actuator command (%)',
        'ECP fault code', 'Check and record the Fault history'
      ];
    
      useEffect(() => {
        // Fetch submission status for today
        axios.get('https://scheq.in/api/dg_500_1_d/status')
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
            axios.post('https://scheq.in/api/dg_500_1_d', autoFormData)
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
        
        axios.post('https://scheq.in/api/dg_500_1_d', formData)
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
          <h1 className='text-4xl font-semibold mb-6 text-center'>DG-500 - 1</h1>
          <h1 className='text-xl font-semibold text-center'>Equipment Name: D.G.-2 - 500 KVA ESN NO- 25309737</h1>
          <h1 className='text-xl font-semibold mb-6 text-center'>(Equipment no: VT/FM/UTM/DG/500KVA/014)</h1>
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
                    <label className='text-md font-medium mb-1'>Check the outlet valve of the Diesel tank<br /><span className='text-sm'>(Acceptance Criteria - On)</span></label>
                    <select name='OutletValve' value={formData.OutletValve || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                      <option value="" disabled>Select</option>
                      <option value="On">On</option>
                      <option value="Off">Off</option>
                    </select>
                  </div>
    
                  <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>Check the emergency switch<br /><span className='text-sm'>(Acceptance Criteria - Off)</span></label>
                    <select name='EmergencySwitch' value={formData.EmergencySwitch || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                      <option value="" disabled>Select</option>
                      <option value="Off">Off</option>
                      <option value="On">On</option>
                    </select>
                  </div>
    
                  <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>Check DG is in Auto or in Manual mode<br /><span className='text-sm'>(Acceptance Criteria - Auto)</span></label>
                    <select name='DGmode' value={formData.DGmode || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                      <option value="" disabled>Select</option>
                      <option value="Auto">Auto</option>
                      <option value="Manual">Manual</option>
                    </select>
                  </div>
    
                  <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>Check for any oil leakage<br /><span className='text-sm'>(Acceptance Criteria - No Leakage)</span></label>
                    <select name='OilLeakage' value={formData.OilLeakage || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                      <option value="" disabled>Select</option>
                      <option value="No Leakage">No Leakage</option>
                      <option value="Leakage Present">Leakage Present</option>
                    </select>
                  </div>
    
                  <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>Check the coolant level<br /><span className='text-sm'>(Acceptance Criteria - High)</span></label>
                    <select name='CoolantLevel' value={formData.CoolantLevel || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                      <option value="" disabled>Select</option>
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>
                  </div>
    
                  <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>Inspect the Exhaust of DG<br /><span className='text-sm'>(Acceptance Criteria - No Rust/Leakage)</span></label>
                    <select name='DGexhaust' value={formData.DGexhaust || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                      <option value="" disabled>Select</option>
                      <option value="No Rust/Leakage">No Rust/Leakage</option>
                      <option value="Rust/Leakage Present">Rust/Leakage Present</option>
                    </select>
                  </div>
    
                  <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>Check for any vibration or noise<br /><span className='text-sm'>(Acceptance Criteria - No Vibrations / Noises)</span></label>
                    <select name="VibrationsNoises" value={formData.VibrationsNoises || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                      <option value="" disabled>Select</option>
                      <option value="No Vibrations / Noises">No Vibrations / Noises</option>
                      <option value="Vibrations / Noises Present">No Vibrations / Noises Present</option>
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

export default DG5001d;