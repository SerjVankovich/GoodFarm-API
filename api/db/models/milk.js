const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');

const Milk = new Schema({
    title: {type: String, required: true},
    price: {type: Number, required: true},
    description: String,
    consist: String,
    quantity: {type: String, required: true}
});

mongoose.model("Milk", Milk);