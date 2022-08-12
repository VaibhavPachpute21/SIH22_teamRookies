import axios from 'axios'


export async function AddGrievance(data){
    const request = await axios.post('http://localhost:3001/api/grievance/make-grievance',data)
    .then(response => response.data)

    return{
        type:"create_grievance",
        payload:request
    }
}