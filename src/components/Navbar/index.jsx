import { styled } from "styled-components";
import { Col, Flex, Input } from "../../styled/common";
import { FiSearch } from "react-icons/fi";
import { BiSolidUser } from "react-icons/bi";
import { BsCart4, BsChevronDown } from "react-icons/bs";
import { AiOutlineBranches } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { PiCakeFill } from "react-icons/pi";
import { RiCake3Line } from "react-icons/ri";
import Banner from "./Banner";
import { useState } from "react";
import Modal from "../Modal";
import LocationModal from "./LocationModal";

const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  const toggleModal = ()=>{
      setToggle((curr)=> !curr )
  }
  return (
    <>
      <Nav>
        <Flex>
          <Flex>
            {/* <RiCake3Line size={50}/> */}
            <img src="/cupcake.png" width={60}></img>
            <span>Bakers</span>
          </Flex>
          <Location onClick={toggleModal}>
            <FaLocationArrow />
            <span>Select City</span>
            <BsChevronDown />
          </Location>
        </Flex>
        <SearchBar>
          <FiSearch size={20} color="grey" />
          <Input placeholder="Seach For Cake"></Input>
        </SearchBar>
        <Flex>
          <Col>
            <AiOutlineBranches size={25} />
            <span>Track order</span>
          </Col>
          <Col>
            <BsCart4 size={25} />
            <span>Cart</span>
          </Col>
          <Col>
            <BiSolidUser size={25} />
            <span>Sign in</span>
          </Col>
        </Flex>
      </Nav>
      <Banner />
      <LocationModal open={toggle} onCancel={toggleModal}/>
    </>
  );
};

export default Navbar;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 2rem;
`;

const SearchBar = styled.div`
  display: flex;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #f1f1f1;
  align-items: center;
`;
const Location = styled(Flex)`
  gap: 8px;
  align-items: center;
  cursor: pointer;
`;
