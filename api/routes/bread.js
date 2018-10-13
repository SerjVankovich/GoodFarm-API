const express = require('express');
const deleteBread = require("../controllers/bread").deleteBread;
const updateBread = require("../controllers/bread").updateBread;
const getAll = require("../controllers/bread").getAll;
const addBread = require("../controllers/bread").addBread;
const router = express.Router();

router.get('/', getAll);
router.post('/createBread', addBread);
router.put('/updateBread/:id', updateBread);
router.delete('/deleteBread/:id', deleteBread);

module.exports = router;