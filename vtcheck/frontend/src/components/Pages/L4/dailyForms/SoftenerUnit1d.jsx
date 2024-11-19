import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const SoftenerUnit1d = () => {
  const [formData, setFormData] = useState({
    mainPanelSupply: '',
    valveCarbonFilter: '',
    valveSandFilter: '',
    leakageCheck: '',
    carbonFilterRegeneration: '',
    sandFilterBackwash: '',
    sandFilterService: '',
    sandFilterRinse: '',
    carbonFilterBackwash: '',
    carbonFilterService: '',
    carbonFilterRinse: '',
    naClStock: '',
    sodiumHypoStock: '',
    dosingOperation: '',
    flowMeterInletReading: '',
    flowMeterOutletReading: '',
    remarks: '',
  });
  
  const [submittedToday, setSubmittedToday] = useState(null);
  const { enqueueSnackbar } = useSnackbar();


  useEffect(() => {
    // Fetch submission status for today
    axios.get('https://scheq.in/api/softener_unit_1_d/status')
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
        axios.post('https://scheq.in/api/softener_unit_1_d', autoFormData)
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
    
    axios.post('https://scheq.in/api/softener_unit_1_d', formData)
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
      <h1 className='text-4xl font-semibold mb-6 text-center'>Softener Plant</h1>
      <h1 className='text-xl font-semibold text-center'>Equipment Name: Softener Unit</h1>
      <h1 className='text-xl font-semibold mb-6 text-center'>(Equipment no: VT/FM/UTM/SOU/079)</h1>
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
                <label className='text-md font-medium mb-1'>Check main panel supply R, Y, B- Phase<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                <select name='mainPanelSupply' value={formData.mainPanelSupply || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="ON">ON</option>
                    <option value="OFF">OFF</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check multiplay valve condition for carbon filter<br /><span className='text-sm'>(Acceptance Criteria - OK)</span></label>
                <select name='valveCarbonFilter' value={formData.valveCarbonFilter || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="OK">OK</option>
                    <option value="NOK">NOK</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check multiplay valve condition for sand filter<br /><span className='text-sm'>(Acceptance Criteria - OK)</span></label>
                <select name='valveSandFilter' value={formData.valveSandFilter || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="OK">OK</option>
                    <option value="NOK">NOK</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check for any leakage<br /><span className='text-sm'>(Acceptance Criteria - Minimum)</span></label>
                <select name='leakageCheck' value={formData.leakageCheck || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="Maximum">Maximum</option>
                    <option value="Medium">Medium</option>
                    <option value="Minimum">Minimum</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check for regeneration of carbon filter after 3 Lacs Ltrs<br /><span className='text-sm'>(Acceptance Criteria - OK)</span></label>
                <select name='carbonFilterRegeneration' value={formData.carbonFilterRegeneration || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="OK">OK</option>
                    <option value="NOK">NOK</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check sand filter for Backwash<br /><span className='text-sm'>(Acceptance Criteria - Done)</span></label>
                <select name='sandFilterBackwash' value={formData.sandFilterBackwash || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="Done">Done</option>
                    <option value="Not needed">Not needed</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check sand filter for Service<br /><span className='text-sm'>(Acceptance Criteria - Done)</span></label>
                <select name='sandFilterService' value={formData.sandFilterService || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="Done">Done</option>
                    <option value="Not needed">Not needed</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check sand filter for Rinse<br /><span className='text-sm'>(Acceptance Criteria - Done)</span></label>
                <select name='sandFilterRinse' value={formData.sandFilterRinse || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="Done">Done</option>
                    <option value="Not needed">Not needed</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check carbon filter for Backwash<br /><span className='text-sm'>(Acceptance Criteria - Done)</span></label>
                <select name='carbonFilterBackwash' value={formData.carbonFilterBackwash || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="Done">Done</option>
                    <option value="Not needed">Not needed</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check carbon filter for Service<br /><span className='text-sm'>(Acceptance Criteria - Done)</span></label>
                <select name='carbonFilterService' value={formData.carbonFilterService || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="Done">Done</option>
                    <option value="Not needed">Not needed</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check carbon filter for Rinse<br /><span className='text-sm'>(Acceptance Criteria - Done)</span></label>
                <select name='carbonFilterRinse' value={formData.carbonFilterRinse || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="Done">Done</option>
                    <option value="Not needed">Not needed</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check stock for NACL<br /><span className='text-sm'>(Acceptance Criteria - Maximum)</span></label>
                <select name='naClStock' value={formData.naClStock || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="Maximum">Maximum</option>
                    <option value="Medium">Medium</option>
                    <option value="Minimum">Minimum</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check stock of Sodium Hypochloride<br /><span className='text-sm'>(Acceptance Criteria - Maximum)</span></label>
                <select name='sodiumHypoStock' value={formData.sodiumHypoStock || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="Maximum">Maximum</option>
                    <option value="Medium">Medium</option>
                    <option value="Minimum">Minimum</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check dosing operation if in service<br /><span className='text-sm'>(Acceptance Criteria - Running)</span></label>
                <select name='dosingOperation' value={formData.dosingOperation || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="Running">Running</option>
                    <option value="Not Running">Not Running</option>
                </select>
                </div>
            </div>
            <br /><br /><br /><hr /><hr /><br /><br />
            <h1 className='text-2xl font-semibold mb-6 text-center'>Visual Inspection & Record</h1><br /><br />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>Take flow meter inlet reading</label>
                    <input type='text' name='flowMeterInletReading' value={formData.flowMeterInletReading || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Enter reading' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>Take flow meter outlet reading</label>
                    <input type='text' name='flowMeterOutletReading' value={formData.flowMeterOutletReading || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Enter reading' />
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

export default SoftenerUnit1d;
