import {Box, Text} from "@mantine/core";

const PostBanner=()=>{
    return(
        <Box
            sx={(theme) => ({
                backgroundColor: theme.colors.pink[0],
                textAlign: 'center',
                padding: theme.spacing.xl,
                borderRadius: theme.radius.md,
            })}
        >
           <Text weight={900} size={30} color='pink'>conduit</Text>
            <Text size={15} color='pink'>A place to share your knowledge.</Text>
        </Box>
    )
}
export default PostBanner