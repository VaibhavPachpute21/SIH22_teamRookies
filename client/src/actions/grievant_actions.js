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

export async function GetAllGrievances(id){
    const request = await axios.get(`http://localhost:3001/api/grievance/get-grievances/${id}`)
    .then(response => response.data)

    return {
        type:"get_grievances",
        payload:request
    }
}

export async function SatisfiedWithReply(id,rid,fid){
    console.log(rid)
    const request = await axios.post(`http://localhost:3001/api/grievance/update-satisfied/${id}/${rid}/${fid}`,{})
    .then(response=>response.data)
    return {
        type:"satisfied_grievance",
        payload:request
    }
}


export async function GetDashboardData(){
    const request = await axios.get(`http://localhost:3001/api/grievance/get-dashboard-data`)
    .then(response=>response.data)
    return {
        type:"get_dashboard_data",
        payload:request
    }
}