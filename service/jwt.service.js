const jwt = require('jsonwebtoken');

const ErrorHandler = require('../errors/ErrorHandler');
const {Config: {JWT_ACCESS_SECRET, JWT_REFRESH_SECRET}, tokenTypeEnum: {ACCESS}} = require('../constants');
const {ErrorsMsg: {msgInvalidToken}, ErrorsStatus: {status401}} = require('../errorsCustom');

module.exports = {
    generateTokenPair: () => {
        const access_token = jwt.sign({}, 'xxx', {expiresIn: '10m'});
        const refresh_token = jwt.sign({}, 'zzz', {expiresIn: '30d'});

        return {
            access_token,
            refresh_token
        };
    },

    verifyToken: async (token, tokenType = ACCESS) => {
        try {
            const secret = tokenType === ACCESS ? JWT_ACCESS_SECRET : JWT_REFRESH_SECRET;

            await jwt.verify(token, secret);
        } catch (e) {
            throw new ErrorHandler(msgInvalidToken, status401);
        }
    }
};
