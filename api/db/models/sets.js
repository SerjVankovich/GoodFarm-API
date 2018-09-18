const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');

const Item = new Schema({
    name: { type: String, required: true},
    count: { type: String, required: true }
})

const Set = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true},
    price: { type: Number, required: true },
    items: [Item]
})

mongoose.model('Set', Set);