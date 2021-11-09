var express = require('express');
var router = express.Router();
const crown2Controller_69 = require('../controllers/crown_69/crown2Controller_69');

/* GET home page. */
router.get('/', crown2Controller_69.getCategories);

module.exports = router;
