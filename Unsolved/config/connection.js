// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var mysql = require('mysql');

// Set up our connection information
//Creates mySQL connection using Knex.js
const Knex = require('knex')(require('../knexfile'));

// Exports the connection for other files to use.
module.exports = Knex;