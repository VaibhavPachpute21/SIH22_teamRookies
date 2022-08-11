import axios from 'axios'

export async function RegisterUser(data){
    const request = await axios.post('/register',data)
    .then(response => response.data)

    return{
        type:"user_register",
        payload:request
    }

}
