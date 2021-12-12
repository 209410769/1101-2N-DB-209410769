var express = require('express');
var router = express.Router();
const crown2Controller_69 = require('../controllers/crown_69/crown2Controller_69');

/* CREATE*/
router.post('/create',crown2Controller_69.createProducts);
/* READ:GET home page. */
router.get('/', crown2Controller_69.getCategories);
router.get('/shop_69', crown2Controller_69.getShop);
router.get('/shop_69/:category', crown2Controller_69.getProductsByCategory);

/* UPDATE*/
router.post('/update',crown2Controller_69.updateProducts);
/* DELETE*/

module.exports = router;
