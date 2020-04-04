const express = require('express');
const router = express.Router();
const authController = require('../../controllers/auth');

router.post('/init', authController.initBankIdLogin);
router.get('/status', authController.getLoginStatus);
router.get('/token', authController.getAuthToken);

module.exports = router;