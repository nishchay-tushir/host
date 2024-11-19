import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const AirCompressor1q = () => {
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
    remarks: '',
  });
  
  const [submittedThisQuarter, setSubmittedThisQuarter] = useState(null);
  const { enqueueSnackbar } = useSnackbar(); 

  const dropdownLabels = [  'Use LOTO before start of work at incomer supply (Acceptance Criteria - Lock out with life tag)',
    'Clean the air filter & condition, replace after every 4000 hrs (Acceptance Criteria - No Dust & Dirt)',
    'Greasing to be done (Acceptance Criteria - Greased)',
    'Check oil level & oil filter  (Acceptance Criteria - ROTO-Z-80Ltr)',
    'Check & tight all electrical connections (Acceptance Criteria - Tighten)',
    'Check all pipe line for any damage & leakage (Acceptance Criteria - Good in condition & No leakage)',
    'Check & tight motor terminal connection (Acceptance Criteria - Tighten)',
    'Check all valve condition (Acceptance Criteria - Good in condition & No leakage)',
    'Check all presure & Tempreture gauges condition (Acceptance Criteria - Tighten)',
    'Clean radiators with blower and compressed air (Acceptance Criteria - Cleaned)',
    'Check the neutral and earthing connection of air compressor (Acceptance Criteria - Earth/Neutral Value)',
    'Clean panel cabinate by vaccum cleaner, clean power panel air filter. If damaged replaced it. (Acceptance Criteria - Clean)',
    'Clean the pressure switch & solenoid valve (Acceptance Criteria - No dust & dirty)',
    'Check & clean the contactors with CRC (Acceptance Criteria - Tighten)',
    'Check cover body for any damage (Acceptance Criteria - No damage)',
    'Check door condition & closing condition (Acceptance Criteria - Good)',
    'Check door lock  (Acceptance Criteria - Working )',
    'Check phom sheet inside of door (Acceptance Criteria - Good)',
    'Take trial & note parameters (Acceptance Criteria - Machine running)',
    'Check any leakage of oil which has abnormal aspets to environment (Acceptance Criteria - No Leakage)',
    'Check noise level which is to be below harmful level (Acceptance Criteria - Below 85db)',
    'Check the fire extinguisher (Acceptance Criteria - Nearest to unit)',
    'Regular checking of the pressue in fire extinguisher cylinder (Acceptance Criteria - Green Zone)',
  ];
  const inputLabels = [
    "Check the Current & Voltage\nCurrent = R, Y, B\nVoltage = R, Y, B",
    "Check PH valve of water(Acceptance Criteria - >7)",
    "Take the trial & note down the parameters as mentioned(Unit trial)",
  ];

  useEffect(() => {
    // Fetch submission status for the current quarter
    axios.get('https://scheq.in/api/air_compressor_1_q/status')
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

    axios.post('https://scheq.in/api/air_compressor_1_q', formData)
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
      <h1 className='text-4xl font-semibold mb-6 text-center'>Air Compressor - 1</h1>
      <h1 className='text-xl font-semibold text-center'>Equipment Name: Air Compressor</h1>
      <h1 className='text-xl font-semibold mb-6 text-center'>(Equipment no:)</h1>
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

export default AirCompressor1q;