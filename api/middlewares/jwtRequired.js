const config = require('../config/config');
const jwt = require('express-jwt');
const env = process.env.NODE_ENV || 'development';
const secretKey = config[env].jwtSecret;

module.exports = jwt({secret: secretKey});
