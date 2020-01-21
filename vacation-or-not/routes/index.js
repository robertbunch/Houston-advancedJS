var express = require('express');
var router = express.Router();
const db = require('../utiltities/db');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Express' });
});

router.post('/submit-new-location', upload.single('file'), (req, res)=>{

  const file = req.file;
  const originalName = file.originalname;
  const path = file.path
  const desintation = file.destination;
  const finalFilePath = desintation+Date.now()+originalName;
  fs.rename(path,finalFilePath,(err)=>{
    if(err)throw err;
    
  })
  res.json(finalFilePath);
});

// router.get('/users', function(req, res, next) {
  // res.json({ title: '/users page!' });
  // i need some peice of data in this File...
//   next();
// });


module.exports = router;
