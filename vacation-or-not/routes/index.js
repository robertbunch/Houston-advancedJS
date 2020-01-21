var express = require('express');
var router = express.Router();
const db = require('../utiltities/db');
const multer  = require('multer')
const upload = multer({ dest: 'public/uploads/' })
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
  const filePathForDb = finalFilePath.slice(6)
  fs.rename(path,finalFilePath,(err)=>{
    if(err)throw err;
  })

  const locationName = req.body.newLocation;

  const insertQuery = `INSERT INTO locations
  (location_name, location_url)
  VALUES
  ($1,$2)`
  db.query(insertQuery,[locationName,filePathForDb])

  res.json(finalFilePath);
});

// router.get('/users', function(req, res, next) {
  // res.json({ title: '/users page!' });
  // i need some peice of data in this File...
//   next();
// });

router.get('/get-pics',async(req, res)=>{
  const getDataQ = `SELECT * FROM locations`;
  const results = await db.manyOrNone(getDataQ);
  res.json(results);
});


module.exports = router;
