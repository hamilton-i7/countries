import StyledCountryCard from './CountryCard.style';

function Countries({ countries, className }) {
  return (
    <div className={className}>
      {countries.map(country => (
        <StyledCountryCard key={country.name} country={country} />
      ))}
    </div>
  );
}

export default Countries;
