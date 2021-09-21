import styled from 'styled-components';
import CountryNotFound from './CountryNotFound';

export const StyledCountryNotFound = styled(CountryNotFound)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & h1 {
    font-size: 2.4rem;
    text-align: center;
  }
`;