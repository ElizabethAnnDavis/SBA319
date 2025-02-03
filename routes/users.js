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
        try{
            let result = await User.findOne().sort({user_id: -1});
            if(result){
                req.body.user_id = result.user_id + 1;
            }else{
                req.body.user_id = 0;
            };
            await User.create(req.body);
            res.send("USER CREATED");
        }catch(err){
            if(err.name === "ValidationError"){
                return res.status(400).send(err.message);
            };
        };
    });

router
    .route('/:id')
    .get(async(req, res) => {
        const query = await User.findOne({user_id: req.params.id});
        if(query){
            res.status(200).send(query);
        }else{
            res.send(`User with id: ${req.params.id} not found.`);
        };
    })
    .patch(async(req, res) => {
        try{
            const query = await User.findOne({user_id: req.params.id});
            if(query){
                await User.findOneAndUpdate(query, req.body);
                res.send(req.body);
            }else{
                res.send(`User with id: ${req.params.id} not found.`);
            };
        }catch(err){
            if(err.name === "ValidationError"){
                return res.status(400).send(err.message);
            };
        };
    })
    .delete(async(req, res) => {
        const query = await User.findOne({user_id: req.params.id});
        if(query){
            await User.findOneAndDelete(query, req.body);
            res.send(`USER ${req.params.id} DELETED`);
        }else{
            res.send(`User with id: ${req.params.id} not found.`);
        };
    });


module.exports = router;