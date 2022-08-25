import axios from 'axios';
export async function CreateReginalAdmin(data){
    const request  = await axios.post('http://localhost:3001/api/regionaladmin/create-regional-admin',data)
    .then(response => response.data)
    return {
        type:"create-regional-admin",
        payload:request
    }
}