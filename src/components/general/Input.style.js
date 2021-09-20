import styled from 'styled-components';
import Input from './Input';
import { toRGBA } from '../../utils';
import { SHADOW } from './GlobalStyles.style';

const StyledInput = styled(Input)`
  background-color: ${props => props.theme.surface};
  border: none;
  border-radius: 0.5rem;
  box-shadow: ${SHADOW};
  color: ${props => props.theme.onSurface};
  height: 4.8rem;
  outline: none;
  padding: 1.6rem 3.2rem;
  padding-left: 7.4rem;
  width: 100%;

  &::placeholder {
    color: ${props => toRGBA(props.theme.onSurface, 0.85)};
    font-weight: 300;
  }

  @media (min-width: 650px) {
    height: 5.6rem;
  }
`;

export default StyledInput;
