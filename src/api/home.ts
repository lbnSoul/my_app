import axios from "@/utils/axios";

export const getHomeListApi = (data: any): any => axios({
    url: '/getList',
    method: 'POST',
    data,
});

export const uploadImgApi = (data: any): any => axios({
    url: '/create/upload',
    method: 'POST',
    headers : {
        'Content-Type': 'multipart/form-data'
    },
    data,
});

export const addLongTextApi = (data: any): any => axios({
    url: '/create/addLongText',
    method: 'POST',
    data,
});

export const addAlatsApi = (data: any): any => axios({
    url: '/create/addAlats',
    method: 'POST',
    data,
});

export const articleUnlockApi = (data: any): any => axios({
    url: '/unlock',
    method: 'POST',
    data,
});

export const getCardDetailApi = (data: any): any => axios({
    url: '/articleDetail',
    method: 'POST',
    data,
});

export const delArticleByIdApi = (data: any): any => axios({
    url: '/delArticleById',
    method: 'POST',
    data,
});
