import Row from './Row.style';
import StyledTitle from './Title.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as moonSolid } from '@fortawesome/free-solid-svg-icons';
import { faMoon as moonRegular } from '@fortawesome/free-regular-svg-icons';
import Text from './Text.style';

function Nav({ className, lightMode = true, onThemeToggle }) {
  const icon = lightMode ? moonRegular : moonSolid;

  return (
    <nav className={className}>
      <StyledTitle text="Where in the world?" />
      <Row
        horizontalArrangement="justify-content"
        verticalAlignment="center"
        onClick={onThemeToggle}
      >
        <FontAwesomeIcon icon={icon} />
        <Text margin="0 0 0 .8rem">Dark mode</Text>
      </Row>
    </nav>
  );
}

export default Nav;
