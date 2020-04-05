const express = require('express');
const router = express.Router();
const authController = require('../../controllers/auth');
const { checkSchema } = require('express-validator');
const requestValidation = require('../../middlewares/requestValidation');

/**
 * @swagger
 * tags:
 *   name: BankID
 *   description: BankID auth endpoints
 */

/**
 * @swagger
 * definitions:
 *   bankIdLoginOrder:
 *     required:
 *       - username
 *       - password
 *     properties:
 *       orderRef:
 *         type: string
 */

/**
 * @swagger
 * /auth/bankid/init:
 *   post:
 *     tags: [BankID]
 *     description: Init BankID login
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         schema:
 *           type: object
 *           required:
 *             - pnr
 *           properties:
 *             pnr:
 *               type: string
 *               description: Swedish personal number (12 digits)
 *     responses:
 *       200:
 *         description: orderRef
 *         schema:
 *           type: object
 *           $ref: '#/definitions/bankIdLoginOrder'
 */
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

// TODO: Add documentation
router.get('/status', authController.getLoginStatus);

// TODO: Add documentation
router.get('/token', authController.getAuthToken);

module.exports = router;