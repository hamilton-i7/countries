import styled from 'styled-components';
import NoCountries from './NoCountries';

const StyledNoCountries = styled(NoCountries)`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-bottom: 6rem;

  & > img {
    display: block;
    max-width: 100rem;
    width: 100%;
  }

  & > h2 {
    font-size: 2rem;
    margin-top: 1.6rem;
  }
`;

export default StyledNoCountries;
