import axiosInstance from "../../helpers/axioxInterceptor";
import { REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from "../../constants/actionTypes/index"

export default({
    email,
    password,
    userName,
    firstName: first_name,
    lastName: last_name
}) => dispatch => {
    dispatch({
        type: REGISTER_LOADING,
    })
    axiosInstance.post("auth/register", {
        email,
        password,
        userName,
        first_name,
        last_name
    }).then(res=>{
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    }).catch(err => {
        dispatch({
            type: REGISTER_FAIL,
            payload: err.response ? err.response.data : { error: "Something went wrong" }
        })
    })
}