import { GET_CONTACTS_SUCCESS, GET_CONTACTS_LOADING, GET_CONTACTS_FAIL } from "../../constants/actionTypes";

export default function Contacts (state, action) {
    switch (action.type) {
        case GET_CONTACTS_LOADING:
            return {
                ...state,
                getContacts: {
                    ...state.getContacts, loading: true, error: null
                }
            };

        case GET_CONTACTS_SUCCESS:
            return {
                ...state,
                getContacts: {
                    ...state.getContacts, loading: false, data: payload, error: null
                }
            };

        case GET_CONTACTS_FAIL:
            return {
                ...state,
                getContacts: {
                    ...state.getContacts, loading: false, error: "failed"
                }
            };

        default:
            return state;
    }
}