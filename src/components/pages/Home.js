import StyledNav from '../general/Nav.style';
import StyledCountrySearchContainer from '../ui/CountrySearch.style';
import StyledCountries from '../ui/Countries.style';
import { createContext, useEffect, useState } from 'react';
import { getAllCountries } from '../../network/api-helpers';
import StyledNoCountries from '../ui/NoCountries.style';

export const HomeContext = createContext(null);

function Home() {
  const [countries, setCountries] = useState([]);
  const [showNoCountries, setShowNoCountries] = useState(false);

  const regions = [
    'Filter by Region - All',
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  const [selectedRegion, setSelectedRegion] = useState(regions[0]);

  useEffect(() => {
    getAllCountries(data => setCountries(data));
  }, []);

  return (
    <>
      <StyledNav />
      <main>
        <HomeContext.Provider
          value={{
            countries,
            setCountries,
            regions,
            selectedRegion,
            setSelectedRegion,
            showNoCountries,
            setShowNoCountries,
          }}
        >
          <StyledCountrySearchContainer />
          {showNoCountries ? <StyledNoCountries /> : <StyledCountries />}
        </HomeContext.Provider>
      </main>
    </>
  );
}

export default Home;
