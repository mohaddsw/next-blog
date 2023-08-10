import {Article} from '@/services/Articles'
import {FC} from "react";
import {Avatar, Badge, Box, Button, Card, Flex, Grid, Text} from "@mantine/core";
import Link from 'next/link'
type PostCardProps={
    article:Article
}
const PostCard:FC<PostCardProps>=(props)=>{
    return <Link href={`/Posts/${props.article.slug}`}>
        <Box
            sx={(theme) => ({
                backgroundColor: theme.colors.pink[0],
                padding: theme.spacing.xs,
                borderRadius: theme.radius.md,
                marginBottom:theme.spacing.xs
            })}>
            <Grid>
                <Grid.Col md={6}>
                    <Flex className=" items-center">
                        <Avatar src={props.article.author.image} alt={props.article.author.username} />
                        <Text className="pl-2 " size={12} weight={600} color='pink'>{props.article.author.username}</Text>
                    </Flex>
                </Grid.Col>
                <Grid.Col md={6} className="flex justify-end">
                    <Button variant="outline" color="pink" radius="xs" size="xs">
                        {props.article.favoritesCount}
                    </Button>
                </Grid.Col>
            </Grid>
            <Text size={15} weight={600} color='pink'>{props.article.title}</Text>
            <Text size={10}>{props.article.body}</Text>
            <Flex>
                {
                    props.article.tagList.map(tag=>{
                        return(<Badge className="mr-1" key={tag} color="pink" variant="outline">{tag}</Badge>)
                    })
                }
            </Flex>
        </Box>
    </Link>

}
export default PostCard