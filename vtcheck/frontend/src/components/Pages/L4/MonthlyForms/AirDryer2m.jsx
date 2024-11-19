import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const AirDryer2m = () => {
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
    dropdown20: '',
    dropdown21: '',
    dropdown22: '',
    remarks: '',
  });
  
  const [submittedThisMonth, setSubmittedThisMonth] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  const dropdownLabels = [  'Use LOTO before start start of the work at incomer supply (Acceptance Criteria - Lock out with life tag)',
    'Clean the main electrical panel  (Acceptance Criteria - Clean)',
    'Check the switch of Dryer on main Panel for any damage (Acceptance Criteria - No damage)',
    'Check the switch of dryer on sub panel for any damage (Acceptance Criteria - No damage)',
    'Check the Inlet valve condition (It must be open if it is in ON condition)  (Acceptance Criteria - ON & No damage)',
    'Check the outlet valve condition (It must be open if it is in ON condition) (Acceptance Criteria - ON & No damage) ',
    'Check for any leakage found in the hermaticlly sealed compressor (Acceptance Criteria - No leakage )',
    'Check auto drain valve  is work ok  (Acceptance Criteria - Auto ON)',
    'Check body cover for any damage (Acceptance Criteria -No damage)',
    'Check door lock condition (Acceptance Criteria - OK )',
    'Check door condition (Acceptance Criteria - Good)',
    'Check for any abnormal sound and noice of the dryer (Acceptance Criteria -Normal  )',
    'Check the fuse condition inside the Electrical sub panel of the dryer (Acceptance Criteria - Ok, Tighten)',
    'Check the cleanliness of the machine(Acceptance Criteria - Clean by blower)',
    'Check the earthing and neutral of main electrical panel  (Acceptance Criteria - Multimeter)',
    'Clean the electrical panel with the help of portable air blower (Acceptance Criteria - Clean by blower)',
    'Check for the leakage of refrigerant line joints with Soap solution  (Acceptance Criteria -No Leakage)',
    'Clean the Air Dryer from inside with the help of air blower and cotton (clean all the machine parts like heat exchanger, hermatically sealed compressor, machine body.) (Acceptance Criteria - Clean By Blower )',
    'Check noise level which is to be below harmful level (Acceptance Criteria - Below 85db)',
    'Check any leakage of Oil which has abnormal aspets to environment (Acceptance Criteria - No Leakage)',
    'Check the fire extinguisher (Acceptance Criteria - Nearest to unit)',
    'Regular checking of the pressue in fire extinguisher cylinder (Acceptance Criteria - Green Zone)',
  ];
  
  useEffect(() => {
    // Fetch submission status for today
    axios.get('https://scheq.in/api/air_dryer_2_m/status')
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

    axios.post('https://scheq.in/api/air_dryer_2_m', formData)
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
      <h1 className='text-4xl font-semibold mb-6 text-center'> Air dryer - 2</h1>
      <h1 className='text-xl font-semibold text-center'>EQUIPMENT NAME : Air Dryer-2 ( FD1500VSD+)</h1>
      <h1 className='text-xl font-semibold mb-6 text-center'>(EQUIPMENT NO: VT/FM/UTM/AD1500VSD/085)</h1>
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

export default AirDryer2m;