const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuestionSchema = new Schema({
  name: String,
  answer: String,
  fig: String,
});

mongoose.model('questions', QuestionSchema);
