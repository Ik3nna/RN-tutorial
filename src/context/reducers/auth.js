import { REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from "../../constants/actionTypes";

export default function Auth (state, action) {
    switch (action.type) {
        case REGISTER_LOADING:
            return {
                ...state, loading: true
            };

        case REGISTER_SUCCESS:
            return {
                ...state, loading: false, data: action.payload
            };

        case REGISTER_FAIL:
            return {
                ...state, loading: false, error: action.payload
            };
        default:
            return state;
    }
}