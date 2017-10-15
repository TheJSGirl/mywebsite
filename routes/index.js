const express = require('express')
const mainRoute= express.Router();
// const admin = require('./admin');
const register = require('./register');
const login = require('./login');
const admin = require('./admin');
const messages = require('./messages');
const {checkAuth} = require('../middlewares');

// mainRoute.use('/admin', checkAuth, admin);
// mainRoute.use('/register', register);
mainRoute.use('/messages', messages);
mainRoute.use('/login', login);
mainRoute.use('/admin', admin);


module.exports = mainRoute;