import styled from 'styled-components';
import CountrySearchContainer from './CountrySearch';

const StyledCountrySearchContainer = styled(CountrySearchContainer)`
  display: flex;
  flex-direction: column;
  padding: 2.4rem 1.6rem;
  width: 100%;

  @media (min-width: 746px) {
    padding: 2.4rem 4rem;
  }

  @media (min-width: 1440px) {
    padding: 2.4rem 8rem;
  }

  @media (min-width: 1600px) {
    padding: 2.4rem 5%;
  }

  @media (min-width: 650px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin: 4.8rem 0;
  }
`;

export default StyledCountrySearchContainer;
