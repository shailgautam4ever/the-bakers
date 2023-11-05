import { styled } from "styled-components";
import { otherCities, popularCities } from "../../mockdata/locations";
import Modal from "../Modal";
import { Col, Flex } from "../../styled/common";

const LocationModal = ({ open, onCancel }) => {
  return (
    <Modal open={open} onCancel={onCancel}>
      <LocationModalContainer>
        <Heading>Select City</Heading>
        <span>And Get Your Cake Delivered in 2 Hours</span>

        <Popular>
          <SectionHeading>
            <hr />
            <span>Popular Cities</span>
            <hr />
          </SectionHeading>
          <Flex>
            {popularCities.map((city, i) => (
              <PopularItem key={i}>
                <img width={90} src={city.icon}></img>
                <span>{city.name}</span>
              </PopularItem>
            ))}
          </Flex>
        </Popular>
        <Popular>
          <SectionHeading>
            <hr />
            <span>Other Cities</span>
            <hr />
          </SectionHeading>
          <CityList wrap>
            {otherCities.map((city, i) => (
              <span className="city-item" key={city}>
                {city}
              </span>
            ))}
          </CityList>
        </Popular>
      </LocationModalContainer>
    </Modal>
  );
};

export default LocationModal;

const LocationModalContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
`;
export const Heading = styled.span`
  font-size: 30px;
`;
const Popular = styled(Col)`
  gap: 1rem;
  margin-top: 1rem;
  /* background-color: pink; */
  .city-item {
    width: 7rem;
  }
`;

const SectionHeading = styled.div`
  /* background-color: pink; */
  display: flex;
  gap: 2.5rem;
  align-items: center;

  & > span {
    color: grey;
    font-size: 1.4rem;
  }

  hr {
    width: 365px;
    margin-top: 10px;
    height: 3px;
    background-color: #eee;
    color: #eee;
    border: none;
  }
  @media screen and (max-width: 850px) {
    hr {
        width: 200px;
    }
  }
  @media screen and (max-width: 1200px) {
    hr {
        width: 300px;
    }
  }
`;

const CityList = styled(Flex)`
  padding-left: 15px;
  span {
    /* background-color: red; */
    width: 100px;
  }
`;

const PopularItem = styled(Col)`
  padding: 20px;
  transition: all 100ms 0s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 5px 2px #f1f1f1;
    border-radius: 10px;
    overflow: hidden;
    transform: scale(1.15);
  }
  @media screen and (max-width: 850px) {
    padding: 0px 5px;
  }
`;
