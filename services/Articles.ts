import axios from '../plugins/axios'
import {AxiosResponse} from "axios";
import type {ApiResponse} from "@/types/articles";


export const getAllArticles=async(): Promise<AxiosResponse<ApiResponse>> =>{
    const response =await axios.get<ApiResponse>('/articles')
    return response.data.articles;
}