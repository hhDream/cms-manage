import userState from './state';
import { copyJson } from '../../utils/index';
let reducer = (state=userState,action)=>{
    let newState = copyJson(state);
    switch (action.type) {
        case 'changeUserInfo':
            newState = action.value
            break;
    
        default:
            break;
    }
    return newState;
}

export default reducer;