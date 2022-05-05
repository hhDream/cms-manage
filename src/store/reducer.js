import { combineReducers } from "redux";
import userReducer from './user/reducer'
import sysReducer from './sys/reducer'
const reducer =  combineReducers({
    user:userReducer,
    sys:sysReducer
})
export default  reducer;