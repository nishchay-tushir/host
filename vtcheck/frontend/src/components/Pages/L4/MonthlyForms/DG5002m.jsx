import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const DG5002m = () => {
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
    dropdown23: '',
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    remarks: '',
  });
  
  const [submittedThisMonth, setSubmittedThisMonth] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  const dropdownLabels = [  'Use LOTO before start start of the work at incomer supply (Acceptance Criteria - Lock out with life tag)',
    'Check diesel level tube transparancy (Acceptance Criteria - ON/No leakage)',
    'Check the outlet valve of the Diesel tank.(Kept it in Open condition always) (Acceptance Criteria - ON/No leakage)',
    'Check the emergency switch ON or OFF condition. (Without work Don’t press emergency Switch) (Acceptance Criteria - Observation(no emergency stop))',
    'Check DG is in Auto or in Manual mode (Acceptance Criteria - Observation(Auto))',
    'Check for any oil leakage  (Acceptance Criteria - No leakage)',
    'Check the coolent level  (Acceptance Criteria - Maximum)',
    'Inspect the Exhaust of DG(It should not excess) (Acceptance Criteria - No Rust/leakage of smoke)',
    'Inspect if any abnormal vibration and noise in DG  (Acceptance Criteria - No vibration )',
    'Check for oil levals - Once in a day (Acceptance Criteria - Maximum)',
    'Check cover body for any damage (Acceptance Criteria - No damage)',
    'Check door condition & closing condition (Acceptance Criteria - Good)',
    'Check door lock  (Acceptance Criteria - Working )',
    'Check & Clean radiator (Acceptance Criteria - Clean)',
    'Clean the radiator fan (Acceptance Criteria - Clean)',
    'Check the radiator fan belt tension (Acceptance Criteria - Tighten)',
    'Check diseal water filter & drain it (Acceptance Criteria - Drain )',
    'Check the governor for smooth working. (No another material is allowed to placed near the governor) (Acceptance Criteria - OK)',
    'Take trial of unit (Acceptance Criteria - Running)',
    'Check any leakage of Diesel which has abnormal aspets to environment (Acceptance Criteria - No Leakage)',
    'Check noise level which is to be below harmful level (Acceptance Criteria - Below 85db)',
    'Check the fire extinguisher (Acceptance Criteria - Nearest to unit)',
    'Regular checking of the pressue in fire extinguisher cylinder (Acceptance Criteria - Green Zone)',
  ];
  const inputLabels = [
    'Check Neutral and earthing of DG electrical panel(Multimeter)', 'Check for battery terminal voltage with multimeter (Should not excess than 13.5 V)', 'Check the RPM of Engine(Taco meter) ', 'Exhuast level of DG must be in acceptable government norms','Check emission of CO2 '
  ];

  useEffect(() => {
    // Fetch submission status for today
    axios.get('https://scheq.in/api/dg_500_2_m/status')
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

    axios.post('https://scheq.in/api/dg_500_2_m', formData)
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
      <h1 className='text-4xl font-semibold mb-6 text-center'>DG - 500</h1>
      <h1 className='text-xl font-semibold text-center'>EQUIPMENT NAME : D.G.-5- 500 KVA ESN NO- 25334984</h1>
      <h1 className='text-xl font-semibold mb-6 text-center'>(EQUIPMENT NO: VT/FM/UTM/DG-5/500KVA/6192)</h1>
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

export default DG5002m;