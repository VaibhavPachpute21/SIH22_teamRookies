import axios from "axios";

export async function CreateFeedback(data){
    const request = await axios.post('http://localhost:3001/api/feedback/send-feedback',data)
    .then(response=>response.data)
    return {
        type:"send_feedback",
        payload:request
    }
}

export async function GetHelpfulOfficers(id){
    const request = await axios.get(`http://localhost:3001/api/feedback/forwarded-officers/${id}`)
    .then(response=>response.data)
    return {
        type:"helpful_officers",
        payload:request
    }
}