const express = require('express');
const { BASE_URI } = require('./const');
const urlRouter = require('./routes/urlRouter');
const codeRouter = require('./routes/codeRouter');
const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');

const app = express();

app.use(express.json());

app.use(`${BASE_URI}/url`, urlRouter);
app.use(`${BASE_URI}/code`, codeRouter);
app.use(`${BASE_URI}/user`, userRouter);
app.use(`${BASE_URI}/login`, loginRouter);

module.exports = app;
