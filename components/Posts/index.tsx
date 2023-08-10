import {Card, Flex, Loader, Pagination, Tabs} from '@mantine/core';
import {  IconMessageCircle } from '@tabler/icons-react';
import {useQuery} from "react-query";
import {getAllArticles} from "@/services/Articles";
import {Article} from '@/services/Articles'
import PostCard from "@/components/Posts/PostCard";
import {useState} from "react";


const Posts=()=>{
    const [activePage, setPage] = useState(1);
    const { data, isLoading,  } = useQuery('Articles', getAllArticles);
    const length=data?.articlesCount/10
    return(
         <Card>
             <Tabs color="pink" defaultValue="AllPosts">
                 <Tabs.List>
                     <Tabs.Tab value="AllPosts" icon={<IconMessageCircle size="0.8rem" />}>All Posts</Tabs.Tab>
                 </Tabs.List>

                 <Tabs.Panel value="AllPosts" pt="xs">
                     {
                         isLoading? <Flex className="justify-center p-2"> <Loader color="pink" /></Flex>:
                             data?.articles.map((article: Article)=>{
                                 return <PostCard key={article.slug} article={article}/>
                             })

                     }
                 </Tabs.Panel>

             </Tabs>
             <Flex className="justify-center">
                 <Pagination className="mb-5" total={length} color="pink" size="xs" radius="xs" withEdges value={activePage} onChange={setPage} />
             </Flex>
         </Card>
        );

}
export default Posts