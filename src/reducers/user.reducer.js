import {DELETE_TOKEN, USER_LOGIN, USER_PROFILE, USER_PUT_PROFILE} from "../actions/user.action";

const initialState = {
    "token": undefined,
    "user_infos": undefined,
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                token: action.payload
            }
        case DELETE_TOKEN:
            return {
                ...state,
                token: undefined
            }
        case USER_PROFILE: 
            return {
                ...state,
                user_infos: action.payload
            }
        case USER_PUT_PROFILE: 
            return {
                ...state,
                user_infos: {
                    ...state.user_infos,
                    firstName: action.payload.newProfile.firstName,
                    lastName: action.payload.newProfile.lastName
                },
            }
        default:
            return state;
    };
}
