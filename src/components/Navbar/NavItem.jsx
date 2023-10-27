import { styled } from "styled-components";
import { Col, Flex } from "../../styled/common";

const NavItem = ({
  title,
  menu = [
    "Chocolate Cake",
    "Black Forest Cake",
    "strawberry Cake",
    "Red Velvet cake",
    "Chocolate Cake",
    "Black Forest Cake",
    "strawberry Cake",
    "Red Velvet cake",
  ],
}) => {
  return (
    <NavItemConatiner>
      <MenuItem>{title}</MenuItem>
      
      <MenuWrapper className="menu">

        <SubMenuWrapper>
          {menu.map((item, i) => (
            <SubMenuItem>{item}</SubMenuItem>
          ))}
        </SubMenuWrapper>
        <Flex jc="flex-end" ai="flex-start">
          <img
            src="https://bkmedia.bakingo.com/sq-choco-truffle-cake0005choc-AA_0.jpg?tr=h-320,w-320"
            width={100}
            alt="no image"
          ></img>
          <img
            src="https://bkmedia.bakingo.com/viscous-blueberry-cheesecake-cake2859blue-A.jpg?tr=h-320,w-320"
            width={100}
            alt="no image found"
          ></img>
        </Flex>
      </MenuWrapper>
    </NavItemConatiner>
  );
};

export default NavItem;

const NavItemConatiner = styled.div`
  position: relative;
  background-color: white;
  padding: 5px 10px;
  box-sizing: border-box;

  /* &:hover{
    .menu {
      display: flex;
    }
  } */

  &:hover {
    /* border-bottom: 8px solid pink; */

    .menu {
      display: flex;
    }
  }

`;

const MenuItem = styled.span`
  box-sizing: border-box;

     /* &:hover {
    border-bottom: 8px solid pink;

    .menu {
      display: flex;
    }
  } */
`

const MenuWrapper = styled.div`
  display: none;
  /* display: flex; */

  background-color: white;

  /* flex-direction: column; */
  position: absolute;
  z-index: 2;
  height: 250px;
  width: 600px;
  flex: 1;
  padding: 10px;
  top: 34px;

  img {
    width: 30%;
  }
`;

const SubMenuItem = styled.span`
  border-radius: 12px;
  padding: 10px;
`;
const SubMenuWrapper = styled(Col)`
  align-items: flex-start;
  flex-wrap: wrap;
`;
