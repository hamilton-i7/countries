import axios from 'axios';
import { areEquals } from '../utils';

const BASIC_API_URL = 'https://restcountries.eu/rest/v2';
const BASIC_FLAGS = '/all?fields=name;capital;population;region;flag';

export async function getAllCountries(onSuccess) {
  try {
    const response = await axios.get(BASIC_API_URL + BASIC_FLAGS);
    onSuccess(response.data);
  } catch (error) {
    console.error(error);
  }
}

export async function getCountriesByRegion(defaultRegion, region, onSuccess) {
  try {
    const url = areEquals(defaultRegion, region)
      ? BASIC_API_URL + '/all'
      : `${BASIC_API_URL}/region/${region.toLowerCase()}`;
    const response = await axios.get(url);
    onSuccess(response.data);
  } catch (error) {
    console.error(error);
  }
}

export async function getCountriesByName(name, onSuccess, onFailure) {
  try {
    const response = await axios.get(BASIC_API_URL + '/name/' + name);
    onSuccess(response.data);
  } catch (error) {
    onFailure();
  }
}
