import { Link } from 'react-router-dom';
import { DETAIL_PATH } from '../../App';
import StyledCountryCard from './CountryCard.style';

function Countries({ countries, className }) {
  return (
    <main className={className}>
      {countries.map(country => (
        <Link
          key={country.alpha2Code}
          to={`${DETAIL_PATH}/${country.alpha2Code}`}
        >
          <StyledCountryCard country={country} />{' '}
        </Link>
      ))}
    </main>
  );
}

export default Countries;
