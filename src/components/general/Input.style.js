import styled from 'styled-components';
import Input from './Input';

const StyledInput = styled(Input)`
  border: none;
  border-radius: 0.5rem;
  box-shadow: 1.2rem 0 1.5rem rgba(0, 0, 0, 0.05);
  color: ${props => props.theme.onSurface};
  font-family: inherit;
  font-size: inherit;
  outline: none;
  padding: 1.6rem 3.2rem;
  padding-left: 7.4rem;
`;

export default StyledInput;
