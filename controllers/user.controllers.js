const {User} = require('../dataBase');
const {passwordService} = require('../service');
const userUtil = require('../util/user.util');
const {ErrorsStatus: {status201}} = require('../errorsCustom');

module.exports = {
    getUserById: async (req, res, next) => {
        try {
            const {ourUser} = req;

            res.json(ourUser);
        } catch (e) {
            next(e);
        }
    },

    createUser: async (req, res, next) => {
        try {
            const {body, body: {password}} = req;

            const hashedPassword = await passwordService.hash(password);
            const newUser = await User.create({...body, password: hashedPassword});

            const normalizedUser = userUtil.userNormalizer(newUser.toObject());

            res
                .json(normalizedUser)
                .sendStatus(status201);
        } catch (e) {
            next(e);
        }
    }
};
