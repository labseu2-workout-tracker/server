const express = require('express');
const usersControllers = require('./usersControllers');
const router = express.Router();

router.post('/signup', usersControllers.signup);

router.post('/login', usersControllers.login);

module.exports = router;
