import axios from "axios";
import type {AxiosRequestConfig} from "axios";

class Axios {
    private instance;
    constructor(config:AxiosRequestConfig) {
        this.instance = axios.create(config)
        this.interceptors()
    }

    public async request<T, D = ResponseResult<T>>(config:AxiosRequestConfig) {
        return (await this.instance.request<D>(config)).data
    }

    private interceptors() {
        this.requestInterceptors()
        this.responseInterceptors()
    }

    private requestInterceptors() {
        this.instance.interceptors.request.use(function (config) {
            return config;
        }, function (error) {
            return Promise.reject(error);
        });
    }

    private responseInterceptors() {
        this.instance.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            return Promise.reject(error);
        });
    }
}

export default Axios