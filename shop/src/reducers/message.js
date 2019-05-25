import * as Message from './../constant/Message';
import * as Types from './../constant/ActionTypes';
var initialState=Message.MSG_WELCOME;
const message=(state=initialState,action)=>{
    switch(action.type){
        case Types.CHANGE_MESSAGE:
            return action.message;
        default: return state;
    }
}
export default message;