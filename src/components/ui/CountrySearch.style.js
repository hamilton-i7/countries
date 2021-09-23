import styled from 'styled-components';
import CountrySearchContainer from './CountrySearch';

const StyledCountrySearchContainer = styled(CountrySearchContainer)`
  display: flex;
  flex-direction: column;
  padding: 3.2rem 5%;

  @media (min-width: 650px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 4.8rem 5%;
  }
`;

export default StyledCountrySearchContainer;
