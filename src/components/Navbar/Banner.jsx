import { styled } from "styled-components";
import { Flex } from "../../styled/common";
import Modal from "../Modal";
import NavItem from "./NavItem";
import { hover } from "@testing-library/user-event/dist/hover";

const Banner = () => {
  const menu = ["cake", "party"];
  const item = [
    "Category",
    "Flavours",
    "Kid Cakes",
    "Trending Cakes",
    "Desserts",
    "Designer cakes",
    "Birthday",
    "Anniversary",
    "Occasions",
  ];
// const item = ["Flavour"]
  return (
    <>
      <BannerContainer>
        {
            item.map((item,i)=> <NavItem key= {i} title={item} /> 
            )
        }
      </BannerContainer>
    </>
  );
};

export default Banner;

const BannerContainer = styled(Flex)`
  /* background-color:red; */
  box-sizing:border-box;
  justify-content: center;
  padding: 0.5rem 0rem;
  border: 2px solid #f1f1f1;
  gap: 3rem;
  box-shadow: 0px 2px 4px 2px #f1f1f1;
  span {
    /* width: 5rem */
    font-weight: 500;
  }
  @media screen and (max-width: 1200px) {
    gap: 2rem;
  }
  @media screen and (max-width: 850px) {
    font-size: 12px;
    gap: 1rem;
  }
`;
