const express = require('express');
const addVegFruit = require("../controllers/vegFruits").addVegFruit;
const getAll = require("../controllers/vegFruits").getAll;
const router = express.Router();

router.get('/', getAll);
router.post('/createVegFruit', addVegFruit);

module.exports = router;