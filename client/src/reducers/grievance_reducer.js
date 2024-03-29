export default function grievance_reducer(state={},action){
    switch (action.type) {
        case "create_grievance":
            return {...state,grievanceData:action.payload}

        case "get_forwards":
            return {...state,grievanceData:action.payload}
        
        case "get_grievances":
            return {...state,grievanceData:action.payload}
        
        case "satisfied_grievance":
            return {...state,satisfiedGrievance:action.payload}

        case "get_dashboard_data":
            return {...state,grievanceData:action.payload}

        case "unsatisfied_with_reply":
            return {...state,grievanceData:action.payload}

        default:
            return state
    }
}