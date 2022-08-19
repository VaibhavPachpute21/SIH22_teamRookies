import axios from 'axios'

export async function GetRegionGrievances(region){
    const request = await axios.get(`http://localhost:3001/api/regional/get_all_region_grievances/${region}`)
    .then(response=>response.data)
    return{
        type:"get_region_grievances",
        payload:request
    }

}