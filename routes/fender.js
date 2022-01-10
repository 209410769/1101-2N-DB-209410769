var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('finalproj_69/fender_69', {
    title: 'Express',
    name: 'YanBo Lin',
    id: `209410769`,
  });
});

module.exports = router;
