'use strict';

const models = require('../models');
const authService = require('../services/auth');
const bankIdClient = require('../clients/bankid');

module.exports = {
    async initBankIdLogin(req, res, next) {
        const pnr = req.body.pnr;
        const bankIdInitResponse = await bankIdClient.init(pnr);
        const orderRef = bankIdInitResponse.orderRef;

        models.BankIdLoginOrder.create({
            orderRef: orderRef
        }).then(() => {
            res.json({
                'orderRef': orderRef
            })
        }).catch(next);
    },

    async getLoginStatus(req, res, next) {
        const orderRef = req.query.orderRef;
        const status = await bankIdClient.collect(orderRef);
        res.json(status);
    },

    async getAuthToken(req, res, next) {
        const orderRef = req.query.orderRef;
        const completionData = await bankIdClient.getCompletionData(orderRef);

        let user = await models.User.findOne({where: {pnr: completionData.user.personalNumber}});

        if (!user) {
            user = await models.User.create({
                pnr: completionData.user.personalNumber,
                firstName: completionData.user.givenName,
                lastName: completionData.user.surname
            });
        }

        const authToken = authService.createUserAuthToken(user.id, user.firstName, user.lastName)
        res.json({token: authToken});
    }
}