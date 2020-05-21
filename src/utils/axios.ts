import axios, {AxiosInstance} from 'axios'
import Toast from 'muse-ui-toast';

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
            Toast.success(res.data.code)
            return res.data
        }
    },
    error => {
        Toast.error(error.data.code)
        return Promise.reject(error.data)
    }
)
export default axiosInstance
