const express = require('express');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Health Check
 *   description: Health check endpoints
 */

/**
 * @swagger
 * /ping:
 *   get:
 *     tags: [Health Check]
 *     description: Ping endpoint
 *     responses:
 *       200:
 *         description: pong
 */
router.get('/', (req, res, next) => {
    res.send('pong');
});

module.exports = router;