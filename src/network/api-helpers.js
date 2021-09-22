import axios from 'axios';

const BASIC_API_URL = 'https://restcountries.com/v2';

export const status = {
  success: 1,
  failure: -1,
  loading: 0,
};

export const LOADING_DELAY = 500;

export function getAllCountries(...fields) {
  const url =
    fields.length !== 0
      ? BASIC_API_URL + `/all?fields=${fields.join(',')}`
      : BASIC_API_URL + '/all';
  return axios.get(url);
}

export function getCountriesByContinent(continent) {
  return axios.get(BASIC_API_URL + '/continent/' + continent);
}

export function getCountriesByName(name) {
  return axios.get(BASIC_API_URL + '/name/' + name);
}

export function getCountryByCode(code, ...fields) {
  const url =
    fields.length !== 0
      ? `${BASIC_API_URL}/alpha/${code}?fields=${fields.join(',')}`
      : `${BASIC_API_URL}/alpha/${code}`;
  return axios.get(url);
}
