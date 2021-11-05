const router = require('express').Router();

const {userControllers: {getUserById, createUser}} = require('../controllers');
const {userMiddleware: {userIdMiddleware, userValidMiddleware, userEmailMiddleware}} = require('../middlewares');

router.post('/signup', userValidMiddleware, userEmailMiddleware, createUser);

router.get('/info:user_id', userIdMiddleware, getUserById);

module.exports = router;
