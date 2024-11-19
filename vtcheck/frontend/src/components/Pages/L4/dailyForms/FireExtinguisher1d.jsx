import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const FireExtinguisher1d = () => {
  const [formData, setFormData] = useState({
    pressureCheck: '',
    tubeCheck: '',
    sealCondition: '',
    hosePipeCondition: '',
    hosePipeBracket: '',
    hosePipeClamping: '',
    lClampingCondition: '',
    referenceDueDate: '',
    cleanlinessUnit: '',
    remarks: '',
  });
  
  const [submittedToday, setSubmittedToday] = useState(null);
  const { enqueueSnackbar } = useSnackbar();


  useEffect(() => {
    // Fetch submission status for today
    axios.get('https://scheq.in/api/fire_extinguisher_1_d/status')
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
        axios.post('https://scheq.in/api/fire_extinguisher_1_d', autoFormData)
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
    
    axios.post('https://scheq.in/api/fire_extinguisher_1_d', formData)
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
      <h1 className='text-4xl font-semibold mb-6 text-center'>Fire Extinguisher</h1>
      <h1 className='text-xl font-semibold text-center'>Equipment Name: Fire Extinguisher</h1>
      <h1 className='text-xl font-semibold mb-6 text-center'>(Equipment no: )</h1>
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
                <label className='text-md font-medium mb-1'>Check pressure<br /><span className='text-sm'>(Acceptance Criteria - In Green zone)</span></label>
                <select name='pressureCheck' value={formData.pressureCheck || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="In Green zone">In Green zone</option>
                    <option value="Not in Green zone">Not in Green zone</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check tube as mentioned in fire extinguisher<br /><span className='text-sm'>(Acceptance Criteria - OK)</span></label>
                <select name='tubeCheck' value={formData.tubeCheck || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="OK">OK</option>
                    <option value="NOK">NOK</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check seal condition<br /><span className='text-sm'>(Acceptance Criteria - OK)</span></label>
                <select name='sealCondition' value={formData.sealCondition || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="OK">OK</option>
                    <option value="NOK">NOK</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check hose pipe condition<br /><span className='text-sm'>(Acceptance Criteria - OK)</span></label>
                <select name='hosePipeCondition' value={formData.hosePipeCondition || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="OK">OK</option>
                    <option value="NOK">NOK</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check hose pipe resting bracket<br /><span className='text-sm'>(Acceptance Criteria - OK)</span></label>
                <select name='hosePipeBracket' value={formData.hosePipeBracket || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="OK">OK</option>
                    <option value="NOK">NOK</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check hose pipe clamping<br /><span className='text-sm'>(Acceptance Criteria - Not loose)</span></label>
                <select name='hosePipeClamping' value={formData.hosePipeClamping || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="Not loose">Not loose</option>
                    <option value="Loose">Loose</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check 'L' type clamping condition<br /><span className='text-sm'>(Acceptance Criteria - Not loose)</span></label>
                <select name='lClampingCondition' value={formData.lClampingCondition || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="No loose, Proper">No loose, Proper</option>
                    <option value="Loose">Loose</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check reference due date is not completed<br /><span className='text-sm'>(Acceptance Criteria - OK)</span></label>
                <select name='referenceDueDate' value={formData.referenceDueDate || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="OK">OK</option>
                    <option value="NOK">NOK</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check cleanliness of unit<br /><span className='text-sm'>(Acceptance Criteria - Dust free)</span></label>
                <select name='cleanlinessUnit' value={formData.cleanlinessUnit || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="Dust free">Dust free</option>
                    <option value="Dusty">Dusty</option>
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

export default FireExtinguisher1d;