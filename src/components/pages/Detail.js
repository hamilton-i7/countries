import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import {
  getAllCountries,
  getCountryByCode,
  LOADING_DELAY,
  status,
} from '../../network/api-helpers';
import { StyledCountryDetailsHeader } from '../ui/CountryDetailsHeader.style';
import { StyledCountryDetails } from '../ui/CountryDetails.style';
import { StyledErrorScreen } from '../ui/ErrorScreen.style';
import { StyledLoader } from '../general/Loader.style';
import countryNotFoundImg from '../../design/country-not-found.svg';

const flags = [
  'flags',
  'name',
  'nativeName',
  'population',
  'continent',
  'region',
  'capital',
  'topLevelDomain',
  'currencies',
  'languages',
  'borders',
];

const ERROR_STATUS = 400;

function Detail() {
  const { code } = useParams();
  const [connectionStatus, setConnectionStatus] = useState(status.loading);
  const [country, setCountry] = useState({
    name: '',
    currencies: [],
    languages: [],
    flags: [],
    topLevelDomain: '',
    capital: '',
    region: '',
    subregion: '',
    population: 0,
    borders: [],
    nativeName: '',
  });

  let bodyContent = (
    <StyledLoader loading={connectionStatus === status.loading} />
  );

  if (connectionStatus === status.success) {
    bodyContent = <StyledCountryDetails country={country} />;
  } else if (connectionStatus === status.failure) {
    bodyContent = (
      <StyledErrorScreen
        imgSrc={countryNotFoundImg}
        message="Country not found..."
      />
    );
  }

  useEffect(() => {
    setConnectionStatus(status.loading);

    const identifier = setTimeout(() => {
      getCountryByCode(code, ...flags)
        .then(response => {
          setCountry(response.data);
          return getAllCountries('name', 'alpha3Code');
        })
        .then(response => {
          setConnectionStatus(status.success);
          setCountry(prevState => {
            const match = response.data.filter(data =>
              prevState.borders.includes(data.alpha3Code)
            );
            return {
              ...prevState,
              borders: match,
            };
          });
        })
        .catch(error => {
          console.log(error);
          if (error.response.status >= ERROR_STATUS)
            setConnectionStatus(status.failure);
        });
    }, LOADING_DELAY);

    return () => clearTimeout(identifier);
  }, [code]);

  return (
    <>
      <StyledCountryDetailsHeader />
      {bodyContent}
    </>
  );
}

export default Detail;
