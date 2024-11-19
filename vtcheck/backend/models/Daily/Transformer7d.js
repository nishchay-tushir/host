const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// Define the Mongoose schema and model
const Transformer7DSchema = new mongoose.Schema({
  dropdown1: { type: String, required: true },
  dropdown2: { type: String, required: true },
  dropdown3: { type: String, required: true },
  dropdown4: { type: String, required: true },
  OilLevel: { type: String, required: true },
  SilicaGelColor: { type: String, required: true },
  Cleaning: { type: String, required: true },
  TapPosition: { type: String, required: true },
  FireExtinguisher: { type: String, required: true },
  input1: Number,
  input2: Number,
  input3: Number,
  remarks: { type: String, default: { type: String, required: true } },
  submissionDate: { type: Date, default: null }
});

const Transformer7D = mongoose.model('Transformer7D', Transformer7DSchema);

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

    const existingRecord = await Transformer7D.findOne({
      submissionDate: { $gte: today, $lt: tomorrow }
    });

    if (existingRecord) {
      return res.status(400).json({ message: 'Form already submitted for today' });
    }

    const newRecord = new Transformer7D({ ...req.body, submissionDate: new Date() });
    const savedRecord = await newRecord.save();
    res.status(201).json(savedRecord);
  } catch (err) {
    res.status(400).json({ message: 'Error saving record', error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const records = await Transformer7D.find();
    res.status(200).json(records);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/status', async (req, res) => {
  try {
    const today = new Date().setHours(0, 0, 0, 0);
    const tomorrow = new Date(today).setDate(new Date(today).getDate() + 1);

    const record = await Transformer7D.findOne({
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
    const updatedRecord = await Transformer7D.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
    const deletedRecord = await Transformer7D.findByIdAndDelete(req.params.id);
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
