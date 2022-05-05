
import sysData from './state';
import { copyJson } from '../../utils/index';

const reducer = (state=sysData,action)=>{
    let newState = copyJson(state);
    switch (action.type) {
        case 'changeSysData':
            newState = action.value;
            break;
    
        default:
            break;
    }
    return newState;
}

export default reducer;