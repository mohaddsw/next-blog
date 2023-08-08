import {Button, Container, Flex, Grid, Text} from "@mantine/core";
import Link from "next/link";

const Header=()=>{
    return(
        <Container>
            <Grid>
                <Grid.Col md={4}>
                    <Flex className='justify-start items-center'>
                        <Text weight={600} className='flex justify-start items-center p-2'> Conduit</Text>
                    </Flex>
                </Grid.Col>
                <Grid.Col md={8}>
                    <Flex className='justify-end'>
                        <Button variant="subtle" radius="xs" size="xs">
                            <Link href='/'>Home</Link>
                        </Button>
                        <Button variant="subtle" radius="xs" size="xs">
                        <Link href='/register'>Register</Link>
                        </Button>
                        <Button variant="subtle" radius="xs" size="xs">
                        <Link href='/login'>Login</Link>
                        </Button>
                    </Flex>
                </Grid.Col>

            </Grid>
        </Container>
    )
}
export default Header