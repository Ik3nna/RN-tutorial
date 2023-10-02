import { REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS, CLEAR_AUTH_STATE, LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAIL } from "../../constants/actionTypes";

export default function Auth (state, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state, loading: false, data: action.payload, isLoggedIn: true
            };
    
        case REGISTER_LOADING:
        case LOGIN_LOADING:
            return {
                ...state, loading: true
            };

        case REGISTER_SUCCESS:
            return {
                ...state, loading: false, data: action.payload
            };

        case REGISTER_FAIL:
        case LOGIN_FAIL:
            return {
                ...state, loading: false, error: action.payload
            };

        case CLEAR_AUTH_STATE:
            return {
                ...state, data: null, error: null
            }
        default:
            return state;
    }
}