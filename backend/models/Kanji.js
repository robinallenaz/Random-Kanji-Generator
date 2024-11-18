const mongoose = require('mongoose');

const kanjiSchema = new mongoose.Schema({
  Kanji: {
    type: String,
    required: true,
    unique: true
  },
  Onyomi: {
    type: String,
    required: true
  },
  Kunyomi: {
    type: String,
    required: true
  },
  Meaning: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Kanji', kanjiSchema);
