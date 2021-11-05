const router = require('express').Router();

const {authController: {signinUser, logoutUser}} = require('../controllers');
const {authMiddleware: {isAuthMiddleware, isLoginValid, isPasswordsMatched, checkAccessToken}} = require('../middlewares');

router.post('/signin', isAuthMiddleware, isLoginValid, isPasswordsMatched, signinUser);
router.post('/logout', checkAccessToken, logoutUser);

module.exports = router;
