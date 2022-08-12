import axios from 'axios'

export async function RegisterUser(data){
    const request = await axios.post('http://localhost:3001/api/user/register',data)
    .then(response => response.data)
    
    return{
        type:"user_register",
        payload:request
    }

}


export async function LoginUser(data){
    const request = await axios.post('http://localhost:3001/api/user/login',data)
    .then(response => response.data)
    console.log(request)
    return{
        type:"user_login",
        payload:request
    }

}
