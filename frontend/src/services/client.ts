import axios from "axios";

export const client = axios.create({
    baseURL: import.meta.env.SERVER_URL || 'http://localhost:5000'
})