const express = require('express');
const router = express.Router();
const Wishlist = require('../models/wishlist');

router.post('/add', async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }

    const newWishlist = await Wishlist.create({ name, email });

    res.status(201).json({ message: 'Wishlist entry created successfully', data: newWishlist });
  } catch (error) {
    console.error('Error creating wishlist entry:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
