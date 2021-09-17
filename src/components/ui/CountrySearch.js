import StyledInput from '../general/Input.style';
import StyledFilterDropdown from './FilterDropdown.style';

function CountrySearchContainer() {
  return (
    <header>
      <StyledInput placeholder="Search for a country..." />
      <StyledFilterDropdown margin="4rem 0 0 0" />
    </header>
  );
}

export default CountrySearchContainer;
