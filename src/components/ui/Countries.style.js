import styled from 'styled-components';
import Countries from './Countries';

const StyledCountries = styled(Countries)`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  margin: 0 1.6rem;
  margin-bottom: 6.5rem;
  row-gap: 4rem;

  @media (min-width: 650px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 746px) {
    margin: 0 4rem;
    margin-bottom: 6.5rem;
  }

  @media (min-width: 984px) {
    gap: 6rem;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1325px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1440px) {
    gap: 7.5rem;
    margin: 0 8rem;
    margin-bottom: 6.5rem;
  }

  @media (min-width: 1600px) {
    margin: 0 5%;
    margin-bottom: 6.5rem;
  }
`;

export default StyledCountries;
