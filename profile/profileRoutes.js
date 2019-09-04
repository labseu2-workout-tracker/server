const router = require('express').Router();
const checkLoggedIn = require('../middlewares/restrictedMiddleware');
const { validateUserInput } = require('./profileHelper');
const profileControllers = require('./profileControllers');

router.get('/', checkLoggedIn, profileControllers.getOne);

router.put(
  '/',
  checkLoggedIn,
  validateUserInput,
  profileControllers.updateProfile,
);

module.exports = router;
