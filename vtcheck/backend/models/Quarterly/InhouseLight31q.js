const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// Define the Mongoose schema and model
const InhouseLight31qSchema = new mongoose.Schema({
    dropdown1: { type: String, required: true },
    dropdown2: { type: String, required: true },
    dropdown3: { type: String, required: true },
    dropdown4: { type: String, required: true },
    dropdown5: { type: String, required: true },
    dropdown6: { type: String, required: true },
    input1: Number,
  submissionDate: { type: Date, default: null },
  remarks: { type: String, required: true },
});

const InhouseLight31q = mongoose.model('InhouseLight31q', InhouseLight31qSchema);

// Define CRUD routes
router.post('/', async (req, res) => {
  try {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth();

      let quarterStartMonth;
      if (currentMonth < 3) {
          quarterStartMonth = 0;
      } else if (currentMonth < 6) {
          quarterStartMonth = 3;
      } else if (currentMonth < 9) {
          quarterStartMonth = 6;
      } else {
          quarterStartMonth = 9;
      }

      const startOfQuarter = new Date(currentYear, quarterStartMonth, 1);
      const startOfNextQuarter = new Date(currentYear, quarterStartMonth + 3, 1);

      const existingRecord = await InhouseLight31q.findOne({
          submissionDate: {
              $gte: startOfQuarter,
              $lt: startOfNextQuarter
          }
      });

      if (existingRecord) {
          return res.status(400).json({ message: 'Form already submitted for this quarter' });
      }

      const newRecord = new InhouseLight31q({
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
    const records = await InhouseLight31q.find();
    res.status(200).json(records);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/status', async (req, res) => {
  try {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth();

      let quarterStartMonth;
      if (currentMonth < 3) {
          quarterStartMonth = 0;
      } else if (currentMonth < 6) {
          quarterStartMonth = 3;
      } else if (currentMonth < 9) {
          quarterStartMonth = 6;
      } else {
          quarterStartMonth = 9;
      }

      const startOfQuarter = new Date(currentYear, quarterStartMonth, 1);
      const startOfNextQuarter = new Date(currentYear, quarterStartMonth + 3, 1);

      const existingRecord = await InhouseLight31q.findOne({
          submissionDate: {
              $gte: startOfQuarter,
              $lt: startOfNextQuarter
          }
      });

      if (existingRecord) {
          return res.status(200).json({ submittedThisQuarter: true });
      }

      return res.status(200).json({ submittedThisQuarter: false });
  } catch (err) {
      res.status(400).json({ message: 'Error checking status', error: err.message });
  }
});




router.put('/:id', async (req, res) => {
  try {
    const updatedRecord = await InhouseLight31q.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
    const deletedRecord = await InhouseLight31q.findByIdAndDelete(req.params.id);
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

