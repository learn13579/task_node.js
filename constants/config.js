module.exports = {
    HOST_URL: process.env.HOST_URL || 'http://localhost:5000',
    PORT: process.env.PORT || 5000,

    MONGO_CONNECT_URL: process.env.MONGO_CONNECT_URL || 'mongodb://localhost:27017/MyBase',

    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || 'zzz',
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'xxx',
};
