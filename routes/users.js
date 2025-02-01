const express = require("express");
const router = express.Router();
const db = require('../db/conn.js');
const User = require("../models/user.js");

router
    .route('/')
    .get(async(req, res) => {

    })
    .post(async(req, res) => {
        await User.create(req.body);
        res.send("USER CREATED");
    });
    

module.exports = router;