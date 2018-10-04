const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');
const defaultSchema = require("./defaultSchema").defaultSchema;

const Bread = new Schema(defaultSchema);

mongoose.model('Bread', Bread);