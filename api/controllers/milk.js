const mongoose = require('mongoose');
const deleteOne = require("./defaultController").deleteOne;
const updateOne = require("./defaultController").updateOne;
const addOne = require("./defaultController").addOne;
const getAll = require("./defaultController").getAll;


const Milk = mongoose.model("Milk");

module.exports.getAll = getAll(Milk);

module.exports.updateMilk = updateOne(Milk);

module.exports.addMilk = addOne(Milk);

module.exports.deleteMilk = deleteOne(Milk);