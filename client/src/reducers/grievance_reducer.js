export default function grievance_reducer(state={},action){
    switch (action.type) {
        case "create_grievance":
            return {...state,grievanceData:action.payload}

        case "get_forwards":
            return {...state,grievanceData:action.payload}
        
        default:
            return state
    }
}