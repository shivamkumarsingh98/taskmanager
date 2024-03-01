import axios from 'axios'

const backendBaseUrl = "http://localhost:8080"

const notify = () => toast("Registration successful!");


export const register = async(name,email,password,confirmPassword)=>{
    try{
        const reqPaylode = {name,email,password,confirmPassword}
        const reqUrl = `${backendBaseUrl}/auth/register`
        const response = await axios.post(reqUrl,reqPaylode)
        console.log(response.body)
        localStorage.setItem("name", response.data.name)
        notify()
    }catch(error){
        console.log("register error",error)
    }
}

export const login = async(email , password) =>{
    try{
        const reqPaylode = {email,password}
        const reqUrl = `${backendBaseUrl}/auth/Login`
        const response = await axios.post(reqUrl,reqPaylode)
        localStorage.setItem("token",response.data.token)

    }catch(error){
        console.log("login error",error.message)
    }
}