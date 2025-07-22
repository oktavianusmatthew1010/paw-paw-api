const express = require('express');
const router = express.Router();
const { Pet, User } = require('../models');

// Create pet
router.post('/', async (req, res) => {
  try {
    const pet = await Pet.create(req.body);
    res.json(pet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all pets with owners
router.get('/', async (req, res) => {
  const pets = await Pet.findAll({ include: { model: User, as: 'user' } });
  res.json(pets);
});

module.exports = router;
