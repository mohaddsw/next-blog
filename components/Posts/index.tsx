import { Tabs } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
const Posts=()=>{
    return(



            <Tabs color="pink" defaultValue="AllPosts">
                <Tabs.List>
                    <Tabs.Tab value="AllPosts" icon={<IconMessageCircle size="0.8rem" />}>All Posts</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="AllPosts" pt="xs">
                    Messages tab content
                </Tabs.Panel>

            </Tabs>
        );

}
export default Posts