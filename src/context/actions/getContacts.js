import axiosInstance from "../../helpers/axioxInterceptor";
import { 
    GET_CONTACTS_FAIL, 
    GET_CONTACTS_LOADING, 
    GET_CONTACTS_SUCCESS 
} from "../../constants/actionTypes/index"

export default () =>dispatch=> {
    dispatch({
        type: GET_CONTACTS_LOADING
    });

    axiosInstance.get("contacts").then(res=>{
        dispatch({
            type: GET_CONTACTS_SUCCESS,
            payload: res.data,
        })
    }).catch(err=>{
        dispatch({
            type: GET_CONTACTS_FAIL,
            payload: err.response ? err.response.data : { error: "Something went wrong" }
        })
    })
}