const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// Define the Mongoose schema and model
const SoftenerUnit1DSchema = new mongoose.Schema({
  mainPanelSupply: { type: String, required: true },
  valveCarbonFilter: { type: String, required: true },
  valveSandFilter: { type: String, required: true },
  leakageCheck: { type: String, required: true },
  carbonFilterRegeneration: { type: String, required: true },
  sandFilterBackwash: { type: String, required: true },
  sandFilterService: { type: String, required: true },
  sandFilterRinse: { type: String, required: true },
  carbonFilterBackwash: { type: String, required: true },
  carbonFilterService: { type: String, required: true },
  carbonFilterRinse: { type: String, required: true },
  naClStock: { type: String, required: true },
  sodiumHypoStock: { type: String, required: true },
  dosingOperation: { type: String, required: true },
  flowMeterInletReading: { type: String, required: true },
  flowMeterOutletReading: { type: String, required: true },
  submissionDate: { type: Date, default: null },
  remarks: { type: String, default: { type: String, required: true } },
});

const SoftenerUnit1D = mongoose.model('SoftenerUnit1D', SoftenerUnit1DSchema);

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

    const existingRecord = await SoftenerUnit1D.findOne({
      submissionDate: { $gte: today, $lt: tomorrow }
    });

    if (existingRecord) {
      return res.status(400).json({ message: 'Form already submitted for today' });
    }

    const newRecord = new SoftenerUnit1D({ ...req.body, submissionDate: new Date() });
    const savedRecord = await newRecord.save();
    res.status(201).json(savedRecord);
  } catch (err) {
    res.status(400).json({ message: 'Error saving record', error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const records = await SoftenerUnit1D.find();
    res.status(200).json(records);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/status', async (req, res) => {
  try {
    const today = new Date().setHours(0, 0, 0, 0);
    const tomorrow = new Date(today).setDate(new Date(today).getDate() + 1);

    const record = await SoftenerUnit1D.findOne({
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
    const updatedRecord = await SoftenerUnit1D.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
    const deletedRecord = await SoftenerUnit1D.findByIdAndDelete(req.params.id);
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
