import Swiper from "../components/Swiper"
import FeatureCake from "../components/FeatureCake";
import { styled } from "styled-components";

const Home = ()=>{
    return(<>
        <Swiper/>
        <Line/>
        <FeatureCake/>
        </>

    )
}

export default Home;

const Line = styled.hr`
    /* width: 365px; */
    width: 90%;
    margin-top: 30px;
    height: 1px;
    background-color: #eee;
    color: #eee;
    border: none;
`