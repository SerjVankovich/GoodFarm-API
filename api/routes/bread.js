const express = require('express');
const getAll = require("../controllers/bread").getAll;
const addBread = require("../controllers/bread").addBread;
const router = express.Router();

router.get('/', getAll);
router.post('/createBread', addBread);

module.exports = router;