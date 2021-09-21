import { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react/cjs/react.development';
import { getAllCountries, getCountryByCode } from '../../network/api-helpers';
import { StyledCountryDetailsHeader } from '../ui/CountryDetailsHeader.style';
import { StyledCountryDetails } from '../ui/CountryDetails.style';
import { StyledSkeletonDetails } from '../general/SkeletonDetails.style';
import { StyledCountryNotFound } from '../ui/CountryNotFound.style';

const flags = [
  'flag',
  'name',
  'nativeName',
  'population',
  'region',
  'subregion',
  'capital',
  'topLevelDomain',
  'currencies',
  'languages',
  'borders',
];

const status = {
  success: 1,
  failure: -1,
  loading: 0,
};

export default function Detail() {
  const { code } = useParams();
  const [connectionStatus, setConnectionStatus] = useState(status.loading);
  const [country, setCountry] = useState({
    name: '',
    currencies: [],
    languages: [],
    flag: '',
    topLevelDomain: '',
    capital: '',
    region: '',
    subregion: '',
    population: 0,
    borders: [],
    nativeName: '',
  });

  let bodyContent = <StyledSkeletonDetails />;

  if (connectionStatus === status.success) {
    bodyContent = <StyledCountryDetails country={country} />;
  } else if (connectionStatus === status.failure) {
    bodyContent = <StyledCountryNotFound />;
  }

  useEffect(() => {
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
        if (error.response.status === 400) setConnectionStatus(status.failure);
      });
  }, [code]);

  return (
    <>
      <StyledCountryDetailsHeader />
      {bodyContent}
    </>
  );
}
