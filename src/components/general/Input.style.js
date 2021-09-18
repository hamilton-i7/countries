import styled from 'styled-components';
import Input from './Input';
import { toRGBA } from '../../utils';
import { SHADOW } from './GlobalStyles.style';

const StyledInput = styled(Input)`
  border: none;
  border-radius: 0.5rem;
  box-shadow: ${SHADOW};
  color: ${props => props.theme.onSurface};
  max-width: 48rem;
  outline: none;
  padding: 1.6rem 3.2rem;
  padding-left: 7.4rem;
  width: 100%;

  &::placeholder {
    color: ${props => toRGBA(props.theme.onSurface, 0.85)};
    font-weight: 300;
  }
`;

export default StyledInput;
