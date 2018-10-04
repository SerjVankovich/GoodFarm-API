const express = require('express');
const addMeat = require("../controllers/meatFish").addMeat;
const getAll = require("../controllers/meatFish").getAll;
const router = express.Router();

router.get('/', getAll);
router.post('/createMeat', addMeat);

module.exports = router;