import StyledNav from '../general/Nav.style';
import axios from 'axios';
import StyledCountrySearchContainer from '../ui/CountrySearch.style';
import StyledCountries from '../ui/Countries.style';
import { useEffect, useState } from 'react';

const FILTERED_API =
  'https://restcountries.eu/rest/v2/all?fields=name;capital;population;region;flag';

const sampleCountries = [
  {
    name: 'Germany',
    population: 81_770_900,
    region: 'Europe',
    capital: 'Berlin',
  },
  {
    name: 'United States of America',
    population: 323_947_000,
    region: 'Americas',
    capital: 'Washington, D.C.',
  },
  {
    name: 'Brazil',
    population: 206_135_893,
    region: 'Americas',
    capital: 'Brasília',
  },
  {
    name: 'Iceland',
    population: 334_300,
    region: 'Europe',
    capital: 'Reykjavík',
  },
];

function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries(data => setCountries(data));
  }, [countries]);

  return (
    <>
      <StyledNav />
      <main>
        <StyledCountrySearchContainer />
        <StyledCountries countries={countries} />
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
