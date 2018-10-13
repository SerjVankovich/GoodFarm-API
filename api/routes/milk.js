const express = require('express');
const router = express.Router();

const milkController = require('../controllers/milk');

router.get("/", milkController.getAll);
router.post('/createMilk', milkController.addMilk);
router.put('/updateMilk/:id', milkController.updateMilk);
router.delete('/deleteMilk/:id', milkController.deleteMilk);

module.exports = router;