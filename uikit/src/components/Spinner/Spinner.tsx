import React from "react";
import styled, { keyframes } from "styled-components";
import OgeeIcon from "./OgeeIcon";
import { SpinnerProps } from "./types";

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(10px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const Container = styled.div`
  position: relative;
`;

const FloatingOgeeIcon = styled(OgeeIcon)`
  position: absolute;
  top: 30px;
  left: 23px;
  animation: ${float} 3s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 96 }) => {
  return (
    <Container>
      <FloatingOgeeIcon width={`${size * 0.75}px`} />
    </Container>
  );
};

export default Spinner;
