const express = require("express");
const router = express.Router();
const db = require('../db/conn.js');
const Book = require("../models/book.js");

router
    .route('/')
    .get(async(req, res) => {
        let result = await Book.find().limit(10);
        res.status(200).send(result);
    })
    .post(async(req, res) => {
        let result = await Book.findOne().sort({entry_id: -1});
        if(result){
            req.body.entry_id = result.entry_id + 1;
        }else{
            req.body.entry_id = 0;
        };
        await Book.create(req.body);
        res.send("BOOK ADDED");
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