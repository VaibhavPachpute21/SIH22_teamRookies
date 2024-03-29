export default function user_reducer(state={},action){
    switch (action.type) {
        case "user_register":
            return {...state,userData:action.payload}
        
        case "user_login":
            return {...state,userData:action.payload}
    
        case "user_info":
            return {...state,userData:action.payload}

        case "user_auth":
            return {...state,userData:action.payload}

        case "my_grievances":
            return {...state,userData:action.payload}
        
        case "user_send_reply":
            return {...state,userData:action.payload}

        case "toggle_leave":
            return {...state,userData:action.payload}
        
        case "toggle_leave_status":
            return {...state,userData:action.payload}

        default:
            return state
    }
}