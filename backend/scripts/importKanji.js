const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Kanji = require('../models/Kanji');

require('dotenv').config();

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/kanjiDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Read JSON file
const kanjiData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../scripts/n5_kanji.json'), 'utf8')
);

// Import data to MongoDB
const importData = async () => {
  try {
    await Kanji.deleteMany(); // Clear existing data
    await Kanji.insertMany(kanjiData);
    console.log('Data successfully imported!');
    process.exit();
  } catch (error) {
    console.error('Error importing data:', error);
    process.exit(1);
  }
};

importData();
