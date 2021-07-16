const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../middleware/user-authentication.js');
const userRouter = require('../users/users-router.js');
const valueRouter = require('../values/values-router.js');
// const projectRouter = require('../projects/projects-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/users', userRouter);
server.use('/api/values', authenticate, valueRouter);
// server.use('/api/projects', authenticate, projectRouter);


server.get('/', (req, res) => {
  res.status(200).json({ api: `it's working, it's working!` });
});

module.exports = server;
