import axios, {AxiosInstance} from 'axios'

const axiosInstance: AxiosInstance = axios.create({
    timeout: 60000,
    baseURL: '/'
});
axiosInstance.defaults.withCredentials = true
axiosInstance.interceptors.response.use(
    res => {
        if (res.data.code === 200) {
            return res.data
        } else {
            return res.data
        }
    },
    error => {
        return Promise.reject(error.data)
    }
)
export default axiosInstance
