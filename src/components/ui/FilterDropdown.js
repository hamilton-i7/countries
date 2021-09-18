import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { HomeContext } from '../pages/Home';
import useComponentVisible from '../../utils';
import { getCountriesByRegion } from '../../network/api-helpers';

function FilterDropdown({ className }) {
  const { regions, selectedRegion, setSelectedRegion, setCountries } =
    useContext(HomeContext);
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const handleRegion = region => {
    setSelectedRegion(region);
    setIsComponentVisible(false);
    getCountriesByRegion(regions[0], region, data => setCountries(data));
  };

  const handleDropdown = () => {
    setIsComponentVisible(prevState => !prevState);
  };

  const dropdownContent = (
    <ul>
      {regions.map(region => (
        <li
          key={region}
          onClick={() => {
            handleRegion(region);
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
