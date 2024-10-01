const mongoose = require('mongoose');

// makes connection
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/socialNetworkAPI');
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
    process.exit(1); 
  }
};

module.exports = connectDB;
