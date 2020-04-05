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


router.get('/', jwtRequired, checkSchema({
    unassigned: {
        optional: {},
        isBoolean: {
            errorMessage: 'Unassigned must be boolean value'
        }
    },
    nearLocation: {
        optional: {},
        custom: {
            options: (value, {req, location, path}) => {
                const latLong = value.split(',');
                if (latLong.length !== 2) {
                    return false;
                }
                const latitude = parseFloat(latLong[0]);
                const longitude = parseFloat(latLong[1]);

                return true;
            }
        }
    },
    radius: {
        optional: {}
    }
}), requestValidation.checkValidationResult, errandsController.getErrands);

router.get('/categories', errandsController.getCategories);

router.get('/:id', jwtRequired, checkSchema({
    id: {
        exists: {
            errorMessage: 'Missing errand id'
        }
    }
}), requestValidation.checkValidationResult, errandsController.getErrand);

router.post('/:id/assign', jwtRequired, checkSchema({
    id: {
        exists: {
            errorMessage: 'Missing errand id'
        }
    }
}), requestValidation.checkValidationResult, errandsController.assignErrand);

module.exports = router;