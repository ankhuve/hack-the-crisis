'use strict';

const models = require('../models');
const Op = models.Sequelize.Op;

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
        getErrandById(errand.id, req, res, next);
    }).catch(next);
}

exports.getErrand = function(req, res, next) {
    const errandId = req.params.id;
    getErrandById(errandId, req, res, next);
}

exports.assignErrand = function(req, res, next) {
    const errandId = req.params.id;
    const helperId = req.user.claims.userId;

    models.Errand.findOne({where: {id: errandId}}).then(errand => {
        if (!errand) {
            res.status(404);
            res.json({'message': 'Failed to find errand with id ' + errandId});
            return;
        }
        
        if (errand.requestedBy === helperId) {
            res.status(400);
            res.json({'message': 'Can\'t assign own errand'});
            return;
        }

        if (errand.helper !== null) {
            res.status(400);
            res.json({'message': 'Errand already assigned'});
            return;
        }

        errand.update({
            helper: helperId
        }).then(errand => {
            getErrandById(errand.id, req, res, next);
        })
    }).catch(next);
}

exports.getCategories = function(req, res, next) {
    models.ErrandCategory.findAll().then(result => {
        res.json(result);
    })
}

exports.getErrands = function(req, res, next) {
    const unassigned = req.query.unassigned;
    const nearLocation = req.query.nearLocation;
    const radius = req.query.radius || 1000;

    let filters = {};

    if (unassigned !== null && unassigned !== undefined) {
        const unassignedBool = (unassigned === 'true' || unassigned === '1');
        if (unassignedBool) {
            filters['helper'] = {
                [Op.eq]: null
            };
        } else {
            filters['helper'] = {
                [Op.ne]: null
            };
        }
    }

    if (nearLocation) {
        const longLatStr = nearLocation.split(',');
        const longitude = parseFloat(longLatStr[0]);
        const latitude = parseFloat(longLatStr[1]);
        const earthRadius = 6378 * 1000;

        const maxLatitude  = latitude + (radius / earthRadius) * (180 / Math.PI);
        const minLatitude  = latitude - (radius / earthRadius) * (180 / Math.PI);
        const maxLongitude = longitude + (radius / earthRadius) * (180 / Math.PI) / Math.cos(latitude * Math.PI/180);
        const minLongitude = longitude - (radius / earthRadius) * (180 / Math.PI) / Math.cos(latitude * Math.PI/180);
        
        filters['latitude'] = {
            [Op.gte]: minLatitude,
            [Op.lte]: maxLatitude
        }

        filters['longitude'] = {
            [Op.gte]: minLongitude,
            [Op.lte]: maxLongitude
        }
    }

    models.Errand.findAll({
        where: filters
    }).then(errands => {
        res.json(errands);
    }).catch(next);
}

const getErrandById = function(errandId, req, res, next) {
    return models.Errand.findOne({
        where: {
            id: errandId
        },
        include: ['category', 'requestUser', 'helperUser']
    }).then(result => {
        if (!result) {
            res.status(404);
            res.json({'message': 'Failed to find errand with id ' + errandId});
            return;
        }

        res.json({
            errandId: result.id,
            description: result.description,
            requestedBy: {
                userId: result.requestUser.id,
                firstName: result.requestUser.firstName,
                lastName: result.requestUser.lastName
            },
            helpedBy: result.helperUser && {
                userId: result.helperUser.id,
                firstName: result.helperUser.firstName,
                lastName: result.helperUser.lastName
            } || null,
            category: {
                categoryId: result.category.id,
                categoryName: result.category.displayName
            },
            latitude: result.latitude,
            longitude: result.longitude
        });
    }).catch(next);
}
