const mongoose = require('mongoose');
const addOne = require("./defaultController").addOne;
const getAll = require("./defaultController").getAll;


const Milk = mongoose.model("Milk");

module.exports.getAll = function (req, res) {
    getAll(req, res, Milk);
};

module.exports.addMilk = (req, res) => {
    addOne(req, res, Milk)
};