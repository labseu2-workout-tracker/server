const router = require('express').Router();
const checkLoggedIn = require('../middlewares/restrictedMiddleware');
const profileControllers = require('./profileControllers');

router.get('/', checkLoggedIn, profileControllers.getOne);

module.exports = router;
