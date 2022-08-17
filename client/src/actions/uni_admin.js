import axios from 'axios'


export async function CreateOfficer(data){
    const request = await axios.post('http://localhost:3001/api/uniadmin/Create-Officer',data)
    .then(response=>response.data)
    
    return{
        type:"create_officer",
        payload:request
    }
}