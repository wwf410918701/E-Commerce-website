import { userActionTypes } from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SIGN_IN_SUCCESS:
        case userActionTypes.SIGN_OUT_SUCCESS:
            return ({
                ...state,
                error: null,
                currentUser: action.payload
            })
        case userActionTypes.SIGN_IN_FAILURE:
        case userActionTypes.SIGN_UP_FAILURE:
        case userActionTypes.SIGN_OUT_FAILURE:
            return ({
                ...state,
                error: action.payload
            })
        default:
            return state;
    }
}

export default userReducer;