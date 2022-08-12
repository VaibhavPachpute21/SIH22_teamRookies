import axios from 'axios'


export async function AddGrievance(data){
    const request = await axios.post('http://localhost:3001/api/grievance/make-grievance',data)
    .then(response => response.data)

    return{
        type:"create_grievance",
        payload:request
    }
}

export async function GetForwards(id){
    const request = await axios.get(`http://localhost:3001/api/forwards/get-forwards/${id}`)
    .then(response=>response.data)
    
    return{
        type:"get_forwards",
        payload:request
    }
}