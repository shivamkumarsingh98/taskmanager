import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router'
const backendBaseUrl = "http://localhost:8080"

export const register = async (name, email, password, confirmPassword) => {
    try {
        const reqPayload = { name, email, password, confirmPassword };
        const reqUrl = `${backendBaseUrl}/auth/register`;
        console.log("Request URL:", reqUrl);
        const response = await axios.post(reqUrl, reqPayload);
        console.log("Response2:", response);

        console.log("response.data", response.data);
        if (response.data.error && response.data.error.message) {
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
        console.log("token",response.data.token)
        localStorage.setItem("token", response.data.token);
        toast.success("Login successful!")
    } catch (error) {
        console.log("login error", error.message);
    }
};

