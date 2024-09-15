// index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const wishlistRoutes = require('./routes/wishlist');

// Initialize Express
const app = express();
app.use(express.json());
app.use(cors());

// Test the database connection and sync
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    return sequelize.sync();
  })
  .then(() => {
    console.log('Database synced successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Use wishlist routes
app.use('/wishlist', wishlistRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
