import { combineReducers } from "redux";
import users from './user_reducer'
import grievance from './grievance_reducer'
import uniadmin from './uni_admin_reducer'
import institute from './institute_reducer'
import superadmin from './superadmin_reducer'
import region from './regional_reducer'
const rootReducer = combineReducers({
    users,
    grievance,
    uniadmin,
    institute,
    superadmin,
    region
})  

export default rootReducer