import StyledInput from '../general/Input.style';

export default function CountrySearchContainer({
  searchQuery,
  onQueryChange,
  dropdownContent,
  className,
}) {
  return (
    <header className={className}>
      <StyledInput
        placeholder="Search for a country..."
        value={searchQuery}
        onValueChange={onQueryChange}
      />
      {dropdownContent}
    </header>
  );
}
