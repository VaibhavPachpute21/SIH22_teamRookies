export default function regional_reducers(state={},action){
    switch (action.type) {
        case "get_region_grievances":
            return {...state,regionData:action.payload}

        default:
            return state
    }
}