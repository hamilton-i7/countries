import StyledNav from '../general/Nav.style';
import axios from 'axios';
import StyledCountrySearchContainer from '../ui/CountrySearch.style';
import StyledCountries from '../ui/Countries.style';
import { createContext, useEffect, useState } from 'react';

const FILTERED_API =
  'https://restcountries.eu/rest/v2/all?fields=name;capital;population;region;flag';

export const HomeContext = createContext(null);

function Home() {
  const [countries, setCountries] = useState([]);

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
    getCountries(data => setCountries(data));
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
          }}
        >
          <StyledCountrySearchContainer />
          <StyledCountries />
        </HomeContext.Provider>
      </main>
    </>
  );
}

async function getCountries(onSuccess) {
  try {
    const response = await axios.get(FILTERED_API);
    onSuccess(response.data);
  } catch (error) {
    console.error(error);
  }
}

export default Home;
