const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true }, // You can store image URL or path
});

module.exports = mongoose.model('Property', propertySchema);
