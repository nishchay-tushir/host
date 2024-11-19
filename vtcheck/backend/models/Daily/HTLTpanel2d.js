const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// Define the Mongoose schema and model
const HTLTpanel2DSchema = new mongoose.Schema({
  indicatorRYB: { type: String, required: true },
  breakerCondition: { type: String, required: true },
  breakerOff: { type: String, required: true },
  breakerTrip: { type: String, required: true },
  springCharge: { type: String, required: true },
  tripCktHealthy: { type: String, required: true },
  breakerTestPosition: { type: String, required: true },
  breakerServicePosition: { type: String, required: true },
  tripOC_EF: { type: String, required: true },
  DCSupplyHealthy: { type: String, required: true },
  spareHeaterCktHealthy: { type: String, required: true },
  emergencySwitch: { type: String, required: true },
  panelKeyAvailable: { type: String, required: true },
  selectorSwitches: { type: String, required: true },
  burnSmell: { type: String, required: true },
  fireExtinguisher: { type: String, required: true },
  submissionDate: { type: Date, default: null },
  remarks: { type: String, default: { type: String, required: true } },
});

const HTLTpanel2D = mongoose.model('HTLTpanel2D', HTLTpanel2DSchema);

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

    const existingRecord = await HTLTpanel2D.findOne({
      submissionDate: { $gte: today, $lt: tomorrow }
    });

    if (existingRecord) {
      return res.status(400).json({ message: 'Form already submitted for today' });
    }

    const newRecord = new HTLTpanel2D({ ...req.body, submissionDate: new Date() });
    const savedRecord = await newRecord.save();
    res.status(201).json(savedRecord);
  } catch (err) {
    res.status(400).json({ message: 'Error saving record', error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const records = await HTLTpanel2D.find();
    res.status(200).json(records);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/status', async (req, res) => {
  try {
    const today = new Date().setHours(0, 0, 0, 0);
    const tomorrow = new Date(today).setDate(new Date(today).getDate() + 1);

    const record = await HTLTpanel2D.findOne({
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
    const updatedRecord = await HTLTpanel2D.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
    const deletedRecord = await HTLTpanel2D.findByIdAndDelete(req.params.id);
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