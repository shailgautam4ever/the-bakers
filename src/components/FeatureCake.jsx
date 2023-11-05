import { styled } from "styled-components";
import Card from "./Card";
import { Flex } from "../styled/common";
import { Heading } from "./Navbar/LocationModal";

const FeatureCake = () => {
  const featureCakeData = [
    {
      name: "Regular Cakes",
      url: "/assets/cakeImages/RegCake.webp",
    },
    {
      name: "Gourmet Cakes",
      url: "/assets/cakeImages/GC.webp",
    },
    {
      name: "Fruit Cakes",
      url: "/assets/cakeImages/fruitCake.webp",
    },
    {
      name: "Theme Cakes",
      url: "/assets/cakeImages/Theme.webp",
    },
  ];
  return (
    <FeatureCakeContainer>
      <Heading>Surprise Your Loved One</Heading>
      <CardList>
        {featureCakeData.map((v, i) => (
          <Card image={v.url} name={v.name} key={i} />
        ))}
      </CardList>
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
