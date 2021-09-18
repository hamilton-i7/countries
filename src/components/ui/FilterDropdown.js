import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FilterDropdown({ className }) {
  const regions = [
    'Filter by Region - All',
    'Africa',
    'America',
    'Asia',
    'Europe',
    'Oceania',
  ];
  return (
    <div className={className}>
      <button>
        {regions[0]}
        <FontAwesomeIcon icon={faChevronDown} />
      </button>

      <ul>
        {regions.map(region => (
          <li value={region.toLowerCase()}>{region}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterDropdown;
