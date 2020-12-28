var express = require('express');
var router = express.Router();
const galleryCtrl = require('../controllers/gallery')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', galleryCtrl.index);

module.exports = router;
