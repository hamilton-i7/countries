import axios from 'axios';

const BASIC_API_URL = 'https://restcountries.com/v2';

export function getAllCountries(...fields) {
  const url =
    fields.length !== 0
      ? BASIC_API_URL + `/all?fields=${fields.join(',')}`
      : BASIC_API_URL + '/all';
  return axios.get(url);
}

export function getCountriesByRegion(region) {
  return axios.get(BASIC_API_URL + '/region/' + region);
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
