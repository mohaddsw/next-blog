import axios from '../plugins/axios'
import {AxiosResponse} from "axios";

export interface Article {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: string[];
    createdAt: string;
    updatedAt: string;
    favorited: boolean;
    favoritesCount: number;
    author: {
        username: string;
        bio: string | null;
        image: string;
        following: boolean;
    };
}

interface ApiResponse {
    data: {
        articles: Article[];
        articlesCount:number;

    };
}
export const getAllArticles=async(): Promise<AxiosResponse<ApiResponse>> =>{
    const response =await axios.get<ApiResponse>('/articles')
    return response.data;
}