import { styled } from "styled-components";
import Card from "../components/Card";
import { cake } from "../mockdata/cake";
import { Heading } from "../components/Navbar/LocationModal";
import { Col, Flex } from "../styled/common";

const Cakes = () => {
  return (
    <CakeContainer>
      <HeadContainer>
        <Heading>Order Fresh Baked Cakes</Heading>
      </HeadContainer>
      <CakeList>
      {cake.map((v, i) => (
        <Card image={v.url} key={i}></Card>
      ))}
      </CakeList>
    </CakeContainer>
  );
};

export default Cakes;

const CakeContainer = styled(Col)`
  /* background-color: yellow; */
  padding: 2rem;
`;
const HeadContainer = styled.div`
  /* background-color: pink; */
`;

const CakeList = styled(Flex)`
    /* background-color:skyblue; */
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem 2rem;
    gap: 3rem;
`;
