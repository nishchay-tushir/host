const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// Define the Mongoose schema and model
const AirCompressor2MSchema = new mongoose.Schema({
    dropdown1: { type: String, required: true },
    dropdown2: { type: String, required: true },
    dropdown3: { type: String, required: true },
    dropdown4: { type: String, required: true },
    dropdown5: { type: String, required: true },
    dropdown6: { type: String, required: true },
    dropdown7: { type: String, required: true },
    dropdown8: { type: String, required: true },
    dropdown9: { type: String, required: true },
    dropdown10: { type: String, required: true },
    dropdown11: { type: String, required: true },
    dropdown12: { type: String, required: true },
    dropdown13: { type: String, required: true },
    dropdown14: { type: String, required: true },
    dropdown15: { type: String, required: true },
    dropdown16: { type: String, required: true },
    dropdown17: { type: String, required: true },
    dropdown18: { type: String, required: true },
    dropdown19: { type: String, required: true },
    dropdown20: { type: String, required: true },
    dropdown21: { type: String, required: true },
    dropdown22: { type: String, required: true },
    dropdown23: { type: String, required: true },
    dropdown24: { type: String, required: true },
    dropdown25: { type: String, required: true },
    dropdown26: { type: String, required: true },
    dropdown27: { type: String, required: true },
    dropdown28: { type: String, required: true },
    dropdown29: { type: String, required: true },
    dropdown30: { type: String, required: true },
    dropdown31: { type: String, required: true },
    dropdown32: { type: String, required: true },
    input1: Number,
    input2: Number,
    input3: Number,
    input4: Number,
  submissionDate: { type: Date, default: null },
  remarks: { type: String, required: true },
});

const AirCompressor2M = mongoose.model('AirCompressor2M', AirCompressor2MSchema);

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
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth(); // 0 = January, 11 = December
  
      const existingRecord = await AirCompressor2M.findOne({
        submissionDate: {
          $gte: new Date(currentYear, currentMonth, 1), // Start of the month
          $lt: new Date(currentYear, currentMonth + 1, 1) // Start of next month
        }
      });
  
      if (existingRecord) {
        return res.status(400).json({ message: 'Form already submitted for this month' });
      }
  
      const newRecord = new AirCompressor2M({
        ...req.body,
        submissionDate: new Date()
      });
      const savedRecord = await newRecord.save();
      res.status(201).json(savedRecord);
    } catch (err) {
      res.status(400).json({ message: 'Error saving record', error: err.message });
    }
  });

router.get('/', async (req, res) => {
  try {
    const records = await AirCompressor2M.find();
    res.status(200).json(records);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/status', async (req, res) => {
    try {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth(); // 0 = January, 11 = December
  
      const record = await AirCompressor2M.findOne({
        submissionDate: {
          $gte: new Date(currentYear, currentMonth, 1), // Start of the month
          $lt: new Date(currentYear, currentMonth + 1, 1) // Start of next month
        }
      });
  
      if (record) {
        res.status(200).json({ submittedThisMonth: true });
      } else {
        res.status(200).json({ submittedThisMonth: false });
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

router.put('/:id', async (req, res) => {
  try {
    const updatedRecord = await AirCompressor2M.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
    const deletedRecord = await AirCompressor2M.findByIdAndDelete(req.params.id);
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

