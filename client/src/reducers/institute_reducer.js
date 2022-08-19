export default function institute_reducer(state={},action){
    switch (action.type) {
        case "create_institute":
            return {...state,inData:action.payload}

        case "get_institute":
            return {...state,inData:action.payload}
        default:
            return state
    }
}