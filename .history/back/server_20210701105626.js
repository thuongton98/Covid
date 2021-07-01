const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

var bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//connect to mongodb
mongoose
    .connect(
        db,
        {
            useNewUrlParser: true,
            useCreateIndex:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        }
    )
    .then(()=> console.log('connected mongodb'))
    .catch(err => console.log(err));



//router
const alertRouter = require('./router/alert')
app.use('/alert',alertRouter)

app.listen(port, ()=>{
    console.log(`Server running on port : ${port}`)
});