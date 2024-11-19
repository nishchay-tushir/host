import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const MotorisedSlidingGate3m = () => {
  const [formData, setFormData] = useState({
    dropdown1: '',
    dropdown2: '',
    dropdown3: '',
    dropdown4: '',
    dropdown5: '',
    dropdown6: '',
    dropdown7: '',
    dropdown8: '',
    dropdown9: '',
    dropdown10: '',
    dropdown11: '',
    dropdown12: '',
    dropdown13: '',
    dropdown14: '',
    dropdown15: '',
    dropdown16: '',
    dropdown17: '',
    dropdown18: '',
    dropdown19: '',
    remarks: '',
  });
  
  const [submittedThisMonth, setSubmittedThisMonth] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  const dropdownLabels = [  'Use LOTO before start start of the work at incomer supply (Acceptance Criteria - Lock out with life tag)',
    'Check motor RPM (Acceptance Criteria - Done)',
    'Check sensor cell (Acceptance Criteria - Done)',
    'Check remote operation (Acceptance Criteria - Done)',
    'Lubrication oil leval to check & top up (Acceptance Criteria - OK)',
    'Clean the unit (Acceptance Criteria - Clean )',
    'Check & tight all the bolts (Acceptance Criteria - Tighten)',
    'Check operation of limit switch (Acceptance Criteria -Done)',
    'Check operation of sensor  (Acceptance Criteria - Done )',
    'Check gear condition (Acceptance Criteria - Done)',
    'Check push buttons for forward/reverse operation (Acceptance Criteria - Done )',
    'Check Emergency switch working  (Acceptance Criteria - Done)',
    'Trial the unit  (Acceptance Criteria - Ok)',
    'check for any burn wire or circuit (Acceptance Criteria - No burning smell)',
    'Check for abnormal noise (By Sound level meter) (Acceptance Criteria -Below 85db)',
    'Check for oil leakage (Acceptance Criteria - No leakage )',
    'Check Earthing &Neutral  (Acceptance Criteria - Below 2 V)',
    'Check the fire extinguisher place near the unit  (Acceptance Criteria - Nearest to unit)',
    'Check indication light  (Acceptance Criteria - Working)',
  ];
  
  useEffect(() => {
    // Fetch submission status for today
    axios.get('https://scheq.in/api/motorised_sliding_gate_3_m/status')
      .then(response => {
        if (response.data.submittedThisMonth) {
          setSubmittedThisMonth('Filled for this month');
        } else {
          setSubmittedThisMonth('Not Filled');
        }
      })
      .catch(error => {
        console.error('Error fetching status:', error);
      });

  }, [submittedThisMonth, formData, enqueueSnackbar]);

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

    axios.post('https://scheq.in/api/motorised_sliding_gate_3_m', formData)
      .then(response => {
        enqueueSnackbar('Form submitted successfully!', { variant: 'success' });
        setSubmittedThisMonth('Filled for this month');
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        enqueueSnackbar('Error submitting form. Please try again.', { variant: 'error' });
      });
  };


  return (
    <div className='p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg my-6'>
      <h1 className='text-3xl font-semibold mb-8 text-center'>Monthly Checksheet</h1>
      <h1 className='text-4xl font-semibold mb-6 text-center'> Motorised sliding gate</h1>
      <h1 className='text-xl font-semibold text-center'>EQUIPMENT NAME : Motorised sliding gate- Material gate</h1>
      <h1 className='text-xl font-semibold mb-6 text-center'>(EQUIPMENT NO: VT/FM/UTM/MG/MSG/247)</h1>
      <hr /><hr /><br /><br />
      {submittedThisMonth === 'Filled for this month' ? (
        <div className='text-center text-green-500 text-xl font-semibold'>
          {submittedThisMonth}
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

export default MotorisedSlidingGate3m;