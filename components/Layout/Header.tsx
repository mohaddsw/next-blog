import {Button, Container, Flex, Grid, Text} from "@mantine/core";
import Link from "next/link";

const Header=()=>{
    return(
        <Container>
            <Grid>
                <Grid.Col md={4}>
                    <Flex className='justify-start items-center'>
                        <Text color='pink' size={17} weight={600} className='flex justify-start items-center p-2'> Conduit</Text>
                    </Flex>
                </Grid.Col>
                <Grid.Col md={8}>
                    <Flex className='justify-end'>
                        <Button color='pink' variant="subtle" radius="xs" size="xs">
                            <Link href='/'>Home</Link>
                        </Button>
                        <Button color='pink' variant="subtle" radius="xs" size="xs">
                        <Link href='/register'>Register</Link>
                        </Button>
                        <Button color='pink' variant="subtle" radius="xs" size="xs">
                        <Link href='/login'>Login</Link>
                        </Button>
                        <Button color='pink' variant="subtle" radius="xs" size="xs">
                        <Link href='/echarts'>echarts</Link>
                        </Button>
                        <Button color='pink' variant="subtle" radius="xs" size="xs">
                        <Link href='/showmore'>showmore</Link>
                        </Button>
                    </Flex>
                </Grid.Col>

            </Grid>
        </Container>
    )
}
export default Header