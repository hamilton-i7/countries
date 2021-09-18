import styled from 'styled-components';
import CountryCard from './CountryCard';

const StyledCountryCard = styled(CountryCard)`
  border-radius: 0.5rem;
  box-shadow: 1rem 0 1.2rem rgba(0, 0, 0, 0.12);
  margin: 0 auto;
  overflow: hidden;
  width: 26.4rem;

  & > header {
    background: center / cover no-repeat url(${props => props.flag});
    height: 16rem;
  }

  & > div {
    padding: 0 2.4rem;
    padding-bottom: 4.6rem;

    & > h2 {
      font-size: 1.8rem;
      font-weight: 800;
      margin-bottom: 1.6rem;
      margin-top: 2.4rem;
    }

    & > p {
      font-size: 1.4rem;

      & > span {
        font-weight: 600;
      }

      &:nth-of-type(2) {
        margin: 0.8rem 0;
      }
    }
  }
`;

export default StyledCountryCard;
