import Swiper from "../components/Swiper";
import { styled } from "styled-components";
import { Suspense, lazy } from "react";
import Loading from "../components/Loading";

const FeatureCake = lazy(() => import("../components/FeatureCake"));

const Home = () => {
  return (
    <>
      <Swiper />
      <Line />
      <Suspense fallback={<Loading />}>
        <FeatureCake />
      </Suspense>
    </>
  );
};

export default Home;

const Line = styled.hr`
  /* width: 365px; */
  width: 90%;
  margin-top: 30px;
  height: 1px;
  background-color: #eee;
  color: #eee;
  border: none;
`;
