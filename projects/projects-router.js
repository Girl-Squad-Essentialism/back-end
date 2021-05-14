const express = require('express');
const router = require('express').Router();
const Projects = require('./projects-model.js');

router.use(express.json());

// get all user's projects
router.get('/', (req, res) => {
  Projects.find()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) =>
      res.status(500).json({ message: 'Failed to get projects.' })
    );
});

// get project by ID

// get user's projects by value

// add a project

// edit a project

// delete a project
