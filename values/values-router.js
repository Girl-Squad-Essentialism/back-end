const express = require('express');
const router = require('express').Router();
const Values = require('./values-model.js');

router.use(express.json());

// get all values
router.get('/', (req, res) => {
  Values.find()
    .then((values) => {
      res.status(200).json(values);
    })
    .catch((err) => res.status(500).json({ message: 'Failed to get values.' }))
})

// get user's values

// get value by ID

// add a value
router.post('/', (req, res) => {
  const valueData = req.body
  valueData.uid = req.jwt.subject
  valueData.priority = false
  valueData.description = ''
  Values.add(valueData)
    .then((value) => {
      res.status(201).json({ data: value })
    })
    .catch((err) => res.status(500).json({ message: 'Failed to add value.' }))
})

// edit a value

// delete a value they added

module.exports = router;