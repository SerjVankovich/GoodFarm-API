const express = require('express');
const deleteVegFruit = require("../controllers/vegFruits").deleteVegFruit;
const updateVegFruit = require("../controllers/vegFruits").updateVegFruit;
const addVegFruit = require("../controllers/vegFruits").addVegFruit;
const getAll = require("../controllers/vegFruits").getAll;
const router = express.Router();

router.get('/', getAll);
router.post('/createVegFruit', addVegFruit);
router.put('/updateVegFruit/:id', updateVegFruit);
router.delete('/deleteVegFruit/:id', deleteVegFruit);

module.exports = router;