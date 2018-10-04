const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');
const defaultSchema = require("./defaultSchema").defaultSchema;

const Meat = new Schema(defaultSchema);

mongoose.model('Meat', Meat);