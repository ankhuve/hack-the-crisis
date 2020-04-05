import axios from 'axios'

export const searchForLocation = async (searchString) => {
    console.log(searchString)
    let searchUrl = `http://localhost:8080/maps?searchString=${searchString}`
    return axios.get(searchUrl, {
        headers: {'Access-Control-Allow-Origin': '*'}
    })
}