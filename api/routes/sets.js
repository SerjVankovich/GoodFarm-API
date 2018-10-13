const express = require('express');
const router = express.Router();
const setsController = require('../controllers/sets');

router.get('/', setsController.getAll);
router.post('/createSet', setsController.addSet);
router.delete('/deleteSet/:id', setsController.deleteSet);
router.put('/updateSet/:id', setsController.updateSet);

module.exports = router;