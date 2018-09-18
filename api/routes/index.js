var express = require('express');
const ctrlSellers = require('../controllers/sellers')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/register', ctrlSellers.register)
router.post('/login', ctrlSellers.login)

module.exports = router;
