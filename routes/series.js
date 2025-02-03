const express = require('express');
const router = express.Router();
const db = require('../db/conn.js');
const Series = require('../models/series.js');

router
    .route('/')
    .get(async(req, res) => {
        let result = await Series.find().limit(10);
        res.status(200).send(result);
    })
    .post(async(req, res) => {
        try{
            let result = await Series.findOne().sort({entry_id: -1});
            if(result){
                req.body.entry_id = result.entry_id + 1;
            }else{
                req.body.entry_id = 0;
            };
            await Series.create(req.body);
            res.send("SERIES ADDED");
        }catch(err){
            if (err.name === "ValidationError") {
                if (err.errors && err.errors.books) {
                    return res.status(400).send(err.errors.books.message);
                };
                return res.status(400).send(err.message);
            };
            res.status(500).send("Internal Server Error");
        };
    });

router
    .route('/:id')
    .get(async(req, res) => {
        const query = await Series.findOne({entry_id: req.params.id});
        if(query){
            res.status(200).send(query);
        }else{
            res.send(`Series with id: ${req.params.id} not found.`);
        };
    })
    .patch(async(req, res) => {
        try{
            const query = await Series.findOne({entry_id: req.params.id});
            if(query){
                await Series.findOneAndUpdate(
                    { entry_id: req.params.id },
                    req.body,
                    { new: true }
                );
                res.send(req.body);
            }else{
                res.send(`Series with id: ${req.params.id} not found.`);
            };
        }catch(err){
            if (err.name === "ValidationError") {
                if (err.errors && err.errors.books) {
                    return res.status(400).send(err.errors.books.message);
                };
                return res.status(400).send(err.message);
            };
            res.status(500).send("Internal Server Error");
        };
    })
    .delete(async(req, res) => {
        const query = await Series.findOne({entry_id: req.params.id});
        if(query){
            await Series.findOneAndDelete(query, req.body);
            res.send(`SERIES ${req.params.id} DELETED`);
        }else{
            res.send(`Series with id: ${req.params.id} not found.`);
        };
    });


module.exports = router;