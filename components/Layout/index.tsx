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
                    <main >
                            {props.children}
                    </main>
            </Container>
            <Footer/>
        </>

    );
}
export default  Layout