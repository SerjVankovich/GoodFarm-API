const express = require('express');
const router = express.Router();
const setsController = require('../controllers/sets');

router.get('/', setsController.getAll);
router.post('/createSet', setsController.addSet);

module.exports = router;