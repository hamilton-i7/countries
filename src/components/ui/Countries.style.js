import styled from 'styled-components';
import {
  lgScreenBreakpoint,
  lgScreenBreakpoint2,
  mdScreenBpreakpoint3,
  mdScreenBreakpoint,
} from '../../utils';
import Countries from './Countries';

const StyledCountries = styled(Countries)`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  margin-top: 3.2rem;
  row-gap: 4rem;

  @media (min-width: ${mdScreenBreakpoint}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${mdScreenBpreakpoint3}) {
    gap: 6rem;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${lgScreenBreakpoint}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: ${lgScreenBreakpoint2}) {
    gap: 7.5rem;
  }
`;

export default StyledCountries;
