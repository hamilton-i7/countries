import React from 'react';
import { StyledButton } from '../general/Button.style';
import { v4 as UUID } from 'uuid';
import { DETAIL_PATH } from '../../App';

export default function CountryDetails({ className, country }) {
  const currencies = country.currencies
    .map(currency => currency.name)
    .join(', ');
  const languages = country.languages.map(language => language.name).join(', ');

  const noBordersMessage = <p>No borders</p>;
  const bordersContent = (
    <ul>
      {country.borders.map(border => (
        <li key={UUID()}>
          <StyledButton
            text={border.name}
            linkTo={`${DETAIL_PATH}/${border.alpha3Code}`}
          />
        </li>
      ))}
    </ul>
  );
  return (
    <main className={className}>
      <img src={country.flags[0]} alt="Country flag" />
      <section>
        <h2>{country.name}</h2>
        <div>
          <ul>
            <li>
              <span>Native name:</span> {country.nativeName}
            </li>
            <li>
              <span>Population:</span>{' '}
              {country.population.toLocaleString('en-US')}
            </li>
            <li>
              <span>Continent:</span> {country.continent}
            </li>
            <li>
              <span>Region:</span> {country.region}
            </li>
            <li>
              <span>Capital:</span> {country.capital}
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
              <span>Languages:</span> {languages}
            </li>
          </ul>
        </div>
        <ul>
          <li>
            <span>Border Countries:</span>
            {country.borders.length === 0 ? noBordersMessage : bordersContent}
          </li>
        </ul>
      </section>
    </main>
  );
}
