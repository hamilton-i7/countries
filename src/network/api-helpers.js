import axios from 'axios';

const BASIC_API_URL = 'https://restcountries.eu/rest/v2';

export async function getAllCountries(...fields) {
  const url =
    fields.length !== 0
      ? BASIC_API_URL + `/all?fields=${fields.join(';')}`
      : BASIC_API_URL + '/all';
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error.response;
  }
}

export async function getCountriesByRegion(region) {
  try {
    const response = await axios.get(BASIC_API_URL + '/region/' + region);
    return response.data;
  } catch (error) {
    return error.response;
  }
}

export async function getCountriesByName(name) {
  try {
    const response = await axios.get(BASIC_API_URL + '/name/' + name);
    return response.data;
  } catch (error) {
    return error.response;
  }
}

export async function getCountryByCode(code, ...fields) {
  const url =
    fields.length !== 0
      ? `${BASIC_API_URL}/alpha/${code}?fields=${fields.join(';')}`
      : `${BASIC_API_URL}/alpha/${code}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error.response;
  }
}
