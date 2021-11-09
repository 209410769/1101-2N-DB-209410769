var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    name: 'Yanbo Lin',
    id: '209410769',
  });
});

module.exports = router;
