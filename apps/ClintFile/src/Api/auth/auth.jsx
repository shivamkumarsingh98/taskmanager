import axios from 'axios'
import {toast } from 'react-toastify';
const backendBaseUrl = "http://localhost:8080"



export const register = async (name, email, password, confirmPassword) => {
    try {
        const reqPayload = { name, email, password, confirmPassword };
        const reqUrl = `${backendBaseUrl}/auth/register`;
        console.log("Request URL:", reqUrl); 
        const response = await axios.post(reqUrl, reqPayload); 
        console.log("Response2:", response);

        console.log("response.data",response.data); 
        if (response.data.error && response.data.error.message) {
            // If the backend returns an error message
            toast.error(response.data.error.message); 
        } else {
            toast.success("Registration successful!");
            localStorage.setItem("name", response.data.name);
        }
    } catch (error) {
        toast.error("register error", error);
    }
};

export const login = async (email, password) => {
    try {
        const reqPayload = { email, password }; 
        const reqUrl = `${backendBaseUrl}/auth/login`; 
        const response = await axios.post(reqUrl, reqPayload); 
        localStorage.setItem("token", response.data.token);
    } catch (error) {
        console.log("login error", error.message);
    }
};