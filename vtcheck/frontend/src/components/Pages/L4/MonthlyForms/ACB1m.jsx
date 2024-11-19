import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const ACB1m = () => {
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
    dropdown24: '',
    dropdown25: '',
    input1: '',
    remarks: '',
  });
  
  const [submittedThisMonth, setSubmittedThisMonth] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  const dropdownLabels = [  'Use LOTO before start start of the work at incomer supply (Acceptance Criteria - Lock out with life tag)',
    'Cleaning of Air Circuit Breaker with CRC-226 (Acceptance Criteria - Clean)',
    'Removal of old Grease and re-greasing the same with recommended grease (Acceptance Criteria - Greesing)',
    'Check condition of arcing contact and gap between fixed and moving arcing contracts shall be checked. (Acceptance Criteria - Proper)',
    'Checking the reset mechanism, tripping of breaker through push button  (Acceptance Criteria - Ok )',
    'Checking tripping of ACB through protection release (Acceptance Criteria - Ok  )',
    'Checking presence and proper tightening of hardware. (Acceptance Criteria -Tighten )',
    'Checking presence of all circlips.  (Acceptance Criteria - Available  )',
    'Checking condition and alignment of jaw contact with cradle terminals (Acceptance Criteria - Ok )',
    'Checking condition of ACB wiring and replace if required. (Acceptance Criteria - Ok  )',
    'Checking and adjusting gap between hylam sheet and side plate. (Acceptance Criteria - Ok  )',
    'Checking proper closing of all poles together (Acceptance Criteria - Ok  )',
    'Checking alignment of SIC and its operation. (Acceptance Criteria - Ok  )',
    'Checking scrapping earth alignment. (Acceptance Criteria - Ok  )',
    'Checking U/V release pickup and drop off. (Acceptance Criteria - Ok  )',
    'Checking ACB tripping through Shunt release (Acceptance Criteria - Ok  )',
    'Checking closing coil operation in case of EDO ACB (Acceptance Criteria - Ok  )',
    'Checking IR between phase – phase (VCB closed condition)  (Acceptance Criteria - Ok )',
    'Checking IR between phase – earth (VCB closed condition) (Acceptance Criteria - Ok )',
    'Checking IR between phase – earth (VCB in Open condition (Acceptance Criteria -Ok )',
    'Checking IR between phase – earth (VCB in Open condition (Acceptance Criteria -Ok )',
    'Check Earthing & Neutral (Acceptance Criteria - Below 2 V )',
    'check for any burn wire or curcuit (Acceptance Criteria - No burning smell)',
    'Check the fire extinguisher place near the unit  (Acceptance Criteria - Nearest to unit)',
    'Regular checking of the pressue in fire extinguisher cylinder (Acceptance Criteria - Regular check the pressure )',
  ];
  const inputLabels = [
    'Setting of relay as per the load (Acceptance Criteria -  Set as per requirment.)'
  ];

  useEffect(() => {
    // Fetch submission status for today
    axios.get('https://scheq.in/api/air_circuit_breaker_acb_1_m/status')
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

    axios.post('https://scheq.in/api/air_circuit_breaker_acb_1_m', formData)
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
      <h1 className='text-4xl font-semibold mb-6 text-center'>Air circuit breaker(ACB)</h1>
      <h1 className='text-xl font-semibold text-center'>EQUIPMENT NAME: Air circuit breaker</h1>
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

export default ACB1m;