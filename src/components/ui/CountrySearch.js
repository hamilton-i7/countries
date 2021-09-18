import StyledInput from '../general/Input.style';

function CountrySearchContainer({
  searchQuery,
  onQueryChange,
  dropdownContent,
}) {
  return (
    <header>
      <StyledInput
        placeholder="Search for a country..."
        value={searchQuery}
        onValueChange={onQueryChange}
      />
      {dropdownContent}
    </header>
  );
}

export default CountrySearchContainer;
