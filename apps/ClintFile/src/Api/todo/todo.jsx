import axios from "axios";

const backendBaseUrl = 'http://localhost:8080';

export const createTodo = async (ownerId, title, checkList, dueDate, priority, status) => {
    try {
        const token = window.localStorage.getItem("token");
        console.log("token",token)
        const reqPayload = { title, checkList, dueDate, priority, status };
        const reqUrl = `${backendBaseUrl}/dashboard/addTodo`;
        const response = await axios.post(reqUrl, reqPayload, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};