// routes/questionRoutes.js
const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// Get all questions
router.get('/questions', async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get questions' });
  }
});

// Add new question
router.post('/', async (req, res) => {
  const { question, options } = req.body;
  try {
    const newQuestion = new Question({
      question,
      options,
    });
    await newQuestion.save();
    res.status(201).json({ message: 'Question created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete question
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Question.findByIdAndDelete(id);
    res.json({ message: 'Question deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update question (if needed)
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { question, options } = req.body;
  try {
    const updatedQuestion = await Question.findByIdAndUpdate(
      id,
      { question, options },
      { new: true }
    );
    res.json(updatedQuestion);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
