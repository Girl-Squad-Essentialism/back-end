const knex = require("knex");

const knexConfig = require("../knexfile");

const environment = process.env.DB_ENV;

module.exports = knex(knexConfig[environment]);
