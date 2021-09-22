function CountryCard({ country, className }) {
  return (
    <div className={className}>
      <header>
        <img src={country.flags[0]} alt="Flag" />
      </header>
      <div>
        <h2>{country.name}</h2>
        <p>
          <span>Population:</span> {country.population.toLocaleString('en-US')}
        </p>
        <p>
          <span>Continent:</span> {country.continent}
        </p>
        {country.capital && (
          <p>
            <span>Capital:</span> {country.capital}
          </p>
        )}
      </div>
    </div>
  );
}

export default CountryCard;
