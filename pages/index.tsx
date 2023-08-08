import Posts from '../components/Posts'
import Head from 'next/head'
import PostBanner from "@/components/Posts/PostBanner";
import {useQuery} from 'react-query'
import {getAllArticles} from '@/services/Articles'
export default function Home() {
    const { data, isLoading, isError } = useQuery('Articles', getAllArticles);
    console.log(data)
  return (
    <>
      <Head>
        <title>
          Conduit | Posts
        </title>
      </Head>
      <PostBanner/>
      <Posts/>
    </>
  )
}
