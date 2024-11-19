import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const Panel28d = () => {
  const [formData, setFormData] = useState({
    Indicator: '', 
    InputSupply240: '',
    InputSupply415: '',
    EarthingConnection: '',
    EmergencySwitch: '',  
    AutoManual: '', 
    BurnSmell: '', 
    AbnormalSound: '',
    PanelDoorCondition: '', 
    RubberMat: '',
    DoorLockCondition: '',
    FireExtinguisher: '',
    remarks: '',
  });
  
  const [submittedToday, setSubmittedToday] = useState(null);
  const { enqueueSnackbar } = useSnackbar();


  useEffect(() => {
    // Fetch submission status for today
    axios.get('https://scheq.in/api/panel_28_d/status')
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
        axios.post('https://scheq.in/api/panel_28_d', autoFormData)
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
    
    axios.post('https://scheq.in/api/panel_28_d', formData)
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
      <h1 className='text-4xl font-semibold mb-6 text-center'>Panel - 28</h1>
      <h1 className='text-xl font-semibold text-center'>Equipment Name: Panel -28 (BMS Oxillary MLDB)</h1>
      <h1 className='text-xl font-semibold mb-6 text-center'>(Equipment no: VT/FM/UTM/BMSOXIMLDBPanel/139)</h1>
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
                    <label className='text-md font-medium mb-1'>Check indicator R, Y, B<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                    <select name='Indicator' value={formData.Indicator || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="ON">ON</option>
                    <option value="OFF">OFF</option>
                    </select>
                </div>

                <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>Check input supply (240 V)<br /><span className='text-sm'>(Acceptance Criteria - 240 V)</span></label>
                    <select name='InputSupply240' value={formData.InputSupply240 || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="240 V">240 V</option>
                    <option value="Below 240 V">Below 240 V</option>
                    <option value="Above 240 V">Above 240 V</option>
                    </select>
                </div>

                <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>Check input supply (415 V)<br /><span className='text-sm'>(Acceptance Criteria - 415 V)</span></label>
                    <select name='InputSupply415' value={formData.InputSupply415 || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="415 V">415 V</option>
                    <option value="Below 415 V">Below 415 V</option>
                    <option value="Above 415 V">Above 415 V</option>
                    </select>
                </div>

                <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>Check earthing & neutral connection<br /><span className='text-sm'>(Acceptance Criteria - OK)</span></label>
                    <select name='EarthingConnection' value={formData.EarthingConnection || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="OK">OK</option>
                    <option value="NOK">NOK</option>
                    </select>
                </div>

                <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>Check emergency switch<br /><span className='text-sm'>(Acceptance Criteria - OFF)</span></label>
                    <select name='EmergencySwitch' value={formData.EmergencySwitch || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="OFF">OFF</option>
                    <option value="ON">ON</option>
                    </select>
                </div>

                <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>Check Auto/Manual condition<br /><span className='text-sm'>(Acceptance Criteria - Auto)</span></label>
                    <select name='AutoManual' value={formData.AutoManual || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="Auto">Auto</option>
                    <option value="Manual">Manual</option>
                    </select>
                </div>

                <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>Any burning smell?<br /><span className='text-sm'>(Acceptance Criteria - NO)</span></label>
                    <select name='BurnSmell' value={formData.BurnSmell || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                    </select>
                </div>

                <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>Any abnormal sound?<br /><span className='text-sm'>(Acceptance Criteria - No)</span></label>
                    <select name='AbnormalSound' value={formData.AbnormalSound || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                    </select>
                </div>

                <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>Check panel door condition<br /><span className='text-sm'>(Acceptance Criteria - Closed)</span></label>
                    <select name='PanelDoorCondition' value={formData.PanelDoorCondition || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="Closed">Closed</option>
                    <option value="Open">Open</option>
                    </select>
                </div>

                <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>Check for rubber mat<br /><span className='text-sm'>(Acceptance Criteria - Available)</span></label>
                    <select name='RubberMat' value={formData.RubberMat || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="Available">Available</option>
                    <option value="Not Available">Not Available</option>
                    </select>
                </div>

                <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>Check door lock condition<br /><span className='text-sm'>(Acceptance Criteria - OK)</span></label>
                    <select name='DoorLockCondition' value={formData.DoorLockCondition || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="OK">OK</option>
                    <option value="NOK">NOK</option>
                    </select>
                </div>

                <div className='flex flex-col'>
                    <label className='text-md font-medium mb-1'>Check the fire extinguisher place near the unit<br /><span className='text-sm'>(Acceptance Criteria - Nearest to panel)</span></label>
                    <select name='FireExtinguisher' value={formData.FireExtinguisher || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="Nearest to panel">Nearest to panel</option>
                    <option value="Not Nearest">Not Nearest</option>
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

export default Panel28d;
