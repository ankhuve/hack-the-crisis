'use strict';

const models = require('../models');

exports.createErrand = function(req, res, next) {
    const userId = req.user.claims.userId;
    const description = req.body.description;
    const categoryId = req.body.categoryId;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;

    models.Errand.create({
        description: description,
        requestedBy: userId,
        categoryId: categoryId,
        latitude: latitude,
        longitude: longitude
    }).then(errand => {
        getErrandById(errand.id).then(response => {
            res.json(response);
        }).catch(next);
    }).catch(next);
}

exports.getErrand = function(req, res, next) {
    const errandId = req.params.id;
    getErrandById(errandId).then(errand => res.json(errand)).catch(next);
}

const getErrandById = function(errandId) {
    return models.Errand.findOne({
        where: {
            id: errandId
        },
        include: ['category', 'user']
    }).then(res => {
        return {
            errandId: res.id,
            description: res.description,
            requestedBy: {
                userId: res.user.id,
                firstName: res.user.firstName,
                lastName: res.user.lastName
            },
            category: {
                categoryId: res.category.id,
                categoryName: res.category.displayName
            },
            latitude: res.latitude,
            longitude: res.longitude
        }
    });
}
