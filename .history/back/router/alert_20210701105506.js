const router = require('express').Router();

let Alert = require('../models/alert-models');

//show 
router.route('/').get((req,res)=>{
    Alert.find()
        .then(alerts=>res.json(alerts))
        .catch(err=>res.status(400).json('Error: ' +err));
});

