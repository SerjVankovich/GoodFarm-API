const mongoose = require('mongoose');
const addOne = require("./defaultController").addOne;
const getAll = require("./defaultController").getAll;

const VegFruits = mongoose.model('VegFruits');

module.exports.getAll = (req, res) => {
    getAll(req, res, VegFruits)
};

module.exports.addVegFruit = (req, res) => {
    addOne(req, res, VegFruits)
};