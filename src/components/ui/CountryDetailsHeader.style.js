import styled from 'styled-components';
import CountryDetailsHeader from './CountryDetailsHeader';

export const StyledCountryDetailsHeader = styled(CountryDetailsHeader)`
  margin-top: 4rem;
  padding: 0 7.5%;

  @media (min-width: 650px) {
    padding: 0 7%;
  }
`;
