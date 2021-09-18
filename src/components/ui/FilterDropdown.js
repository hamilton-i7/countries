import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useRef, useState } from 'react';
import { HomeContext } from '../pages/Home';
import axios from 'axios';
import useComponentVisible, { areEquals } from '../../utils';

const API = 'https://restcountries.eu/rest/v2';

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

async function getCountriesByRegion(defaultRegion, region, onSuccess) {
  try {
    const url = areEquals(defaultRegion, region)
      ? API + '/all'
      : `${API}/region/${region.toLowerCase()}`;
    const response = await axios.get(url);
    onSuccess(response.data);
  } catch (error) {
    console.error(error);
  }
}

export default FilterDropdown;
