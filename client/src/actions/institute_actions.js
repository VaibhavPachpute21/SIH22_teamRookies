import axios from 'axios'

export async function CreateInstitute(data) {
    const request = await axios.post('http://localhost:3001/api/institute/create-intitute',data)
    .then(response=>response.data)
    return {
        type:"create_institute",
        payload:request
    }
}

export async function GetInstituteData(institutename){
    const request = await axios.get(`http://localhost:3001/api/institute/get-institute-data/${institutename}`)
    .then(response=>response.data)
    return{
        type:"get_institute",
        payload:request
    }
}
