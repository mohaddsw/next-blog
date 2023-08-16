import {Card, Flex, Loader, Pagination, Tabs} from '@mantine/core';
import {  IconMessageCircle } from '@tabler/icons-react';
import {useQuery} from "react-query";
import {getAllArticles} from "@/services/Articles";
import type {Article} from '@/types/articles'
import PostCard from "@/components/Posts/PostCard";


const Posts=()=>{
    const { data, isLoading,  } = useQuery('Articles', getAllArticles, {
        select: (res) => res.data.data.articles,
    });
    return(
         <Card className="mb-5">
             <Tabs color="pink" defaultValue="AllPosts">
                 <Tabs.List>
                     <Tabs.Tab value="AllPosts" icon={<IconMessageCircle size="0.8rem" />}>All Posts</Tabs.Tab>
                 </Tabs.List>

                 <Tabs.Panel value="AllPosts" pt="xs">
                     {
                         isLoading? <Flex className="justify-center p-2"> <Loader color="pink" /></Flex>:
                             data?.map((article: Article)=>{
                                 return <PostCard key={article.slug} article={article}/>
                             })

                     }
                 </Tabs.Panel>

             </Tabs>
         </Card>
        );

}
export default Posts