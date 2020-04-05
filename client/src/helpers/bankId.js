import axios from 'axios'
import { baseUrl } from '../config/apiConfig'

export const bankIdInit = async (data) => {
    try {
        const response = await axios.post(`${baseUrl}/auth/bankid/init`, data);
    } catch (error) {
        console.log(error);
    }
}

export const sendLocation = async (data) => {
    try {
        const response = await axios.post(`${baseUrl}/auth/bankid/init`, data);
    } catch (error) {
        console.log(error);
    }
}

