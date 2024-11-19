import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const AHU8d = () => {
    const [formData, setFormData] = useState({
        BluePipeLeak: '',
        GreyPipeLeak: '',
        NoiseVibration: '',
        FilterConditionBack: '',
        FilterConditionHepa: '',
        DrainCondensation: '',
        BypassValve: '',
        WaterInletValve: '',
        WaterOutletValve: '',
        DamperCondition: '',
        CondensorDrain: '',
        NoiseLevel: '',
        FireExtinguisher: '',
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
        remarks: '',
      });
      
      const [submittedToday, setSubmittedToday] = useState(null);
      const { enqueueSnackbar } = useSnackbar();
    
      const inputLabels = [
        'Check and Record Phase 1 current', 'Check and Record Phase 2 current', 'Check and Record Phase 3 current', 'Check pressure of water inlet', 'Check temperature of water inlet', 'Check Pressure of water outlet', 'Check temperature of water outlet',
        'Check Voltage of AHU from the electrical display panel', 'Check current of AHU from the electrical display panel', 'Check power factor(PF) on AHU electrical display panel', 
        'Check inside roomTemp/Humidity'
      ];
    
      useEffect(() => {
        // Fetch submission status for today
        axios.get('https://scheq.in/api/ahu_8_d/status')
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
            axios.post('https://scheq.in/api/ahu_8_d', autoFormData)
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

        axios.post('https://scheq.in/api/ahu_8_d', formData)
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
          <h1 className='text-4xl font-semibold mb-6 text-center'>AHU - 8</h1>
          <h1 className='text-xl font-semibold text-center'>Equipment Name: AHU (PH L2)</h1>
          <h1 className='text-xl font-semibold mb-6 text-center'>(Equipment no: VT/FM/UTM/L2AHU/101)</h1>
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
                    <label className='text-md font-medium mb-1'>Check water leakage for any inlet line(Blue Pipeline)<br /><span className='text-sm'>(Acceptance Criteria - No Leakage)</span></label>
                    <select name='BluePipeLeak' value={formData.BluePipeLeak || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                      <option value="" disabled>Select</option>
                      <option value="No Leakage">No Leakage</option>
                      <option value="Leakage">Leakage</option>
                    </select>
                  </div>
    
                  <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>Check water leakage for any Outlet line(Grey Pipeline)<br /><span className='text-sm'>(Acceptance Criteria - No Leakage)</span></label>
                    <select name='GreyPipeLeak' value={formData.GreyPipeLeak || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                      <option value="" disabled>Select</option>
                      <option value="No Leakage">No Leakage</option>
                      <option value="Leakage">Leakage</option>
                    </select>
                  </div>
    
                  <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>Check any noise / vibration in operation<br /><span className='text-sm'>(Acceptance Criteria - No)</span></label>
                    <select name='NoiseVibration' value={formData.NoiseVibration || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                      <option value="" disabled>Select</option>
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>
    
                  <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>check Filter condition (Back Side)<br /><span className='text-sm'>(Acceptance Criteria - Not Clogged)</span></label>
                    <select name='FilterConditionBack' value={formData.FilterConditionBack || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                      <option value="" disabled>Select</option>
                      <option value="Not Clogged">Not Clogged</option>
                      <option value="Clogged">Clogged</option>
                    </select>
                  </div>
    
                  <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>check Filter condition (HEPA Side)<br /><span className='text-sm'>(Acceptance Criteria - Not Clogged)</span></label>
                    <select name='FilterConditionHepa' value={formData.FilterConditionHepa || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                      <option value="" disabled>Select</option>
                      <option value="Not Clogged">Not Clogged</option>
                      <option value="Clogged">Clogged</option>
                    </select>
                  </div>
    
                  <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>Drain condensation pan throughly<br /><span className='text-sm'>(Acceptance Criteria - No Condensate Water)</span></label>
                    <select name='DrainCondensation' value={formData.DrainCondensation || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                      <option value="" disabled>Select</option>
                      <option value="No Condensate Water">No Condensate Water</option>
                      <option value="Condensate Water Present">Condensate Water Present</option>
                    </select>
                  </div>
    
                  <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>Check unit bypass valve condition<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                    <select name='BypassValve' value={formData.BypassValve || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                      <option value="" disabled>Select</option>
                      <option value="ON">ON</option>
                      <option value="OFF">OFF</option>
                    </select>
                  </div>
    
                  <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>Check the water inlet valve condition<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                    <select name="WaterInletValve" value={formData.WaterInletValve || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                      <option value="" disabled>Select</option>
                      <option value="ON">ON</option>
                      <option value="OFF">OFF</option>
                    </select>
                  </div>
    
                  <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>Check the water outlet valve condition<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                    <select name="WaterOutletValve" value={formData.WaterOutletValve || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                      <option value="" disabled>Select</option>
                      <option value="ON">ON</option>
                      <option value="OFF">OFF</option>
                    </select>
                  </div>

                  <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>Check the damper opening/closing condition<br /><span className='text-sm'>(Acceptance Criteria - Open)</span></label>
                    <select name="DamperCondition" value={formData.DamperCondition || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                      <option value="" disabled>Select</option>
                      <option value="Open">Open</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </div>
    
                  <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>Check the condensor drain<br /><span className='text-sm'>(Acceptance Criteria - Open)</span></label>
                    <select name="CondensorDrain" value={formData.CondensorDrain || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                      <option value="" disabled>Select</option>
                      <option value="Open">Open</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </div>
    
                  <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>Check noise level which is to be below harmful level<br /><span className='text-sm'>(Acceptance Criteria - Below 85db)</span></label>
                    <select name="NoiseLevel" value={formData.NoiseLevel || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                      <option value="" disabled>Select</option>
                      <option value="Below 85db">Below 85db</option>
                      <option value="Above 85db">Above 85db</option>
                    </select>
                  </div>
    
                  <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>Check the avalibity of fire extinguisher <br /><span className='text-sm'>(Acceptance Criteria - Available)</span></label>
                    <select name="FireExtinguisher" value={formData.FireExtinguisher || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                      <option value="" disabled>Select</option>
                      <option value="Available">Available</option>
                      <option value="Unavailable">Unavailable</option>
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
                  <textarea name='remarks' value={formData.remarks} onChange={handleChange} defaultValue="none" className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Enter any additional remarks here' />
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

export default AHU8d;