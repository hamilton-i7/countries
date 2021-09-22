import styled from 'styled-components';
import NotFound from './NotFound';

export const StyledNotFound = styled(NotFound)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  min-width: 100%;
  padding: 6rem 0;

  & > img {
    max-width: 95.2rem;
    width: 100%;
  }

  & > div {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & > div > h1 {
    font-size: 4rem;
    font-weight: 800;

    & > span:first-child {
      display: block;
    }

    & > span:last-of-type {
      color: #858585;
    }
  }

  & > div > a {
    margin-top: 3.2rem;
  }
`;
