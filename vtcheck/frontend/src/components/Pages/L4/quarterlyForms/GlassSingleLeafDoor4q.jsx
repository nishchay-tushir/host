import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const GlassSingleLeafDoor4q = () => {
    const [formData, setFormData] = useState({
        dropdown1: '',
        dropdown2: '',
        dropdown3: '',
        dropdown4: '',
        dropdown5: '',
        dropdown6: '',
        dropdown7: '',
        dropdown8: '',
        remarks: '',
      });

  const [submittedThisQuarter, setSubmittedThisQuarter] = useState(null);
  const { enqueueSnackbar } = useSnackbar(); 
  
  const dropdownLabels = [  'Check door for any damage (Acceptance Criteria - No damage)',
    'Check door  movement floor spring case for any damage  (Acceptance Criteria - Tighten)',
    'check door alignment (Acceptance Criteria - Good in condition)',
    'Check glass for cleanliness & fitting (Acceptance Criteria - Good in condition)',
    'Check lock  (Acceptance Criteria - Good in condition & working)',
    'Check magnetic lock   (Acceptance Criteria - Good in condition & working)',
    'Check handle condition (Acceptance Criteria - Good in condition & tighten )',
    'Check working condition  of door (Acceptance Criteria - OK)',
  ];
  
  
  
  useEffect(() => {
    // Fetch submission status for the current quarter
    axios.get('https://scheq.in/api/glass_single_leaf_door_4_q/status')
      .then(response => {
        if (response.data.submittedThisQuarter) {
          setSubmittedThisQuarter('Filled for this Quarter');
        } else {
          setSubmittedThisQuarter('Not Filled');
        }
      })
      .catch(error => {
        console.error('Error fetching status:', error);
      });
  }, [submittedThisQuarter, formData, enqueueSnackbar]);

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

    axios.post('https://scheq.in/api/glass_single_leaf_door_4_q', formData)
      .then(response => {
        enqueueSnackbar('Form submitted successfully!', { variant: 'success' });
        setSubmittedThisQuarter('Filled for this Quarter');
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        enqueueSnackbar('Error submitting form. Please try again.', { variant: 'error' });
      });
  };

  return (
    <div className='p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg my-6'>
      <h1 className='text-3xl font-semibold mb-8 text-center'>Quaterly Checksheet</h1>
      <h1 className='text-4xl font-semibold mb-6 text-center'> Glass single leaf door</h1>
      <h1 className='text-xl font-semibold text-center'>EQUIPMENT NAME : Door-Glass single leaf- Admin office</h1>
      <h1 className='text-xl font-semibold mb-6 text-center'>(EQUIPMENT NO: VT/FM/UTM/ADOFF/GSLD/6210)</h1>
      <hr /><hr /><br /><br />
      {submittedThisQuarter === 'Filled for this Quarter' ? (
        <div className='text-center text-green-500 text-xl font-semibold'>
          {submittedThisQuarter}
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <h1 className='text-2xl font-semibold mb-6 text-center'>Visual Inspection</h1><br />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {dropdownLabels.map((label, i) => (
                <div key={i} className='flex flex-col'>
                  <label className='text-md font-medium mb-1'>{label}</label>
                  <select name={`dropdown${i + 1}`} value={formData[`dropdown${i + 1}`]} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="OK">OK</option>
                    <option value="NOK">NOK</option>
                  </select>
                </div>
              ))}
            </div>
            <br /> <br />
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

export default GlassSingleLeafDoor4q;