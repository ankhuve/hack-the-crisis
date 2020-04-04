const models = require('../models');
const config = require('../config/config');
const jwt = require('jsonwebtoken');
const uuid = require('uuid');

const AuthService = class AuthService {
    constructor() {
        const env = process.env.NODE_ENV || 'development';
        this.secretKey = config[env].jwtSecret;
    }

    createUserAuthToken(userId, firstName, lastName) {
        return jwt.sign({
            userClaims: {
                userId: userId,
                firstName: firstName,
                lastName: lastName
            }
        }, this.secretKey, {
            expiresIn: '7d',
            issuer: 'quarma.se',
            jwtid: uuid.v4()
        });
    }

    async getCodeChallengeMethodId(codeChallengeMethod) {
        const res = await models.CodeChallengeMethod.findOne({where: {method: codeChallengeMethod}});
        return res.id;
    }
}

module.exports = new AuthService();
