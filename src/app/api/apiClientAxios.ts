import axios from "axios";

export const apiClient = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
    // baseURL: `http://192.168.0.100:4000`,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials : true,
});

