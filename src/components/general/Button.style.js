import styled from 'styled-components';
import Button from './Button';

export const StyledButton = styled(Button)`
  background-color: ${props => props.theme.surface};
  border: none;
  border-radius: 0.2rem;
  box-shadow: 0.5rem 0.5rem 0.8rem rgba(0, 0, 0, 0.08);
  cursor: pointer;
  margin: ${props => props.margin || 0};
  outline: none;
  padding: 0.6rem 2.4rem;

  &:hover {
    background-color: ${props => props.theme.surfaceHover};
  }

  @media (min-width: 650px) {
    font-size: 1.6rem;
  }

  & > svg {
    margin-right: 1rem;
  }
`;
