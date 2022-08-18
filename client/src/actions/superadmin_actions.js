import axios from 'axios'

export async function GetTopThrees(){
    const request = await axios.get('http://localhost:3001/api/superadmin/get-top-three')
    .then(response => response.data)

    return{
        type:"top_threes",
        payload:request
    }
}