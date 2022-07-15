const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
const port = process.env.PORT || 5000;


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//cors
app.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Controll-Allow-Credentials", true)
    next();
});


app.use('/api/images', require('./routes/imageRoutes'))

app.listen( port, ()=>{
    console.log(`Server Listening on ${port}`);
})