import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const FirePumpHouse1d = () => {
  const [formData, setFormData] = useState({
    mainPowerSupply: '',
    dieselPumpStatus: '',
    hydrantPumpStatus: '',
    sprinklerPumpStatus: '',
    jockeyPumpHStatus: '',
    jockeyPumpSStatus: '',
    dieselPumpPressure: '',
    hydrantPumpPressure: '',
    sprinklerPumpPressure: '',
    jockeyPumpHPressure: '',
    jockeyPumpSPressure: '',
    gateValveCondition: '',
    phaseSignal: '',
    lubricantDieselLevel: '',
    batteryTerminal: '',
    coolantLevel: '',
    distilledWaterLevel: '',
    lubricantOilLevel: '',
    coolantHosesCondition: '',
    fireExtinguisher: '',
    remarks: ''
  });
  
  const [submittedToday, setSubmittedToday] = useState(null);
  const { enqueueSnackbar } = useSnackbar();


  useEffect(() => {
    // Fetch submission status for today
    axios.get('https://scheq.in/api/fire_pump_house_1_d/status')
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
        axios.post('https://scheq.in/api/fire_pump_house_1_d', autoFormData)
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
    
    axios.post('https://scheq.in/api/fire_pump_house_1_d', formData)
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
      <h1 className='text-4xl font-semibold mb-6 text-center'>Fire Pump House</h1>
      <h1 className='text-xl font-semibold text-center'>Equipment Name: Fire Hydrant System</h1>
      <h1 className='text-xl font-semibold mb-6 text-center'>(Equipment no: VT/FM/UTM/FHS/078)</h1>
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
                <div className="flex flex-col">
                <label className="text-md font-medium mb-1">Check main Power Supply<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                <select name="mainPowerSupply" value={formData.mainPowerSupply} onChange={handleChange} className="p-3 border border-gray-300 rounded-md shadow-sm">
                    <option value="" disabled>Select</option>
                    <option value="ON">ON</option>
                    <option value="OFF">OFF</option>
                </select>
                </div>

                <div className="flex flex-col">
                <label className="text-md font-medium mb-1">Check Diesel Pump Status<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                <select name="dieselPumpStatus" value={formData.dieselPumpStatus} onChange={handleChange} className="p-3 border border-gray-300 rounded-md shadow-sm">
                    <option value="" disabled>Select</option>
                    <option value="ON">ON</option>
                    <option value="OFF">OFF</option>
                </select>
                </div>

                <div className="flex flex-col">
                <label className="text-md font-medium mb-1">Check Hydrant Pump Status<br /><span className='text-sm'>(Acceptance Criteria - Auto)</span></label>
                <select name="hydrantPumpStatus" value={formData.hydrantPumpStatus} onChange={handleChange} className="p-3 border border-gray-300 rounded-md shadow-sm">
                    <option value="" disabled>Select</option>
                    <option value="Auto">Auto</option>
                    <option value="Manual">Manual</option>
                </select>
                </div>

                <div className="flex flex-col">
                <label className="text-md font-medium mb-1">Check Sprinkler Pump Status<br /><span className='text-sm'>(Acceptance Criteria - Auto)</span></label>
                <select name="sprinklerPumpStatus" value={formData.sprinklerPumpStatus} onChange={handleChange} className="p-3 border border-gray-300 rounded-md shadow-sm">
                    <option value="" disabled>Select</option>
                    <option value="Auto">Auto</option>
                    <option value="Manual">Manual</option>
                </select>
                </div>

                <div className="flex flex-col">
                <label className="text-md font-medium mb-1">Check Jockey Pump-H Status<br /><span className='text-sm'>(Acceptance Criteria - Auto)</span></label>
                <select name="jockeyPumpHStatus" value={formData.jockeyPumpHStatus} onChange={handleChange} className="p-3 border border-gray-300 rounded-md shadow-sm">
                    <option value="" disabled>Select</option>
                    <option value="Auto">Auto</option>
                    <option value="Manual">Manual</option>
                </select>
                </div>

                <div className="flex flex-col">
                <label className="text-md font-medium mb-1">Check Jockey Pump-S Status<br /><span className='text-sm'>(Acceptance Criteria - Auto)</span></label>
                <select name="jockeyPumpSStatus" value={formData.jockeyPumpSStatus} onChange={handleChange} className="p-3 border border-gray-300 rounded-md shadow-sm">
                    <option value="" disabled>Select</option>
                    <option value="Auto">Auto</option>
                    <option value="Manual">Manual</option>
                </select>
                </div>

                <div className="flex flex-col">
                <label className="text-md font-medium mb-1">Check Diesel Pump Pressure<br /><span className='text-sm'>(Acceptance Criteria - 10-12 kg/cm2)</span></label>
                <select name="dieselPumpPressure" value={formData.dieselPumpPressure} onChange={handleChange} className="p-3 border border-gray-300 rounded-md shadow-sm">
                    <option value="" disabled>Select</option>
                    <option value="10-12 kg/cm2">10-12 kg/cm2</option>
                    <option value="Below 10-12 kg/cm2">Below 10-12 kg/cm2</option>
                    <option value="Above 10-12 kg/cm2">Above 10-12 kg/cm2</option>
                </select>
                </div>

                <div className="flex flex-col">
                <label className="text-md font-medium mb-1">Check Hydrant Pump Pressure<br /><span className='text-sm'>(Acceptance Criteria - 10-12 kg/cm2)</span></label>
                <select name="hydrantPumpPressure" value={formData.hydrantPumpPressure} onChange={handleChange} className="p-3 border border-gray-300 rounded-md shadow-sm">
                    <option value="" disabled>Select</option>
                    <option value="10-12 kg/cm2">10-12 kg/cm2</option>
                    <option value="Below 10-12 kg/cm2">Below 10-12 kg/cm2</option>
                    <option value="Above 10-12 kg/cm2">Above 10-12 kg/cm2</option>
                </select>
                </div>

                <div className="flex flex-col">
                <label className="text-md font-medium mb-1">Check Sprinkler Pump Pressure<br /><span className='text-sm'>(Acceptance Criteria - 10-12 kg/cm2)</span></label>
                <select name="sprinklerPumpPressure" value={formData.sprinklerPumpPressure} onChange={handleChange} className="p-3 border border-gray-300 rounded-md shadow-sm">
                    <option value="" disabled>Select</option>
                    <option value="10-12 kg/cm2">10-12 kg/cm2</option>
                    <option value="Below 10-12 kg/cm2">Below 10-12 kg/cm2</option>
                    <option value="Above 10-12 kg/cm2">Above 10-12 kg/cm2</option>
                </select>
                </div>

                <div className="flex flex-col">
                <label className="text-md font-medium mb-1">Check Jockey Pump-H Pressure<br /><span className='text-sm'>(Acceptance Criteria - 10-12 kg/cm2)</span></label>
                <select name="jockeyPumpHPressure" value={formData.jockeyPumpHPressure} onChange={handleChange} className="p-3 border border-gray-300 rounded-md shadow-sm">
                    <option value="" disabled>Select</option>
                    <option value="10-12 kg/cm2">10-12 kg/cm2</option>
                    <option value="Below 10-12 kg/cm2">Below 10-12 kg/cm2</option>
                    <option value="Above 10-12 kg/cm2">Above 10-12 kg/cm2</option>
                </select>
                </div>

                <div className="flex flex-col">
                <label className="text-md font-medium mb-1">Check Jockey Pump-S Pressure<br /><span className='text-sm'>(Acceptance Criteria - 10-12 kg/cm2)</span></label>
                <select name="jockeyPumpSPressure" value={formData.jockeyPumpSPressure} onChange={handleChange} className="p-3 border border-gray-300 rounded-md shadow-sm">
                    <option value="" disabled>Select</option>
                    <option value="10-12 kg/cm2">10-12 kg/cm2</option>
                    <option value="Below 10-12 kg/cm2">Below 10-12 kg/cm2</option>
                    <option value="Above 10-12 kg/cm2">Above 10-12 kg/cm2</option>
                </select>
                </div>

                <div className="flex flex-col">
                <label className="text-md font-medium mb-1">Check Gate Valve Condition<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                <select name="gateValveCondition" value={formData.gateValveCondition} onChange={handleChange} className="p-3 border border-gray-300 rounded-md shadow-sm">
                    <option value="" disabled>Select</option>
                    <option value="ON">ON</option>
                    <option value="OFF">OFF</option>
                </select>
                </div>

                <div className="flex flex-col">
                <label className="text-md font-medium mb-1">Check R, Y, B Phase Signal<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                <select name="phaseSignal" value={formData.phaseSignal} onChange={handleChange} className="p-3 border border-gray-300 rounded-md shadow-sm">
                    <option value="" disabled>Select</option>
                    <option value="ON">ON</option>
                    <option value="OFF">OFF</option>
                </select>
                </div>

                <div className="flex flex-col">
                <label className="text-md font-medium mb-1">Check Lubricant Diesel Level<br /><span className='text-sm'>(Acceptance Criteria - Maximum)</span></label>
                <select name="lubricantDieselLevel" value={formData.lubricantDieselLevel} onChange={handleChange} className="p-3 border border-gray-300 rounded-md shadow-sm">
                    <option value="" disabled>Select</option>
                    <option value="Maximum">Maximum</option>
                    <option value="Below Maximum">Below Maximum</option>
                </select>
                </div>

                <div className="flex flex-col">
                <label className="text-md font-medium mb-1">Check Battery Terminal<br /><span className='text-sm'>(Acceptance Criteria - OK)</span></label>
                <select name="batteryTerminal" value={formData.batteryTerminal} onChange={handleChange} className="p-3 border border-gray-300 rounded-md shadow-sm">
                    <option value="" disabled>Select</option>
                    <option value="OK">OK</option>
                    <option value="NOK">NOK</option>
                </select>
                </div>

                <div className="flex flex-col">
                <label className="text-md font-medium mb-1">Check Coolant Level<br /><span className='text-sm'>(Acceptance Criteria - Maximum)</span></label>
                <select name="coolantLevel" value={formData.coolantLevel} onChange={handleChange} className="p-3 border border-gray-300 rounded-md shadow-sm">
                    <option value="" disabled>Select</option>
                    <option value="Maximum">Maximum</option>
                    <option value="Below Maximum">Below Maximum</option>
                </select>
                </div>

                <div className="flex flex-col">
                <label className="text-md font-medium mb-1">Check Distilled Water Level<br /><span className='text-sm'>(Acceptance Criteria - Maximum)</span></label>
                <select name="distilledWaterLevel" value={formData.distilledWaterLevel} onChange={handleChange} className="p-3 border border-gray-300 rounded-md shadow-sm">
                    <option value="" disabled>Select</option>
                    <option value="Maximum">Maximum</option>
                    <option value="Below Maximum">Below Maximum</option>
                </select>
                </div>

                <div className="flex flex-col">
                <label className="text-md font-medium mb-1">Check Lubricant Oil Level<br /><span className='text-sm'>(Acceptance Criteria - Maximum)</span></label>
                <select name="lubricantOilLevel" value={formData.lubricantOilLevel} onChange={handleChange} className="p-3 border border-gray-300 rounded-md shadow-sm">
                    <option value="" disabled>Select</option>
                    <option value="Maximum">Maximum</option>
                    <option value="Below Maximum">Below Maximum</option>
                </select>
                </div>

                <div className="flex flex-col">
                <label className="text-md font-medium mb-1">Check Coolant Hoses Condition<br /><span className='text-sm'>(Acceptance Criteria - OK)</span></label>
                <select name="coolantHosesCondition" value={formData.coolantHosesCondition} onChange={handleChange} className="p-3 border border-gray-300 rounded-md shadow-sm">
                    <option value="" disabled>Select</option>
                    <option value="OK">OK</option>
                    <option value="NOK">NOK</option>
                </select>
                </div>

                <div className="flex flex-col">
                <label className="text-md font-medium mb-1">Check Fire Extinguisher Near Unit<br /><span className='text-sm'>(Acceptance Criteria - Nearest to unit)</span></label>
                <select name="fireExtinguisher" value={formData.fireExtinguisher} onChange={handleChange} className="p-3 border border-gray-300 rounded-md shadow-sm">
                    <option value="" disabled>Select</option>
                    <option value="Nearest to unit">Nearest to unit</option>
                    <option value="Not found">Not found</option>
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

export default FirePumpHouse1d;
