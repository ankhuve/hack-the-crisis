const express = require('express');
const router = express.Router();
const models = require('../models');
const jwtRequired = require('../middlewares/jwtRequired');

router.get('/', jwtRequired, (req, res, next) => {
  models.User.findAll().then(users => {
    res.json(users);
  }).catch(err => {
    next(err);
  });
});

module.exports = router;
