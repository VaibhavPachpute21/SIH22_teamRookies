export default function feedback_reducer(state={},action){
    switch (action.type) {
        case "send_feedback":
            return {...state,feedbackData:action.payload}

        case "helpful_officers":
            return {...state,feedbackData:action.payload}

        default:
            return state
    }
}