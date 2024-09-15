require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const wishlistRoutes = require('./routes/wishlist');
const Wishlist = require('./models/wishlist');

const app = express();
app.use(express.json());
app.use(cors());


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


app.use('/wishlist', wishlistRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
