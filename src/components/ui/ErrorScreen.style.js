import styled from 'styled-components';
import ErrorScreen from './ErrorScreen';

export const StyledErrorScreen = styled(ErrorScreen)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 5%;

  & h1 {
    font-size: 2.4rem;
    margin-top: 4.8rem;
    text-align: center;
  }

  & img {
    max-width: 95.2rem;
  }
`;
