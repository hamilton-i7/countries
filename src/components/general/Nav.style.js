import styled from 'styled-components';
import {
  lgScreenBreakpoint2,
  mdScreenBpreakpoint2,
  mdScreenBreakpoint,
} from '../../utils';
import Nav from './Nav';

const StyledNav = styled(Nav)`
  box-shadow: 1.8rem 0 1rem rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  margin: ${props => props.margin || 0};
  padding: 3rem 1.6rem;

  @media (min-width: ${mdScreenBpreakpoint2}) {
    padding: 3rem 4rem;
  }

  @media (min-width: ${lgScreenBreakpoint2}) {
    padding: 3rem 8rem;
  }

  & > h1 {
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: 800;

    @media (min-width: ${mdScreenBreakpoint}) {
      font-size: 2rem;
    }

    @media (min-width: ${lgScreenBreakpoint2}) {
      font-size: 2.4rem;
    }
  }

  & > div {
    align-items: center;
    cursor: pointer;
    display: flex;

    & > p {
      color: ${props => props.theme.onBackground};
      font-weight: 300;
      line-height: 1;

      & > svg {
        margin-right: 0.8rem;
      }
    }
  }
`;

export default StyledNav;
