import axios from '../plugins/axios'
import {AxiosResponse} from "axios";
import type {ApiResponse} from "@/types/articles";


export const getAllArticles=async(): Promise<AxiosResponse<ApiResponse>> => {
    return axios.get<ApiResponse>('/articles')
}