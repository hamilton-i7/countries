import styled from 'styled-components';
import CountrySearchContainer from './CountrySearch';

const StyledCountrySearchContainer = styled(CountrySearchContainer)`
  display: flex;
  flex-direction: column;
  margin: 2.4rem 1.6rem;
  margin-bottom: 3.2rem;

  @media (min-width: 746px) {
    margin: 2.4rem 4rem;
    margin-bottom: 3.2rem;
  }

  @media (min-width: 1440px) {
    margin: 2.4rem 8rem;
    margin-bottom: 3.2rem;
  }

  @media (min-width: 1600px) {
    margin: 2.4rem 5%;
    margin-bottom: 3.2rem;
  }

  @media (min-width: 650px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin: 4.8rem 0;
  }
`;

export default StyledCountrySearchContainer;
