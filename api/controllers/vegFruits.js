const mongoose = require('mongoose');
const deleteOne = require("./defaultController").deleteOne;
const updateOne = require("./defaultController").updateOne;
const addOne = require("./defaultController").addOne;
const getAll = require("./defaultController").getAll;

const VegFruits = mongoose.model('VegFruits');

module.exports.getAll = getAll(VegFruits);

module.exports.updateVegFruit = updateOne(VegFruits);

module.exports.addVegFruit = addOne(VegFruits);

module.exports.deleteVegFruit = deleteOne(VegFruits);