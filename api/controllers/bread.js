const mongoose = require('mongoose');
const addOne = require("./defaultController").addOne;
const getAll = require("./defaultController").getAll;

const Bread = mongoose.model('Bread');

module.exports.getAll = (req, res) => {
    getAll(req, res, Bread)
};

module.exports.addBread = (req, res) => {
    addOne(req, res, Bread)
};