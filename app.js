const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

require('dotenv').config();

const {Config: {MONGO_CONNECT_URL, PORT}} = require('./constants');
const {authRouter, userRouter} = require('./router');
const {ErrorsStatus: {status500}} = require('./errorsCustom');

const app = express();

mongoose.connect(MONGO_CONNECT_URL);

app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRouter);
app.use('/auth', authRouter);
app.use('*', (err, req, res, next) => {
    res
        .status(err.status || status500)
        .json({
            msg: err.message
        });
});

app.listen(PORT, () => {
    console.log(`App listen ${PORT}`);
});
