const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    zipCode: {
      type: String,
      required: false,
    },
    propertyType: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: false,
    },
    rooms: {
      type: Number,
      required: false,
    },
    bedrooms: {
      type: Number,
      required: false,
    },
    bathrooms: {
      type: Number,
      required: false,
    },
    size: {
      type: Number,
      required: false,
    },
    yearBuilt: {
      type: Number,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    features: {
      garage: { type: Boolean, default: false },
      tvCable: { type: Boolean, default: false },
      wifi: { type: Boolean, default: false },
      windowCoverings: { type: Boolean, default: false },
    },
    images: [{ type: String }], // Store image URLs
  },
  { timestamps: false }
);

const Property = mongoose.model("Property", PropertySchema);
module.exports = Property;