import { styled } from "styled-components";
import Card from "./Card";
import { Flex } from "../styled/common";
import { Heading } from "./Navbar/LocationModal";
import axios from "../service/axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { getImage } from "../helper/image";

const FeatureCake = () => {
  const [featureCake, setFeatureCake] = useState([]);
  const [load, setLoad] = useState(true);
  // const urlString = "http://localhost:8080/";

  useEffect(() => {
    fetchCake();
  }, []);

  const fetchCake = async () => {
    setLoad(true);
    const { data } = await axios.get("feature-cake");
    setLoad(false);

    setFeatureCake(data.mock);
  };

  return (
    <FeatureCakeContainer>
      <Heading>Surprise Your Loved One</Heading>
      {load ? (
        <Loading />
      ) : (
        <CardList>
          {featureCake.map((v, i) => (
            <Card image={getImage(v.url)} name={v.name} key={i} />
          ))}
        </CardList>
      )}
    </FeatureCakeContainer>
  );
};

export default FeatureCake;

const FeatureCakeContainer = styled.div`
  /* background-color: aqua; */
  /* width: 90%; */
  display: flex;
  flex-direction: column;
  padding: 0rem 4rem;

  span:first-child {
    padding-left: 4rem;
    margin: 20px 0px;
    font-size: 33px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: #251d34;
    text-transform: capitalize;
    /* background-color: cyan; */
  }
`;

const CardList = styled(Flex)`
  padding: 10px;
  justify-content: center;
`;
