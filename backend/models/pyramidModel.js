// /backend/models/PyramidModel.js
const mongoose = require('mongoose');

const pyramidSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  processes: [
    {
      name: { type: String, required: true },
      description: { type: String },
      tasks: [
        { name: String, description: String },
      ],
    },
  ],
});

const Pyramid = mongoose.model('Pyramid', pyramidSchema);

module.exports = Pyramid;
