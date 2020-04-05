const express = require('express');
const router = express.Router();
const mapsController = require('../controllers/maps');

router.get('/', mapsController.getMapSuggestions);

module.exports = router;