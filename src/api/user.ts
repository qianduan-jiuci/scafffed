import {http} from "~plugin/axios";
import {AxiosRequestConfig} from "axios";

export const info = async () => {
    return await http.request<Info>({
        url: '/get'
    } as AxiosRequestConfig) as ResponseResult<Info>
}

export const login = async () => {
    return await http.request<Login>({
        url: '/login',
        method: 'post'
    } as AxiosRequestConfig) as ResponseResult<Login>
}