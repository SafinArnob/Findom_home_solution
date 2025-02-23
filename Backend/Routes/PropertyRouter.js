const express = require('express');
const router = express.Router();
const { getAllProperties, addProperty } = require('../controllers/PropertyController');

// Get all properties
router.get('/', getAllProperties);

// Add a new property
router.post('/', addProperty);

module.exports = router;
