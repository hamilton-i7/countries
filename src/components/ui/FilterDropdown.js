import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useComponentVisible from '../../utils';

function FilterDropdown({ className, regions, selectedRegion, onRegionClick }) {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const handleDropdown = () => {
    setIsComponentVisible(prevState => !prevState);
  };

  const dropdownContent = (
    <ul>
      {regions.map(region => (
        <li
          key={region}
          onClick={() => {
            onRegionClick(region);
            setIsComponentVisible(false);
          }}
        >
          {region}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={className} ref={ref}>
      <button onClick={handleDropdown}>
        {selectedRegion}
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
      {isComponentVisible && dropdownContent}
    </div>
  );
}

export default FilterDropdown;
