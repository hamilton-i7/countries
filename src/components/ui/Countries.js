import StyledCountryCard from './CountryCard.style';

function Countries({ countries, className }) {
  return (
    <main className={className}>
      {countries.map(country => (
        <StyledCountryCard key={country.name} country={country} />
      ))}
    </main>
  );
}

export default Countries;
