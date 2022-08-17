import axios from 'axios'

export async function CreateInstitute(data) {
    const request = await axios.post('http://localhost:3001/api/institute/create-intitute',data)
    .then(response=>response.data)
    return {
        type:"create_institute",
        payload:request
    }
}