const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', (req, res, next) => {
  models.User.findAll().then(users => {
    res.json(users);
  }).catch(err => {
    next();
  });
});

module.exports = router;
