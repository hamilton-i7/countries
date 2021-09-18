import { useContext } from 'react';
import { HomeContext } from '../pages/Home';
import StyledCountryCard from './CountryCard.style';

function Countries({ className }) {
  const { countries } = useContext(HomeContext);

  return (
    <div className={className}>
      {countries.map(country => (
        <StyledCountryCard key={country.name} country={country} />
      ))}
    </div>
  );
}

export default Countries;
