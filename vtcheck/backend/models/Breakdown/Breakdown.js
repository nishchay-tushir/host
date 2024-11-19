// submitFormRoute.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Mongoose Schema and Model
const formSchema = new mongoose.Schema({
    dropdown1: String,
    dropdown2: String,
    dropdown3: String,
    dropdown4: String,
    dropdown5: String,
    dropdown6: String,
    dropdown7: String,
    input1: Number,
    input2: Number,
    input3: String,
    input4: String,
    input5: String,
    input6: String,
    input7: Number,
    input8: String,
    input9: Number,
    unit: String,
    submissionDate: {type: Date, default: Date.now}
  });

const FormData = mongoose.model('Breakdown', formSchema);

// POST route to handle form submission
router.post('/breakdown_data', async (req, res) => {
  try {
    const newFormData = new FormData(req.body);
    await newFormData.save();
    res.json({ message: 'Form data saved successfully!' });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ message: 'Error saving form data.' });
  }
});

// GET route to retrieve all form submissions
router.get('/breakdown_data', async (req, res) => {
  try {
    const data = await FormData.find();
    res.json(data);
  } catch (error) {
    console.error("Error fetching form data:", error);
    res.status(500).json({ message: 'Error fetching form data.' });
  }
});

// GET route to retrieve a single form submission by ID
router.get('/breakdown_data/:id', async (req, res) => {
  try {
    const data = await FormData.findById(req.params.id);
    if (!data) return res.status(404).json({ message: 'Data not found.' });
    res.json(data);
  } catch (error) {
    console.error("Error fetching form data:", error);
    res.status(500).json({ message: 'Error fetching form data.' });
  }
});

// PUT route to update a form submission by ID
router.put('/breakdown_data/:id', async (req, res) => {
  try {
    const updatedData = await FormData.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // return the updated document
      runValidators: true
    });
    if (!updatedData) return res.status(404).json({ message: 'Data not found.' });
    res.json({ message: 'Form data updated successfully!', data: updatedData });
  } catch (error) {
    console.error("Error updating form data:", error);
    res.status(500).json({ message: 'Error updating form data.' });
  }
});

// DELETE route to delete a form submission by ID
router.delete('/breakdown_data/:id', async (req, res) => {
  try {
    const deletedData = await FormData.findByIdAndDelete(req.params.id);
    if (!deletedData) return res.status(404).json({ message: 'Data not found.' });
    res.json({ message: 'Form data deleted successfully!' });
  } catch (error) {
    console.error("Error deleting form data:", error);
    res.status(500).json({ message: 'Error deleting form data.' });
  }
});

module.exports = router;
