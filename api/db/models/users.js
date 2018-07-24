const Schema = require("mongoose").Schema;
const mongoose = require("mongoose");

const Item = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  count: { type: Number, required: true }
});

const Order = new Schema({
  price: { type: Number },
  items: [Item],
  createdOn: { type: Date, default: Date.now() },
  compleated: { type: Boolean, default: false }
});

const User = new Schema({
  email: { type: String, required: true },
  phone: { type: String, required: true },
  name: { type: String, required: true },
  city: { type: String, required: true, default: "Vladivostok" },
  street: { type: String, required: true },
  house: { type: String, required: true },
  flat: { type: Number, required: true },
  entrance: { type: Number, default: null },
  floor: { type: Number, default: null },
  comment: { type: String, default: null },
  activeOrders: [Order],
  compleatedOrders: [Order]
});

mongoose.model("User", User);
