import styled from "styled-components";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContentManager from "./components/ContentManager";
import Swiper from "./components/Swiper";
import SwiperSlider from "./components/Swiper";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <MainContainer>
          <Navbar />
          <ContentManager />
          <Footer />
        </MainContainer>
      </ErrorBoundary>
    </>
  );
};

export default App;

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
