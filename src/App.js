import styled from "styled-components";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContentManager from "./components/ContentManager";
import Swiper from "./components/Swiper";
import SwiperSlider from "./components/Swiper";


const App = () => {
  return (
    <>
      <MainContainer>
        <Navbar/>
        <ContentManager/>
        <Footer/>
      </MainContainer>
    </>
  );
};

export default App;

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

`;
