import { combineReducers } from "redux";
import users from './user_reducer'
import grievance from './grievance_reducer'
import uniadmin from './uni_admin_reducer'

const rootReducer = combineReducers({
    users,
    grievance,
    uniadmin
})  

export default rootReducer