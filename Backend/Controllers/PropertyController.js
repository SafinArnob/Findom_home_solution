const Property = require('../Models/Property');

// Get all properties
const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Add a new property
const addProperty = async (req, res) => {
  const { title, price, location, image } = req.body;

  try {
    const newProperty = new Property({
      title,
      price,
      location,
      image,
    });

    await newProperty.save();
    res.status(201).json({ message: 'Property added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add property' });
  }
};

module.exports = { getAllProperties, addProperty };
