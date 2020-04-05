const express = require('express');
const router = express.Router();
const errandsController = require('../controllers/errands');
const { checkSchema } = require('express-validator');
const requestValidation = require('../middlewares/requestValidation');
const jwtRequired = require('../middlewares/jwtRequired');

/**
 * @swagger
 * tags:
 *   name: Errands
 *   description: Errands endpoints
 */

/**
 * @swagger
 * definitions:
 *   errand:
 *     properties:
 *       errandId:
 *         type: integer
 *       description:
 *         type: string
 *       requestedBy:
 *         type: object
 *         properties:
 *           userId:
 *             type: integer
 *           firstName:
 *             type: string
 *           lastName:
 *             type: string
 *       category:
 *         type: object
 *         properties:
 *           categoryId:
 *             type: integer
 *           categoryName:
 *             type: string
 *       latitude:
 *         type: number
 *       longitude:
 *         type: number
 */

/**
 * @swagger
 * /auth/bankid/init:
 *   post:
 *     tags: [Errands]
 *     description: Create errand
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         schema:
 *           type: object
 *           properties:
 *             description:
 *               type: string
 *             categoryId:
 *               type: integer
 *             latitude:
 *               type: number
 *             longitude:
 *               type: number
 *     responses:
 *       200:
 *         schema:
 *           type: object
 *           $ref: '#/definitions/errand'
 */
router.post('/', jwtRequired, checkSchema({
    description: {
        exists: {
            errorMessage: 'Missing description'
        }
    },
    categoryId: {
        exists: {
            errorMessage: 'Missing categoryId'
        }
    },
    latitude: {
        exists: {
            errorMessage: 'Missing latitude'
        }
    },
    latitude: {
        exists: {
            errorMessage: 'Missing longitude'
        }
    },
}), requestValidation.checkValidationResult, errandsController.createErrand);

router.get('/:id', jwtRequired, checkSchema({
    id: {
        exists: {
            errorMessage: 'Missing errand id'
        }
    }
}), requestValidation.checkValidationResult, errandsController.getErrand);

module.exports = router;