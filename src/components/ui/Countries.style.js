import styled from 'styled-components';
import Countries from './Countries';

const StyledCountries = styled(Countries)`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 4rem;
  margin-top: 3.2rem;
`;

export default StyledCountries;
