const express = require('express');
const router = express.Router();
const { Wishlist } = require('../models/wishlist'); // Ensure this import aligns with your model file

// POST route to add a new wishlist entry
router.post('/add', async (req, res) => {
  try {
    const { name, email } = req.body;

    // Validate input
    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }

    // Create a new wishlist entry
    const newWishlist = await Wishlist.create({ name, email });

    // Respond with the created entry
    res.status(201).json({
      message: 'Wishlist entry created successfully',
      data: newWishlist
    });
  } catch (error) {
    console.error('Error creating wishlist entry:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
