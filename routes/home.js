var express = require('express');
var router = express.Router();
const artCtrl =require('../controllers/arts')

/* GET home page. */
router.get('/', artCtrl.index);

module.exports = router;
