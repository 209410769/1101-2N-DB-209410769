var express = require('express');
var router = express.Router();
const apiCrown2Controller_69 = require('../controllers/apiCrown2Controller_69');

/* crown_69 */
router.get('/category_69', apiCrown2Controller_69.getCategories);
router.get('/shop_69', apiCrown2Controller_69.getShop);
router.get('/shop_69/:category', apiCrown2Controller_69.getProductsByCategory);


/* midproj_69 */

/* finalproj_69 */

module.exports = router;
