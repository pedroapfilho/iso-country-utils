import countries from 'countries.json';
import { Country } from 'types';

const getCountryFromName = (name: string): Country | false => {
  return countries.find(c => c.name === name) || false;
};

const getCountryFromAlpha2 = (alpha2: string): Country | false => {
  return countries.find(c => c.alpha2 === alpha2) || false;
};

const getCountryFromAlpha3 = (alpha3: string): Country | false => {
  return countries.find(c => c.alpha3 === alpha3) || false;
};

const getCountryFromCode = (code: string): Country | false => {
  return countries.find(c => c.code === code) || false;
};

export {
  countries,
  getCountryFromName,
  getCountryFromAlpha2,
  getCountryFromAlpha3,
  getCountryFromCode,
};
