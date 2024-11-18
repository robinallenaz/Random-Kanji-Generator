const router = require('express').Router();
const Kanji = require('../models/Kanji');

// Get a random kanji
router.get('/random', async (req, res) => {
  try {
    const count = await Kanji.countDocuments();
    const random = Math.floor(Math.random() * count);
    const kanji = await Kanji.findOne().skip(random);
    res.json(kanji);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// Get all kanji
router.get('/', async (req, res) => {
  try {
    const kanji = await Kanji.find();
    res.json(kanji);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

module.exports = router;
