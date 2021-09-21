import styled, { keyframes } from 'styled-components';
import Shimmer from './Shimmer';

const loading = keyframes`
  0% {
    transform: translateX(-150%);
  }

  50% {
    transform: translateX(-60%);
  }

  100% {
    transform: translateX(150%);
  }
`;

export const StyledShimmer = styled(Shimmer)`
  animation: ${loading} 2.5s infinite;
  animation-delay: ${props => props.delay || 0};
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;

  & > div {
    background: linear-gradient(90deg, #ddd, rgba(255, 255, 255, 0.74), #ddd);
    height: 100%;
    transform: skewX(-20deg);
    width: 50%;
  }
`;
