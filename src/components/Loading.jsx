import styled from "styled-components";
import { CardContainer } from "./Card";
import { Flex } from "../styled/common";

const Loading = () => {
  return (
    <Flex>
      {Array.from({ length: 5 }).map(() => (
        <Shimmer></Shimmer>
      ))}
    </Flex>
  );
};

export default Loading;

const Shimmer = styled(CardContainer)`
  height: 280px;
  background-color: #e2dede;
  -webkit-mask: linear-gradient(-60deg, #000 30%, #0005, #000 70%) right/300%
    100%;
  animation: shimmer 2.5s infinite;
  @keyframes shimmer {
    100% {
      -webkit-mask-position: left;
    }
  }
`;
