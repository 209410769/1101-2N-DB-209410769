var express = require('express');
var router = express.Router();
const apiCrown2Controller_69 = require('../controllers/midproj_69/apiCrown2Controller_69');
const { getProductsByCategory } = require('../controllers/crown_69/serviceCrown2Controller_69');

/* crown_69 */
router.get('/category_69', apiCrown2Controller_69.getCategories);
router.get('/shop_69',apiCrown2Controller_69.getShop);
router.get('/shop_69/:category',apiCrown2Controller_69.getProductsByCategory);
/* midProj_69 */

/* finalProj_69 */

module.exports = router;
