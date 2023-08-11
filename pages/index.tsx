import Posts from '../components/Posts'
import Head from 'next/head'
import PostBanner from "@/components/Posts/PostBanner";

export default function Home() {

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
