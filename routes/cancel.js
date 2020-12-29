var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('artist/cancel', {title: 'Checkout Canceled'});
});

module.exports = router;