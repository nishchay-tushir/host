import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const AirCompressor2m = () => {
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
    dropdown26: '',
    dropdown27: '',
    dropdown28: '',
    dropdown29: '',
    dropdown30: '',
    dropdown31: '',
    dropdown32: '',
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    remarks: '',
  });
  
  const [submittedThisMonth, setSubmittedThisMonth] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  const dropdownLabels = [  'Use LOTO before start of work at incomer supply (Acceptance Criteria - Lock out with life tag)',
    'Clean the air filter & condition, replace after every 4000 hrs (Acceptance Criteria - No Dust & Dirt)',
    'Check the greasing frequency done after 4000 hrs (Acceptance Criteria - Greased)',
    'Replace oil & oil filter every 8000 hrs (Acceptance Criteria - ROTO-Z-80Ltr)',
    'Check outlet condition of valve (Acceptance Criteria - Open)',
    'Check the condensate drain valve in Auto & Manual (Acceptance Criteria - Auto)',
    'Check no vibration or abnormal noise (Acceptance Criteria - Normal)',
    'Check inlet valve condition of air receiver tank (Acceptance Criteria - ON)',
    'Check outlet valve condition of air receiver tank (Acceptance Criteria - ON)',
    'Drain the condensate manually of air receiver tanks - Once in a day (Acceptance Criteria - Done)',
    'Clean all parts of compressor motor & fan cover (Acceptance Criteria - Cleaning by Blower/Cloth)',
    'Clean radiators with blower and compressed air (Acceptance Criteria - Cleaned)',
    'Check the neutral and earthing connection of air compressor (Acceptance Criteria - Earth/Neutral Value)',
    'Clean panel cabinet by vacuum cleaner, clean power panel air filter (Acceptance Criteria - Clean)',
    'Check & tighten electrical/mechanical connections if loosened (Acceptance Criteria - Tightened)',
    'Check air compressor foundation and tighten if loosened (Acceptance Criteria - Tightened)',
    'Check & tighten motor terminals of compressor motor (Acceptance Criteria - No burns or color changes)',
    'Check condition of incoming supply terminals to MCB/Starter (Acceptance Criteria - No rusted bolts)',
    'Clean pressure switch & solenoid valve (Acceptance Criteria - No dust & dirt)',
    'Lubricate motor bearings (Acceptance Criteria - Roto Glide Green FS/Amber-VSD)',
    'Check & clean contactors with CRC (Acceptance Criteria - No carbon/rusty bolts)',
    'Check cover body for any damage (Acceptance Criteria - No damage)',
    'Check door condition & closing (Acceptance Criteria - Good)',
    'Check door lock (Acceptance Criteria - Working)',
    'Check foam sheet inside door (Acceptance Criteria - Good)',
    'Check air pipe line for any damage (Acceptance Criteria - No damage)',
    'Take trial & note parameters (Acceptance Criteria - Machine running)',
    'Clean unit properly (Acceptance Criteria - Cleaned by blower/cotton)',
    'Check any leakage of oil which has abnormal aspets to environment (Acceptance Criteria - No Leakage)',
    'Check noise level which is to be below harmful level (Acceptance Criteria - Below 85db)',
    'Check the fire extinguisher (Acceptance Criteria - Nearest to unit)',
    'Regular checking of the pressue in fire extinguisher cylinder (Acceptance Criteria - Green Zone)',
  ];
  const inputLabels = [
    'Check the pressure shown on air receiver tanks(BAR / Kg/cm²)', 'Check the Current', 'Check the Voltage', 'Check PH valve of water'
  ];

  useEffect(() => {
    // Fetch submission status for today
    axios.get('https://scheq.in/api/air_compressor_2_m/status')
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

    axios.post('https://scheq.in/api/air_compressor_2_m', formData)
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
      <h1 className='text-4xl font-semibold mb-6 text-center'>Air Compressor - 2</h1>
      <h1 className='text-xl font-semibold text-center'>Equipment Name: Air Compressor-2 (920 CF/ZR 160 VSD)</h1>
      <h1 className='text-xl font-semibold mb-6 text-center'>(Equipment no: VT/FM/UTM/AC920CFM/083)</h1>
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

export default AirCompressor2m;