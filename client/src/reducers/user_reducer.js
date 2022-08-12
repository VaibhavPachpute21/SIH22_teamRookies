export default function user_reducer(state={},action){
    switch (action.type) {
        case "user_register":
            return {...state,userData:action.payload}
        
        case "user_login":
            return {...state,userData:action.payload}

        default:
            return state
    }
}