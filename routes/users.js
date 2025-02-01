const express = require("express");
const router = express.Router();
const db = require('../db/conn.js');
const User = require("../models/user.js");

router
    .route('/')
    .get(async(req, res) => {
        let result = await User.find().limit(10);
        res.status(200).send(result);
    })
    .post(async(req, res) => {
        let result = await User.findOne().sort({user_id: -1});
        if(result){
            req.body.user_id = result.user_id + 1;
        }else{
            req.body.user_id = 0;
        };
        await User.create(req.body);
        res.send("USER CREATED");
    });

router
    .route('/:id')
    .get(async(req, res) => {
    
    })
    .patch(async(req, res) => {
    
    })
    .delete(async(req, res) => {
    
    });


module.exports = router;