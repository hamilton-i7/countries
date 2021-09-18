import StyledInput from '../general/Input.style';
import StyledFilterDropdown from './FilterDropdown.style';
import { useContext, useEffect, useState } from 'react';
import { getAllCountries, getCountriesByName } from '../../network/api-helpers';
import { stripDiacritics } from '../../utils';
import { HomeContext } from '../pages/Home';

function CountrySearchContainer() {
  const [searchQuery, setSearchQuery] = useState('');
  const { setCountries, setShowNoCountries } = useContext(HomeContext);

  const handleQuery = e => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (searchQuery === '') {
        getAllCountries(data => setCountries(data));
        return;
      }
      const simplifiedName = stripDiacritics(searchQuery);
      getCountriesByName(
        simplifiedName,
        data => setCountries(data),
        () => {
          setCountries([]);
          setShowNoCountries(true);
        }
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [searchQuery, setCountries, setShowNoCountries]);

  return (
    <header>
      <StyledInput
        placeholder="Search for a country..."
        value={searchQuery}
        setValue={handleQuery}
      />
      <StyledFilterDropdown margin="4rem 0 0 0" />
    </header>
  );
}

export default CountrySearchContainer;
