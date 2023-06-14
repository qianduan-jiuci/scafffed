import {http} from "~plugin/axios";
import {AxiosRequestConfig} from "axios";

export const uploadFileApi = async (data:string) => {
	console.log(data);
	return await http.request<Info>({
		url: '/test/client',
		method: 'post',
		data: data
	} as AxiosRequestConfig) as ResponseResult<Info>
}
