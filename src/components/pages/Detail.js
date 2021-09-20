import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import { HOME_PATH } from '../../App';
import { getAllCountries, getCountryByCode } from '../../network/api-helpers';
import { StyledCountryButton } from '../ui/CountryButton.style';

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

  if (Object.keys(country).length !== 0) {
  }
  const currencies = country.currencies
    .map(currency => currency.name)
    .join(', ');
  const languages = country.languages.map(language => language.name).join(', ');

  const noBordersMessage = <p>No borders</p>;
  const bordersContent = (
    <ul>
      {country.borders.map(border => (
        <li key={border.name}>
          <StyledCountryButton name={border.name} />
        </li>
      ))}
    </ul>
  );

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
      <header>
        <button>
          <Link to={HOME_PATH}>Back</Link>
        </button>
      </header>
      <main>
        <div>
          <img src={country.flag} alt="Country flag" />
        </div>
        <section>
          <h2>{country.name}</h2>
          <div>
            <ul>
              <li>
                <span>Native Name:</span> {country.nativeName}
              </li>
              <li>
                <span>Population:</span> {country.population}
              </li>
              <li>
                <span>Region:</span> {country.region}
              </li>
              <li>
                <span>Sub Region:</span> {country.subregion}
              </li>
              <li>
                <span>Capital</span> {country.capital}
              </li>
            </ul>

            <ul>
              <li>
                <span>Top Level Domain:</span> {country.topLevelDomain}
              </li>
              <li>
                <span>Currencies:</span> {currencies}
              </li>
              <li>
                <span>Languages</span> {languages}
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <span>Border Countries:</span>
                {country.borders.length === 0
                  ? noBordersMessage
                  : bordersContent}
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
