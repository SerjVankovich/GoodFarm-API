const mongoose = require('mongoose');
const deleteOne = require("./defaultController").deleteOne;
const updateOne = require("./defaultController").updateOne;
const addOne = require("./defaultController").addOne;
const getAll = require("./defaultController").getAll;

const Meat = mongoose.model('Meat');

module.exports.getAll = getAll(Meat);

module.exports.updateMeat = updateOne(Meat);

module.exports.addMeat = addOne(Meat);

module.exports.deleteMeat = deleteOne(Meat);