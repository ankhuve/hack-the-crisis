'use strict';
const axios = require('axios');

exports.getMapSuggestions= function(req, res, next) {
    const searchString = req.query.searchString;
    const searchUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${searchString}&inputtype=textquery&fields=photos,formatted_address,name,geometry&key=AIzaSyBxCMjPDnG_3eFruZmjdoXVY9NaTHEakFY`
    axios.get(searchUrl)
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            res.json(error);
        });
}