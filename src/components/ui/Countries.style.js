import styled from 'styled-components';
import Countries from './Countries';

const StyledCountries = styled(Countries)`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  margin-top: 0.8rem;
  padding: 2.4rem 1.6rem;
  padding-bottom: 6.5rem;
  row-gap: 4rem;

  @media (min-width: 650px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 746px) {
    padding: 2.4rem 4rem;
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
    padding: 2.4rem 8rem;
  }

  @media (min-width: 1600px) {
    padding: 2.4rem 5%;
  }
`;

export default StyledCountries;
