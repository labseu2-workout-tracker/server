const express = require('express');
const usersControllers = require('./usersControllers');
const { validateUser } = require('./usersHelper');

const router = express.Router();

router.get('/settings/:id', usersControllers.settings);

router.post('/signup', validateUser, usersControllers.signup);

router.post('/login', usersControllers.login);

module.exports = router;
