import styled from 'styled-components';
import Nav from './Nav';

const StyledNav = styled(Nav)`
  box-shadow: 1.8rem 0 1rem rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  margin: ${props => props.margin || 0};
  padding: 3rem 1.6rem;
`;

export default StyledNav;
