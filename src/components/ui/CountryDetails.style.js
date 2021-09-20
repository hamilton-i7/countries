import styled from 'styled-components';
import CountryDetails from './CountryDetails';

export const StyledCountryDetails = styled(CountryDetails)`
  display: flex;
  flex-direction: column;
  padding: 0 2.8rem;
  padding-bottom: 6.2rem;

  & > img {
    border-radius: 0.5rem;
    display: block;
    margin-top: 6.4rem;
    width: 100%;
  }

  & > section {
    font-size: 1.4rem;
    font-weight: 300;

    & > h2 {
      font-size: 2.2rem;
      font-weight: 800;
      margin-top: 4.4rem;
      margin-bottom: 1.6rem;
    }

    & > div {
      & > ul:last-child {
        margin-top: 3.2rem;
      }
    }

    & > ul {
      margin-top: 3.2rem;

      & ul {
        justify-items: center;
        display: grid;
        grid-template-columns: repeat(auto-fill, 100px);
        margin-top: 1.6rem;
        row-gap: 1rem;

        & > li:not(:last-child) {
          margin-right: 1rem;
        }
      }
    }
  }

  & ul {
    list-style: none;

    & > li span {
      font-weight: 600;
    }
  }
`;
