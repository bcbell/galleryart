var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('artist/success', {title: ''});
});

module.exports = router;