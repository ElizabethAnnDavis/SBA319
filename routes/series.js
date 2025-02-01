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
        await Series.create(req.body);
        res.send("SERIES ADDED");
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