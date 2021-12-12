var express = require('express');
var router = express.Router();
// s
/* GET home page. */
router.get('/overview_69', function(req, res, next){
  res.render('midterm_69/overview_69', {
    title: 'Express',
    name: 'YanBo Lin',
    id: `209410769`,
  });
});

module.exports = router;
