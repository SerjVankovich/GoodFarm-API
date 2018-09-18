const express = require('express');
const router = express.Router();

const milkController = require('../controllers/milk');

router.get("/", milkController.getAll);
router.post('/createMilk', milkController.addMilk);

module.exports = router;