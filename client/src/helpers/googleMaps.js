import axios from 'axios'

export const searchForLocation = async (searchString) => {
    console.log(searchString)
    let searchUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${searchString}&inputtype=textquery&fields=photos,formatted_address,name,geometry&key=AIzaSyBxCMjPDnG_3eFruZmjdoXVY9NaTHEakFY`
    return axios.get(searchUrl)
}