import { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react/cjs/react.development';
import { getAllCountries, getCountryByCode } from '../../network/api-helpers';
import { StyledCountryDetailsHeader } from '../ui/CountryDetailsHeader.style';
import { StyledCountryDetails } from '../ui/CountryDetails.style';

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

export default function Detail() {
  const { code } = useParams();
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

  useEffect(() => {
    const countryPromise = getCountryByCode(code, ...flags);
    const allCountriesPromise = getAllCountries('name', 'alpha3Code');

    Promise.all([countryPromise, allCountriesPromise]).then(values => {
      const [currentCountry, allCountries] = values;

      setCountry(currentCountry);

      if (currentCountry.borders.length === 0) {
        // set no borders message
        return;
      }

      setCountry(prevState => {
        const match = allCountries.filter(data =>
          currentCountry.borders.includes(data.alpha3Code)
        );
        return {
          ...prevState,
          borders: match,
        };
      });
    });
  }, [code]);

  return (
    <>
      <StyledCountryDetailsHeader />
      <StyledCountryDetails country={country} />
    </>
  );
}
