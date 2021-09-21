import styled from 'styled-components';
import SkeletonDetails from './SkeletonDetails';

export const StyledSkeletonDetails = styled(SkeletonDetails)`
  font-size: 1.4rem;
  padding: 0 2.8rem;
  padding-bottom: 6.5rem;

  & > div:first-child {
    margin-top: 6.4rem;
  }

  & ul {
    list-style: none;
  }

  & > section {
    & > div:first-child {
      margin-top: 4.4rem;
      margin-bottom: 1.6rem;
    }

    & > div:last-of-type > ul > li {
      align-items: center;
      display: flex;

      &:not(:first-child):not(:last-child) {
        margin: 1.2rem 0;
      }

      & > span {
        font-weight: 600;
        margin-right: 2rem;
      }
    }

    & > div:last-of-type > ul:last-child {
      margin-top: 3.2rem;
    }

    & > ul:last-child {
      margin-top: 3.2rem;

      & > li > div {
        column-gap: 1rem;
        display: flex;
        margin-top: 1.6rem;
      }

      & span {
        font-weight: 600;
      }
    }
  }
`;
