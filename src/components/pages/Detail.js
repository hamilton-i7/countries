import { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react/cjs/react.development';
import { getAllCountries, getCountryByCode } from '../../network/api-helpers';
import { StyledCountryDetailsHeader } from '../ui/CountryDetailsHeader.style';
import { StyledCountryDetails } from '../ui/CountryDetails.style';
import { StyledSkeletonDetails } from '../general/SkeletonDetails.style';

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
  }

  useEffect(() => {
    const countryPromise = getCountryByCode(code, ...flags);
    const allCountriesPromise = getAllCountries('name', 'alpha3Code');

    Promise.all([countryPromise, allCountriesPromise])
      .then(values => {
        setConnectionStatus(status.success);
        const [currentCountry, allCountries] = values;

        setCountry(currentCountry);
        setCountry(prevState => {
          const match = allCountries.filter(data =>
            currentCountry.borders.includes(data.alpha3Code)
          );
          return {
            ...prevState,
            borders: match,
          };
        });
      })
      .catch(error => {
        setConnectionStatus(status.failure);
      });
  }, [code]);

  return (
    <>
      <StyledCountryDetailsHeader />
      {bodyContent}
    </>
  );
}
