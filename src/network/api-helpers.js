import axios from 'axios';

const BASIC_API_URL = 'https://restcountries.eu/rest/v2';
const BASIC_FLAGS = '/all?fields=name;capital;population;region;flag';

export async function getAllCountries(onSucess, onFailure) {
  try {
    const response = await axios.get(BASIC_API_URL + BASIC_FLAGS);
    onSucess(response.data);
  } catch (error) {
    onFailure(error.response);
  }
}

export async function getCountriesByRegion(region, onSucess, onFailure) {
  try {
    const response = await axios.get(`${BASIC_API_URL}/region/${region}`);
    onSucess(response.data);
  } catch (error) {
    onFailure(error.response);
  }
}

export async function getCountriesByName(name, onSucess, onFailure) {
  try {
    const response = await axios.get(BASIC_API_URL + '/name/' + name);
    onSucess(response.data);
  } catch (error) {
    onFailure(error.response);
  }
}
