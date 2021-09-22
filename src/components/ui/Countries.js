import { Link } from 'react-router-dom';
import { DETAIL_PATH } from '../../App';
import StyledCountryCard from './CountryCard.style';

function Countries({ countries, className }) {
  return (
    <main className={className}>
      {countries.map(country => (
        <Link
          key={country.alpha3Code}
          to={`${DETAIL_PATH}/${country.alpha3Code}`}
        >
          <StyledCountryCard country={country} />
        </Link>
      ))}
    </main>
  );
}

export default Countries;
