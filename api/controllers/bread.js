const mongoose = require('mongoose');
const updateOne = require("./defaultController").updateOne;
const deleteOne = require("./defaultController").deleteOne;
const addOne = require("./defaultController").addOne;
const getAll = require("./defaultController").getAll;

const Bread = mongoose.model('Bread');

module.exports.getAll = getAll(Bread);

module.exports.addBread = addOne(Bread);

module.exports.updateBread = updateOne(Bread);

module.exports.deleteBread = deleteOne(Bread);