const mongoose = require('mongoose');
const addOne = require("./defaultController").addOne;
const getAll = require("./defaultController").getAll;

const Meat = mongoose.model('Meat');

module.exports.getAll = (req, res) => {
    getAll(req, res, Meat)
};

module.exports.addMeat = (req, res) => {
    addOne(req, res, Meat)
};
