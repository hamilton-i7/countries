import StyledCountryCard from './CountryCard.style';

function Countries({ countries, className }) {
  return (
    <div className={className}>
      {countries.map(country => (
        <StyledCountryCard country={country} flag={country.flag} />
      ))}
    </div>
  );
}

export default Countries;
