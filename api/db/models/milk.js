const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');
const defaultSchema = require("./defaultSchema").defaultSchema;

const Milk = new Schema(defaultSchema);

mongoose.model("Milk", Milk);