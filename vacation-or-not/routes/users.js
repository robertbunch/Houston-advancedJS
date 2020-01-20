var express = require('express');
var router = express.Router();

// EVERY ROUTE IN THIS FILE HAS /users IN FRONT OF IT
// BECAUSE... app.js has app.use('/users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
