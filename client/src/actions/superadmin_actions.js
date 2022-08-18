import axios from 'axios'

export async function GetTopThrees(){
    const request = await axios.get('http://localhost:3001/api/superadmin/get-top-three')
    .then(response => response.data)

    return{
        type:"top_threes",
        payload:request
    }
}


export async function GetSolvedGrievances(){
    const request = await axios.get('http://localhost:3001/api/superadmin/get-solved-grievances')
    .then(response => response.data)

    return{
        type:"solved_grievances",
        payload:request
    }
}