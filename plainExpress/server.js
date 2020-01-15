// Express IS node.

const express = require('express');
const app = express();
const helmet = require('helmet');
app.use(helmet());

app.get('/',(req,res)=>{
    res.send("Test")
})

app.listen(8080);


// -------->Request comes in
// we need data from the submitted data --- req.body
// we need to make a db request 
// we need to add a variable to the response for PUG --- res.locals
// ----
// ---
// res.json
// <--------Response goes out
