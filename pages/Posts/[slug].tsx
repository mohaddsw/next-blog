import {useRouter} from "next/router";
const SinglePost=()=>{
    const router=useRouter()
    console.log(router)
    return <div>single post</div>
}
export default SinglePost