const express = require('express');
// const bcrypt = require('bcrypt');
// const token = require('../auth/token');

const router = express.Router();
// const DB = require('./routes-models')

// const { authenticate } = require('../auth/authenticate');




router.get('/', (req, res) =>{
    res.status(200).json('Server is online')
})



module.exports = router;