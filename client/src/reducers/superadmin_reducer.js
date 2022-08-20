export default function superadmin_reducer(state={},action){
    switch (action.type) {
        case "top_threes":
            return {...state,superData:action.payload}
        
        case "solved_grievances":
            return {...state,superData:action.payload}

        case "send_appree":
            return {...state,superData:action.payload}

        default:
            return state
    }
}