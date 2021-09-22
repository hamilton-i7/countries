import StyledCountrySearchContainer from '../ui/CountrySearch.style';
import StyledCountries from '../ui/Countries.style';
import { useEffect, useReducer, useState } from 'react';
import {
  getAllCountries,
  getCountriesByName,
  getCountriesByContinent,
  LOADING_DELAY,
  status,
} from '../../network/api-helpers';
import StyledNoCountries from '../ui/NoCountries.style';
import StyledFilterDropdown from '../ui/FilterDropdown.style';
import { StyledLoader } from '../general/Loader.style';
import unexpectedErrorImg from '../../design/unexpected-error.svg';
import { StyledErrorScreen } from '../ui/ErrorScreen.style';

const GET_COUNTRIES = 'GET ALL COUNTRIES';
const TOGGLE_NO_COUNTRIES = 'TOGGLE NO COUNTRIES';
const CHANGE_REGION = 'CHANGE REGION';
const CHANGE_QUERY = 'CHANGE QUERY';

const QUERY_DELAY = 500;
const regions = [
  'Filter by Region - All',
  'Africa',
  'Americas',
  'Asia',
  'Europe',
  'Oceania',
];

const flags = [
  'name',
  'capital',
  'population',
  'continent',
  'flags',
  'alpha3Code',
];

function countriesReducer(state, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, countries: action.payload };
    case TOGGLE_NO_COUNTRIES:
      return { ...state, showNoCountries: action.payload };
    case CHANGE_REGION:
      return { ...state, selectedRegion: action.payload };
    case CHANGE_QUERY:
      return { ...state, searchQuery: action.payload };
    default:
      throw new Error();
  }
}

function Home() {
  const [connectionStatus, setConnectionStatus] = useState(status.loading);
  const [countriesState, dispatchCountries] = useReducer(countriesReducer, {
    countries: [],
    showNoCountries: false,
    selectedRegion: regions[0],
    searchQuery: '',
  });

  const handleSearchQuery = e => {
    dispatchCountries({ type: CHANGE_QUERY, payload: e.target.value });
  };

  const handleRegionClick = region => {
    dispatchCountries({ type: CHANGE_REGION, payload: region });
  };

  const handleNoCountriesMessage = () => {
    dispatchCountries({ type: TOGGLE_NO_COUNTRIES, payload: true });
    dispatchCountries({ type: GET_COUNTRIES, payload: [] });
  };

  let bodyContent = (
    <StyledLoader loading={connectionStatus === status.loading} />
  );

  if (connectionStatus === status.success) {
    bodyContent = countriesState.showNoCountries ? (
      <StyledNoCountries />
    ) : (
      <StyledCountries countries={countriesState.countries} />
    );
  } else if (connectionStatus === status.failure) {
    bodyContent = (
      <StyledErrorScreen
        imgSrc={unexpectedErrorImg}
        message="Unexpected error. Try again later..."
      />
    );
  }

  useEffect(() => {
    const identifier = setTimeout(() => {
      setConnectionStatus(status.loading);
      if (countriesState.searchQuery) {
        if (countriesState.selectedRegion !== regions[0]) {
          getCountriesByName(countriesState.searchQuery)
            .then(response => {
              setConnectionStatus(status.success);
              if (response.data.status === 404) {
                handleNoCountriesMessage();
                return;
              }
              const countries = response.data.filter(
                country => country.continent === countriesState.selectedRegion
              );
              dispatchCountries({ type: GET_COUNTRIES, payload: countries });

              response.data.some(
                country => country.continent === countriesState.selectedRegion
              )
                ? dispatchCountries({
                    type: TOGGLE_NO_COUNTRIES,
                    payload: false,
                  })
                : dispatchCountries({
                    type: TOGGLE_NO_COUNTRIES,
                    payload: true,
                  });
            })
            .catch(() => setConnectionStatus(status.failure));
        } else {
          getCountriesByName(countriesState.searchQuery)
            .then(response => {
              setConnectionStatus(status.success);
              if (response.data.status === 404) {
                handleNoCountriesMessage();
                return;
              }

              dispatchCountries({ type: TOGGLE_NO_COUNTRIES, payload: false });
              dispatchCountries({
                type: GET_COUNTRIES,
                payload: response.data,
              });
            })
            .catch(() => setConnectionStatus(status.failure));
        }
      } else {
        dispatchCountries({ type: TOGGLE_NO_COUNTRIES, payload: false });

        if (countriesState.selectedRegion !== regions[0]) {
          getCountriesByContinent(countriesState.selectedRegion)
            .then(response => {
              setConnectionStatus(status.success);
              dispatchCountries({
                type: GET_COUNTRIES,
                payload: response.data,
              });
            })
            .catch(() => setConnectionStatus(status.failure));
        } else {
          getAllCountries(...flags)
            .then(response => {
              setConnectionStatus(status.success);
              dispatchCountries({
                type: GET_COUNTRIES,
                payload: response.data,
              });
            })
            .catch(() => setConnectionStatus(status.failure));
        }
      }
    }, QUERY_DELAY);

    return () => clearTimeout(identifier);
  }, [countriesState.searchQuery, countriesState.selectedRegion]);

  useEffect(() => {
    setConnectionStatus(status.loading);
    const identifier = setTimeout(() => {
      getAllCountries(...flags)
        .then(response => {
          setConnectionStatus(status.success);
          dispatchCountries({ type: GET_COUNTRIES, payload: response.data });
        })
        .catch(() => setConnectionStatus(status.failure));
    }, LOADING_DELAY);

    return () => clearTimeout(identifier);
  }, []);

  const dropdownContent = (
    <StyledFilterDropdown
      margin="4rem 0 0 0"
      regions={regions}
      selectedRegion={countriesState.selectedRegion}
      onRegionClick={region => handleRegionClick(region)}
    />
  );

  return (
    <>
      <StyledCountrySearchContainer
        searchQuery={countriesState.searchQuery}
        onQueryChange={handleSearchQuery}
        dropdownContent={dropdownContent}
      />
      {bodyContent}
    </>
  );
}

export default Home;
