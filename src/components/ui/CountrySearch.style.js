import styled from 'styled-components';
import { mdScreenBreakpoint } from '../../utils';
import CountrySearchContainer from './CountrySearch';

const StyledCountrySearchContainer = styled(CountrySearchContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${mdScreenBreakpoint}) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin: 4.8rem 0;
  }
`;

export default StyledCountrySearchContainer;
