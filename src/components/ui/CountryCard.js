function CountryCard({ country, className }) {
  return (
    <div className={className}>
      <header></header>
      <div>
        <h2>{country.name}</h2>
        <p>
          <span>Population:</span> {country.population.toLocaleString('en-US')}
        </p>
        <p>
          <span>Region:</span> {country.region}
        </p>
        <p>
          <span>Capital:</span> {country.capital}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
