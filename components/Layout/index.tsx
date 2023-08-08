import Header from './Header'
import Footer from './Footer'
import {FC, ReactNode} from "react";
import {Container} from "@mantine/core";

type LayoutProps={
    children:ReactNode
}
const Layout:FC<LayoutProps>=(props)=> {
    return (
        <>
        <Header/>
            <main >
               <Container>
                   {props.children}
               </Container>
            </main>
            <Footer/>
        </>

    );
}
export default  Layout