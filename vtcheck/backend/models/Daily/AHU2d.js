const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// Define the Mongoose schema and model
const AHU2DSchema = new mongoose.Schema({
  BluePipeLeak: { type: String, required: true },
  GreyPipeLeak: { type: String, required: true },
  NoiseVibration: { type: String, required: true },
  FilterConditionBack: { type: String, required: true },
  FilterConditionHepa: { type: String, required: true },
  DrainCondensation: { type: String, required: true },
  BypassValve: { type: String, required: true },
  WaterInletValve: { type: String, required: true },
  WaterOutletValve: { type: String, required: true },
  DamperCondition: { type: String, required: true },
  CondensorDrain: { type: String, required: true },
  NoiseLevel: { type: String, required: true },
  FireExtinguisher: { type: String, required: true },
  input1: Number,
  input2: Number,
  input3: Number,
  input4: Number,
  input5: Number,
  input6: Number,
  input7: Number,
  input8: Number,
  input9: Number,
  input10: Number,
  input11: Number,
  remarks: { type: String, default: '' },
  submissionDate: { type: Date, default: null }
});

const AHU2D = mongoose.model('AHU2D', AHU2DSchema);

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

    const existingRecord = await AHU2D.findOne({
      submissionDate: { $gte: today, $lt: tomorrow }
    });

    if (existingRecord) {
      return res.status(400).json({ message: 'Form already submitted for today' });
    }

    const newRecord = new AHU2D({ ...req.body, submissionDate: new Date() });
    const savedRecord = await newRecord.save();
    res.status(201).json(savedRecord);
  } catch (err) {
    res.status(400).json({ message: 'Error saving record', error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const records = await AHU2D.find();
    res.status(200).json(records);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/status', async (req, res) => {
  try {
    const today = new Date().setHours(0, 0, 0, 0);
    const tomorrow = new Date(today).setDate(new Date(today).getDate() + 1);

    const record = await AHU2D.findOne({
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
    const updatedRecord = await AHU2D.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
    const deletedRecord = await AHU2D.findByIdAndDelete(req.params.id);
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
