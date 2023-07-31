// models/question.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
  isTrueFalse: {
    type: Boolean,
    default: false,
  },
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
