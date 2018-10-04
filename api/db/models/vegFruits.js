const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');
const defaultSchema = require("./defaultSchema").defaultSchema;

const VegFruits = new Schema(defaultSchema);

mongoose.model('VegFruits', VegFruits);