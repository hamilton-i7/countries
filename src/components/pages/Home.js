import StyledCountrySearchContainer from '../ui/CountrySearch.style';
import StyledCountries from '../ui/Countries.style';
import { useEffect, useReducer } from 'react';
import {
  getAllCountries,
  getCountriesByName,
  getCountriesByRegion,
} from '../../network/api-helpers';
import StyledNoCountries from '../ui/NoCountries.style';
import StyledFilterDropdown from '../ui/FilterDropdown.style';

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

  const handleError = () => {
    dispatchCountries({ type: TOGGLE_NO_COUNTRIES, payload: true });
    dispatchCountries({ type: GET_COUNTRIES, payload: [] });
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (countriesState.searchQuery) {
        if (countriesState.selectedRegion !== regions[0]) {
          getCountriesByName(
            countriesState.searchQuery,
            data => {
              const countries = data.filter(
                country => country.region === countriesState.selectedRegion
              );
              dispatchCountries({ type: GET_COUNTRIES, payload: countries });

              data.some(
                country => country.region === countriesState.selectedRegion
              )
                ? dispatchCountries({
                    type: TOGGLE_NO_COUNTRIES,
                    payload: false,
                  })
                : dispatchCountries({
                    type: TOGGLE_NO_COUNTRIES,
                    payload: true,
                  });
            },
            error => {
              if (error.status === 404) handleError();
            }
          );
        } else {
          getCountriesByName(
            countriesState.searchQuery,
            data => {
              dispatchCountries({ type: TOGGLE_NO_COUNTRIES, payload: false });
              dispatchCountries({ type: GET_COUNTRIES, payload: data });
            },
            error => {
              if (error.status === 404) handleError();
            }
          );
        }
      } else {
        if (countriesState.selectedRegion !== regions[0]) {
          getCountriesByRegion(
            countriesState.selectedRegion,
            data => {
              dispatchCountries({ type: TOGGLE_NO_COUNTRIES, payload: false });
              dispatchCountries({ type: GET_COUNTRIES, payload: data });
            },
            error => {
              if (error.status === 404) handleError();
            }
          );
        } else {
          getAllCountries(
            data => {
              dispatchCountries({ type: GET_COUNTRIES, payload: data });
            },
            error => {
              if (error.status === 404) handleError();
            }
          );
        }
      }
    }, QUERY_DELAY);

    return () => clearTimeout(identifier);
  }, [countriesState.searchQuery, countriesState.selectedRegion]);

  useEffect(() => {
    getAllCountries(data => {
      dispatchCountries({ type: GET_COUNTRIES, payload: data });
    });
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
      <main>
        <StyledCountrySearchContainer
          searchQuery={countriesState.searchQuery}
          onQueryChange={handleSearchQuery}
          dropdownContent={dropdownContent}
        />
        {countriesState.showNoCountries ? (
          <StyledNoCountries />
        ) : (
          <StyledCountries countries={countriesState.countries} />
        )}
      </main>
    </>
  );
}

export default Home;
