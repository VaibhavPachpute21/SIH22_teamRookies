export default function uni_admin_reducer(state={},action){
    switch (action.type) {
        case "create_officer":
            return {...state,uniadminData:action.payload}

        default:
            return state
    }
}