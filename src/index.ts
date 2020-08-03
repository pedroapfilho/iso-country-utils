import countries from './countries.json';

import { Country } from 'types';

const getCountryFromName = (name: string): Country => {
  return countries.filter(c => c.name === name)[0];
};

const getCountryFromAlpha2 = (alpha2: string): Country => {
  return countries.filter(c => c.alpha2 === alpha2)[0];
};

const getCountryFromAlpha3 = (alpha3: string): Country => {
  return countries.filter(c => c.alpha3 === alpha3)[0];
};

const getCountryFromCode = (code: string): Country => {
  return countries.filter(c => c.code === code)[0];
};

export {
  countries,
  getCountryFromName,
  getCountryFromAlpha2,
  getCountryFromAlpha3,
  getCountryFromCode,
};
