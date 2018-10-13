const express = require('express');
const deleteMeat = require("../controllers/meatFish").deleteMeat;
const updateMeat = require("../controllers/meatFish").updateMeat;
const addMeat = require("../controllers/meatFish").addMeat;
const getAll = require("../controllers/meatFish").getAll;
const router = express.Router();

router.get('/', getAll);
router.post('/createMeat', addMeat);
router.put('/updateMeat/:id', updateMeat);
router.delete('/deleteMeat/:id', deleteMeat);

module.exports = router;