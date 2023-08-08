import Header from './Header'
import Footer from './Footer'
import {FC, ReactNode} from "react";
import {Container, Grid} from "@mantine/core";

type LayoutProps={
    children:ReactNode
}
const Layout:FC<LayoutProps>=(props)=> {
    return (
        <>
        <Header/>
            <Container>
            <Grid>
                <Grid.Col md={9}>
                    <main >
                            {props.children}
                    </main>
                </Grid.Col>
                <Grid.Col md={3}>
                    tags
                </Grid.Col>
            </Grid>
            </Container>
            <Footer/>
        </>

    );
}
export default  Layout