import * as types from './../constants/ActionType';
import * as Message from './../constants/Message';

var initialState = Message.MSG_WELLCOM;

const message = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            state = action.message;
            return state;
        default:
            return state;
    }
}

export default message;