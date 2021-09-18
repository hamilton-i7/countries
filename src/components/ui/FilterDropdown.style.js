import styled from 'styled-components';
import FilterDropdown from './FilterDropdown';
import { SHADOW } from '../general/GlobalStyles.style';

const StyledFilterDropdown = styled(FilterDropdown)`
  margin: ${props => props.margin || 0};
  position: relative;
  width: 20rem;

  & > button {
    background-color: ${props => props.theme.surface};
    border: none;
    border-radius: 0.5rem;
    box-shadow: ${SHADOW};
    outline: none;
    padding: 1.4rem 1.9rem;
    padding-left: 2.4rem;
    text-align: start;
    width: 100%;

    & > svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 1.9rem;
    }
  }

  & > ul {
    background-color: ${props => props.theme.surface};
    border-radius: 0.5rem;
    box-shadow: ${SHADOW};
    left: 0;
    list-style: none;
    padding: 1.6rem 0;
    position: absolute;
    top: 4.8rem;
    width: 100%;

    & > li {
      padding: 0.8rem 2.4rem;

      &:hover,
      &:active {
        background-color: rgba(0, 0, 0, 0.12);
      }
    }
  }
`;

export default StyledFilterDropdown;
