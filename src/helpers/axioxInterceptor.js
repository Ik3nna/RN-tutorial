import axios from "axios";
import envs from "../config/env";
import AsyncStorage from "@react-native-async-storage/async-storage";

let headers = {};

const instance = axios.create({
    baseURL: envs.DEV_BACKEND_URL,
    headers,
})

instance.interceptors.request.use(
    async (config)=>{
        const token = await AsyncStorage.getItem("tokens");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
    },
    (error)=>{
        return Promise.reject(error)
    },
)

export default instance;