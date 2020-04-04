const express = require('express');
const router = express.Router();
const authController = require('../../controllers/auth');
const { checkSchema } = require('express-validator');
const requestValidation = require('../../middlewares/requestValidation');

router.post('/init', checkSchema({
    pnr: {
        errorMessage: 'Invalid personal number',
        isLength: {
            options: {
                min: 12,
                max: 12
            }
        }
    }
}), requestValidation.checkValidationResult, authController.initBankIdLogin);

router.get('/status', authController.getLoginStatus);
router.get('/token', authController.getAuthToken);

module.exports = router;
