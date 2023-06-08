import Axios from './axios.ts'

const http = new Axios({
    baseURL: import.meta.env.VITE_API_BASEURL,
    timeout: 100000,
    headers: {}
})

export {http}