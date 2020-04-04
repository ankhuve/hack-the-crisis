const { validationResult } = require('express-validator');

exports.checkValidationResult = (req, res, next) => {
    const validationRes = validationResult(req);
    if (!validationRes.isEmpty()) {
        res.status(400);
        res.json({
            message: 'Invalid request',
            errors: validationRes.errors
        });
        return;
    }

    next();
};
