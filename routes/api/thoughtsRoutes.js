const express = require('express');
const router = express.Router();
const { Thought, User } = require('../../models');

// Get all thoughts
router.get('/', async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new thought
router.post('/', async (req, res) => {
  try {
    const newThought = await Thought.create(req.body);
    await User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: newThought._id } });
    res.json(newThought);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
