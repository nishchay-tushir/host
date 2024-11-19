const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// Define the Mongoose schema and model
const BMS1DSchema = new mongoose.Schema({
  powerSupply: { type: String, required: true },
  batterySignal: { type: String, required: true },
  abnormalNoise: { type: String, required: true },
  monitor: { type: String, required: true },
  CCTVRunning: { type: String, required: true },
  UPSPower: { type: String, required: true },
  dataCareSystem: { type: String, required: true },
  spotCameraPowerSupply: { type: String, required: true },
  roomTemperature: { type: String, required: true },
  videoRecordingSystem: { type: String, required: true },
  amplifier: { type: String, required: true },
  cameraRotationDirection: { type: String, required: true },
  spotCameraStatus: { type: String, required: true },
  alarmControl: { type: String, required: true },
  waterLeakPanel: { type: String, required: true },
  manualCallPoints: { type: String, required: true },
  readersIndication: { type: String, required: true },
  doorWorkingCondition: { type: String, required: true },
  PublicAddressPowerSupply: { type: String, required: true },
  NVRStatus: { type: String, required: true },
  mic: { type: String, required: true },
  speakers: { type: String, required: true },
  submissionDate: { type: Date, default: null },
  remarks: { type: String, default: { type: String, required: true } },
});

const BMS1D = mongoose.model('BMS1D', BMS1DSchema);

// Define CRUD routes
// Middleware to show custom message for browser access 
 router.use((req, res, next) => { 
 const acceptHeader = req.headers.accept || ''; 

 // Check if the request is coming from a browser (HTML request) 
 if (acceptHeader.includes('text/html')) { 
 return res.send('<html><body><h1>Oops, the data is not accessible</h1></body></html>'); 
 } 

// Continue for non-browser requests (like API requests)

next();
}); 

router.post('/', async (req, res) => {
  try {
    const today = new Date().setHours(0, 0, 0, 0);
    const tomorrow = new Date(today).setDate(new Date(today).getDate() + 1);

    const existingRecord = await BMS1D.findOne({
      submissionDate: { $gte: today, $lt: tomorrow }
    });

    if (existingRecord) {
      return res.status(400).json({ message: 'Form already submitted for today' });
    }

    const newRecord = new BMS1D({ ...req.body, submissionDate: new Date() });
    const savedRecord = await newRecord.save();
    res.status(201).json(savedRecord);
  } catch (err) {
    res.status(400).json({ message: 'Error saving record', error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const records = await BMS1D.find();
    res.status(200).json(records);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/status', async (req, res) => {
  try {
    const today = new Date().setHours(0, 0, 0, 0);
    const tomorrow = new Date(today).setDate(new Date(today).getDate() + 1);

    const record = await BMS1D.findOne({
      submissionDate: { $gte: today, $lt: tomorrow }
    });

    if (record) {
      res.status(200).json({ submittedToday: true });
    } else {
      res.status(200).json({ submittedToday: false });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedRecord = await BMS1D.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedRecord) {
      res.status(200).json(updatedRecord);
    } else {
      res.status(404).json({ message: 'Record not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedRecord = await BMS1D.findByIdAndDelete(req.params.id);
    if (deletedRecord) {
      res.status(200).json({ message: 'Record deleted' });
    } else {
      res.status(404).json({ message: 'Record not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
