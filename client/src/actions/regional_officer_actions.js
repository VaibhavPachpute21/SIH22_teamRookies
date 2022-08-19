import axios from 'axios'

export async function GetRegionGrievances(region){
    const request = await axios.get(`http://localhost:3001/api/regional/get_all_region_grievances/${region}`)
    .then(response=>response.data)
    return{
        type:"get_region_grievances",
        payload:request
    }

}

export async function SendReply(data,gid,rid){
    const request = await axios.post(`http://localhost:3001/api/forwards/send-reply/${gid}/${rid}`,data)
    .then(response=>response.data)
    return{
        type:"regional_send_reply",
        payload:request
    }
}