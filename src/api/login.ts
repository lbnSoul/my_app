import axios from "@/utils/axios";

export const loginApi = (data: any): any => axios({
    url: '/login',
    method: 'POST',
    data,
});

export const registerApi = (data: any): any => axios({
    url: '/register',
    method: 'POST',
    data,
});
