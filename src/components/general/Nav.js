import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as moonSolid } from '@fortawesome/free-solid-svg-icons';
import { faMoon as moonRegular } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

export default function Nav({ className, lightMode = true, onThemeToggle }) {
  const icon = lightMode ? moonRegular : moonSolid;

  return (
    <nav className={className}>
      <h1>
        <Link to="/"> Where in the world?</Link>
      </h1>
      <div>
        <p onClick={onThemeToggle}>
          <FontAwesomeIcon icon={icon} />
          Dark mode
        </p>
      </div>
    </nav>
  );
}
