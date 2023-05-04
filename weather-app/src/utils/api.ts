import axios from "axios";
import {API_URL} from '@env';
export const weatherAPI = axios.create({
    baseURL: "https://api.hgbrasil.com",
    timeout: 10000
})