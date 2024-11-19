import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const BMS1d = () => {
  const [formData, setFormData] = useState({
    powerSupply: '',
    batterySignal: '',
    abnormalNoise: '',
    monitor: '',
    CCTVRunning: '',
    UPSPower: '',
    dataCareSystem: '',
    spotCameraPowerSupply: '',
    roomTemperature: '',
    videoRecordingSystem: '',
    amplifier: '',
    cameraRotationDirection: '',
    spotCameraStatus: '',
    alarmControl: '',
    waterLeakPanel: '',
    manualCallPoints: '',
    readersIndication: '',
    doorWorkingCondition: '',
    PublicAddressPowerSupply : '',
    NVRStatus: '',
    mic: '',
    speakers: '',
    remarks: '',
  });
  
  const [submittedToday, setSubmittedToday] = useState(null);
  const { enqueueSnackbar } = useSnackbar();


  useEffect(() => {
    // Fetch submission status for today
    axios.get('https://scheq.in/api/bms_1_d/status')
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
        axios.post('https://scheq.in/api/bms_1_d', autoFormData)
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
    
    axios.post('https://scheq.in/api/bms_1_d', formData)
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
      <h1 className='text-4xl font-semibold mb-6 text-center'>BMS</h1>
      <h1 className='text-xl font-semibold text-center'>Equipment Name: Building Management System</h1>
      <h1 className='text-xl font-semibold mb-6 text-center'>(Equipment no: VT/FM/UTM/BMS/207)</h1>
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
                <label className='text-md font-medium mb-1'>Check power supply<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                <select name='powerSupply' value={formData.powerSupply || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option value="" disabled>Select</option>
                <option value="ON">ON</option>
                <option value="OFF">OFF</option>
                </select>
            </div>

            <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check battery signal in green zone<br /><span className='text-sm'>(Acceptance Criteria - OK)</span></label>
                <select name='batterySignal' value={formData.batterySignal || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option value="" disabled>Select</option>
                <option value="OK">OK</option>
                <option value="NOK">NOK</option>
                </select>
            </div>

            <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Any abnormal noise<br /><span className='text-sm'>(Acceptance Criteria - No)</span></label>
                <select name='abnormalNoise' value={formData.abnormalNoise || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option value="" disabled>Select</option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
                </select>
            </div>

            <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check the monitor<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                <select name='monitor' value={formData.monitor || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option value="" disabled>Select</option>
                <option value="ON">ON</option>
                <option value="OFF">OFF</option>
                </select>
            </div>

            <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>All CCTV displays are running<br /><span className='text-sm'>(Acceptance Criteria - OK)</span></label>
                <select name='CCTVRunning' value={formData.CCTVRunning || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option value="" disabled>Select</option>
                <option value="OK">OK</option>
                <option value="NOK">NOK</option>
                </select>
            </div>

            <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check UPS power for all PCs<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                <select name='UPSPower' value={formData.UPSPower || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option value="" disabled>Select</option>
                <option value="ON">ON</option>
                <option value="OFF">OFF</option>
                </select>
            </div>

            <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check Data care system<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                <select name='dataCareSystem' value={formData.dataCareSystem || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option value="" disabled>Select</option>
                <option value="ON">ON</option>
                <option value="OFF">OFF</option>
                </select>
            </div>

            <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check power supply unit for spot cameras<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                <select name='spotCameraPowerSupply' value={formData.spotCameraPowerSupply || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option value="" disabled>Select</option>
                <option value="ON">ON</option>
                <option value="OFF">OFF</option>
                </select>
            </div>

            <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check Room Temperature<br /><span className='text-sm'>(Acceptance Criteria - 22-24° C)</span></label>
                <select name='roomTemperature' value={formData.roomTemperature || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option value="" disabled>Select</option>
                <option value="22-24° C">22-24° C</option>
                <option value="Below 22-24° C">Below 22-24° C</option>
                <option value="Above 22-24° C">Above 22-24° C</option>
                </select>
            </div>
            </div>

            <br /><br /><br /><br /><hr /><hr /><br /><br />
            <h1 className='text-2xl font-semibold mb-6 text-center'>CLOSED CIRCUIT TELEVISIONS</h1><br />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check video recording system<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                <select name='videoRecordingSystem' value={formData.videoRecordingSystem || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option value="" disabled>Select</option>
                <option value="ON">ON</option>
                <option value="OFF">OFF</option>
                </select>
            </div>

            <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check amplifier<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                <select name='amplifier' value={formData.amplifier || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option value="" disabled>Select</option>
                <option value="ON">ON</option>
                <option value="OFF">OFF</option>
                </select>
            </div>

            <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check camera rotation and direction<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                <select name='cameraRotationDirection' value={formData.cameraRotationDirection || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option value="" disabled>Select</option>
                <option value="ON">ON</option>
                <option value="OFF">OFF</option>
                </select>
            </div>

            <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check spot camera status<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                <select name='spotCameraStatus' value={formData.spotCameraStatus || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option value="" disabled>Select</option>
                <option value="ON">ON</option>
                <option value="OFF">OFF</option>
                </select>
            </div>
            </div>

            <br /><br /><br /><br /><hr /><hr /><br /><br />
            <h1 className='text-2xl font-semibold mb-6 text-center'>FIRE SYSTEM</h1><br />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check alarm control<br /><span className='text-sm'>(Acceptance Criteria - OK)</span></label>
                <select name='alarmControl' value={formData.alarmControl || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option value="" disabled>Select</option>
                <option value="OK">OK</option>
                <option value="Not OK">Not OK</option>
                </select>
            </div>

            <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check water leak detection panel<br /><span className='text-sm'>(Acceptance Criteria - Ready)</span></label>
                <select name='waterLeakPanel' value={formData.waterLeakPanel || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option value="" disabled>Select</option>
                <option value="Ready">Ready</option>
                <option value="Not Ready">Not Ready</option>
                </select>
            </div>

            <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check manual call points<br /><span className='text-sm'>(Acceptance Criteria - OK)</span></label>
                <select name='manualCallPoints' value={formData.manualCallPoints || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option value="" disabled>Select</option>
                <option value="OK">OK</option>
                <option value="Not OK">Not OK</option>
                </select>
            </div>
            </div>

            <br /><br /><br /><br /><hr /><hr /><br /><br />
            <h1 className='text-2xl font-semibold mb-6 text-center'>ACCESS CONTROL SYSTEM</h1><br />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check readers on indication<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                <select name='readersIndication' value={formData.readersIndication || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option value="" disabled>Select</option>
                <option value="ON">ON</option>
                <option value="OFF">OFF</option>
                </select>
            </div>

            <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check door working condition<br /><span className='text-sm'>(Acceptance Criteria - Running)</span></label>
                <select name='doorWorkingCondition' value={formData.doorWorkingCondition || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option value="" disabled>Select</option>
                <option value="Running">Running</option>
                <option value="Not Running">Not Running</option>
                </select>
            </div>
            </div>

            <br /><br /><br /><br /><hr /><hr /><br /><br />
            <h1 className='text-2xl font-semibold mb-6 text-center'>PUBLIC ADDRESS SYSTEM</h1><br />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check the Power Supply<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                <select name='PublicAddressPowerSupply' value={formData.PublicAddressPowerSupply || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option value="" disabled>Select</option>
                <option value="ON">ON</option>
                <option value="OFF">OFF</option>
                </select>
            </div>

            <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check NVR Status<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                <select name='NVRStatus' value={formData.NVRStatus || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option value="" disabled>Select</option>
                <option value="ON">ON</option>
                <option value="OFF">OFF</option>
                </select>
            </div>

            <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check Mic<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                <select name='mic' value={formData.mic || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option value="" disabled>Select</option>
                <option value="ON">ON</option>
                <option value="OFF">OFF</option>
                </select>
            </div>

            <div className='flex flex-col'>
                <label className='text-md font-medium mb-1'>Check speakers<br /><span className='text-sm'>(Acceptance Criteria - ON)</span></label>
                <select name='speakers' value={formData.speakers || ''} onChange={handleChange} className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
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

export default BMS1d;
