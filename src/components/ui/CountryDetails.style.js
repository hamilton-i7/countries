import styled from 'styled-components';
import CountryDetails from './CountryDetails';

export const StyledCountryDetails = styled(CountryDetails)`
  display: flex;
  flex-direction: column;
  padding: 0 7.5%;
  padding-bottom: 6.2rem;

  @media (min-width: 517px) {
    align-items: center;
    margin-top: 8rem;
  }

  @media (min-width: 650px) {
    padding: 0 7%;
    padding-bottom: 6.2rem;
  }

  @media (min-width: 1120px) {
    padding-left: 5%;
    padding-right: 5%;
    flex-direction: row;
  }

  & > img {
    border-radius: 0.5rem;
    display: block;
    margin-top: 6.4rem;
    max-width: 46.1rem;
    width: 100%;

    @media (min-width: 1120px) {
      margin: 0;
      margin-right: 10rem;
    }

    @media (min-width: 1440px) {
      max-width: 54.6rem;
      margin-right: 14.4rem;
    }
  }

  & > section {
    font-size: 1.4rem;
    font-weight: 300;

    @media (min-width: 517px) {
      align-items: center;
      display: flex;
      flex-direction: column;
      font-size: 1.6rem;
    }

    @media (min-width: 1120px) {
      align-items: flex-start;
    }

    & > h2 {
      font-size: 2.2rem;
      font-weight: 800;
      margin-top: 4.4rem;
      margin-bottom: 1.6rem;

      @media (min-width: 746px) {
        margin-bottom: 2.4rem;
      }

      @media (min-width: 1120px) {
        margin-top: 0;
      }

      @media (min-width: 1440px) {
        font-size: 3.2rem;
      }
    }

    & > div {
      @media (min-width: 517px) {
        display: flex;
      }

      & > ul > li:not(:first-child):not(:last-child) {
        margin: 0.8rem 0;
      }

      & > ul:last-child {
        margin-top: 3.2rem;

        @media (min-width: 517px) {
          margin: 0;
          margin-left: 6.8rem;
        }
      }
    }

    & > ul {
      margin-top: 3.2rem;

      @media (min-width: 517px) {
        margin-top: 6.8rem;
      }

      & ul {
        display: flex;
        flex-wrap: wrap;
        margin-top: 1.6rem;
        gap: 1rem;
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
