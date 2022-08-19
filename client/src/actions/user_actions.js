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


export async function UserInfo(id){
    const request = await axios.get(`http://localhost:3001/api/user/get-user/${id}`)
    .then(response => response.data)
    return{
        type:"user_info",
        payload:request
    }
}


export async function UpdateUser(id,data){
    const request = await axios.post(`http://localhost:3001/api/user/update/${id}`,data)
    .then(response => response.data)
    return{
        type:"user_update",
        payload:request
    }
}

export async function GetMyGrievances(id,role,institute){
    const request = await axios.get(`http://localhost:3001/api/officer/mygrievances/${id}/${role}/${institute}`)
    .then(response=>response.data)
    return{
        type:"my_grievances",
        payload:request
    }
}

export async function SendReply(data,gid,rid){
    const request = await axios.post(`http://localhost:3001/api/forwards/send-reply/${gid}/${rid}`,data)
    .then(response=>response.data)
    return{
        type:"user_send_reply",
        payload:request
    }
}