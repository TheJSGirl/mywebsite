const express = require('express')
const mainRoute= express.Router();
// const admin = require('./admin');
const register = require('./register');
const login = require('./login');
const {checkAuth} = require('../middlewares');

// mainRoute.use('/admin', checkAuth, admin);
mainRoute.use('/register', register);
mainRoute.use('/login', login);


module.exports = mainRoute;