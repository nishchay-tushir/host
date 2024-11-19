import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const STP1m = () => {
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
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    remarks: '',
  });
  
  const [submittedThisMonth, setSubmittedThisMonth] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  const dropdownLabels = [  'Use LOTO before start of work at incomer supply (Acceptance Criteria - Lock out with life tag)',
    'Check main panel power supply is OK & connections  (Acceptance Criteria - Ok & tighten)',
    'Operate the system for filtration of water (Backwash, rinse, service) (Acceptance Criteria - Manual operation )',
    'Check the dosing pump is in working condition (Acceptance Criteria - check dosing while in service (OK/NOT OK))',
    'Clean the air filter of the air blower  (Acceptance Criteria - Clean by blower/water)',
    'Check for any leakage of water (from pipeline, Filter, dosing pump, pumps) (Acceptance Criteria - No leakges)',
    'Check the filter if any cloggage found (keep it clean)  (Acceptance Criteria - Clean)',
    'Check the air at the outlet of air blower (Acceptance Criteria -  Air outlet (ok))',
    'Bar sreen cleaning should be done twice in a month  (Acceptance Criteria - Clean Manually)',
    'Check the working of the dosing pump (Acceptance Criteria -  (OK/NOT OK))',
    'Check any leakage of water which has abnormal aspets to environment (Acceptance Criteria - No Leakage)',
    'Check noise level which is to be below harmful level (Acceptance Criteria - Below 85db)',
    'Check any leakage of Sodium hypochlorite solution which has abnormal aspets to environment (Acceptance Criteria - No Leakage)',
    'Check the fire extinguisher (Acceptance Criteria - Nearest to unit)',
    'Regular checking of the pressue in fire extinguisher cylinder (Acceptance Criteria - Green Zone)',
  ];
  const inputLabels = [
    'Dosage of SODIUM HYPOCHLORIDE : Quantity checked and topped up every week', 'Check air blower outlett pressure (As per std)','Check the flow meter of flush pump','Check the air blower motor current ','Sewage effluent test: The effluent tests must meet the standards.(Result (PH/TDS))'
  ];

  useEffect(() => {
    // Fetch submission status for today
    axios.get('https://scheq.in/api/stp_1_m/status')
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

    axios.post('https://scheq.in/api/stp_1_m', formData)
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
      <h1 className='text-4xl font-semibold mb-6 text-center'> Sewage Treatment Plant (STP)</h1>
      <h1 className='text-xl font-semibold text-center'>EQUIPMENT NAME : Sewage Treatment Plant (STP)</h1>
      <h1 className='text-xl font-semibold mb-6 text-center'>(Equipment no:)</h1>
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

export default STP1m;