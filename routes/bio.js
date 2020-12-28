var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('artist/bio', {title: 'Sarai Nieves-Coleman'});
});

module.exports = router;