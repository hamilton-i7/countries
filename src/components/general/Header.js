import styled from 'styled-components';
import StyledInput from './Input.style';
import StyledNav from './Nav.style';

function Header() {
  return (
    <header>
      <StyledNav />
    </header>
  );
}

function CountrySearchContainer() {
  return (
    <div>
      <StyledInput />
    </div>
  );
}

const StyledCountrySearchContainer = styled(CountrySearchContainer)`
  display: flex;
  flex-direction: column;
`;

export default Header;
