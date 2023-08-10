import axios from '../plugins/axios'
import {AxiosResponse} from "axios";

export const getAllArticles=async():Promise<AxiosResponse>=>{
    return await axios({
        method:'GET',
        url:'/articles'
    })
}