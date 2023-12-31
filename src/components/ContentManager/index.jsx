import { styled } from "styled-components";
import Swiper from "../Swiper";
import { Route, Routes } from "react-router";
import Footer from "../Footer";
import Home from "../../pages/home";
import Cakes from "../../pages/cakes";

const ContentManager = ()=>{
    return (
        <Container>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/cakes" element={<Cakes/>} ></Route>
            </Routes>
            
        </Container>
        
    )
}

export default ContentManager;

const Container = styled.div`
    flex: 1;
    background-color: white;
`