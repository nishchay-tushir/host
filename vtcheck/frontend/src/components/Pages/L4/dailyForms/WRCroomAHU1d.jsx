import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const WRCroomAHU1d = () => {
  const [formData, setFormData] = useState({
    mainPanelSupply: '',
    temperatureAHU: '',
    temperatureChemicalRoom: '',
    outdoorUnitCondition: '',
    damperCondition: '',
    wireBurningSmell: '',
    abnormalNoise: '',
    fireExtinguisher: '',
    remarks: '',
  });
  
  const [submittedToday, setSubmittedToday] = useState(null);
  const { enqueueSnackbar } = useSnackbar();


  useEffect(() => {
    // Fetch submission status for today
    axios.get('https://scheq.in/api/wrc_room_ahu_1_d/status')
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
        axios.post('https://scheq.in/api/wrc_room_ahu_1_d', autoFormData)
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
    
    axios.post('https://scheq.in/api/wrc_room_ahu_1_d', formData)
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
      <h1 className='text-4xl font-semibold mb-6 text-center'>WRC Room AHU</h1>
      <h1 className='text-xl font-semibold text-center'>Equipment Name: AHU unit</h1>
      <h1 className='text-xl font-semibold mb-6 text-center'>(Area: WRC Room & Chemical Room)</h1>
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
                <label className='text-md font-medium mb-1'>Check main panel supply R, Y, B- Phase<br /><span className='text-sm'>(Visual inspection - ON)</span></label>
                <select name='mainPanelSupply' value={formData.mainPanelSupply || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="ON">ON</option>
                    <option value="OFF">OFF</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check temperature on digital thermometer in AHU panel<br /><span className='text-sm'>(Visual inspection - 22° to 25°)</span></label>
                <select name='temperatureAHU' value={formData.temperatureAHU || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="22° to 25°">22° to 25°</option>
                    <option value="Above 25°">Above 25°</option>
                    <option value="Below 22°">Below 22°</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check temperature on digital thermometer in Chemical room panel<br /><span className='text-sm'>(Visual inspection - 22° to 25°)</span></label>
                <select name='temperatureChemicalRoom' value={formData.temperatureChemicalRoom || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="22° to 25°">22° to 25°</option>
                    <option value="Above 25°">Above 25°</option>
                    <option value="Below 22°">Below 22°</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check outdoor unit<br /><span className='text-sm'>(Visual inspection - Available & In proper condition)</span></label>
                <select name='outdoorUnitCondition' value={formData.outdoorUnitCondition || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="Available & In proper condition">Available & In proper condition</option>
                    <option value="Not available">Not available</option>
                    <option value="In improper condition">In improper condition</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check the damper opening/closing condition<br /><span className='text-sm'>(Visual inspection - Observation: Open/Close)</span></label>
                <select name='damperCondition' value={formData.damperCondition || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="Open">Open</option>
                    <option value="Close">Close</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check for any wire burning smell<br /><span className='text-sm'>(Visual inspection - No smell)</span></label>
                <select name='wireBurningSmell' value={formData.wireBurningSmell || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="No smell">No smell</option>
                    <option value="Burning smell">Burning smell</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check for abnormal noise<br /><span className='text-sm'>(Visual inspection & Record - No abnormal noise)</span></label>
                <select name='abnormalNoise' value={formData.abnormalNoise || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="No abnormal noise">No abnormal noise</option>
                    <option value="Abnormal noise">Abnormal noise</option>
                </select>
                </div>

                <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check fire extinguisher near unit<br /><span className='text-sm'>(Trial - ON)</span></label>
                <select name='fireExtinguisher' value={formData.fireExtinguisher || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="" disabled>Select</option>
                    <option value="ON">ON</option>
                    <option value="OFF">OFF</option>
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

export default WRCroomAHU1d;