import { combineReducers } from "redux";
import users from './user_reducer'
import grievance from './grievance_reducer'

const rootReducer = combineReducers({
    users,
    grievance
})  

export default rootReducer