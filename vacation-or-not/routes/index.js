var express = require('express');
var router = express.Router();
const db = require('../utiltities/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Express' });
});

// router.get('/users', function(req, res, next) {
  // res.json({ title: '/users page!' });
  // i need some peice of data in this File...
//   next();
// });


module.exports = router;
