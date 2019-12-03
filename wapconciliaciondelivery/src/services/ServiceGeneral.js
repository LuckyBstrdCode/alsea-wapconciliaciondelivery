import { callApiGet, callApiPost } from './crud';

import {
  BASE_URL
} from '../constants/api_url';


const api = {
  services: {
    listCountries() {
      return callApiGet(`${BASE_URL}/countries`);
    },
    listBrands(countryId) {
      return callApiGet(`${BASE_URL}/brands?countryId=${countryId}`);
    },
    listBranches(countryId, brandId) {
      return callApiGet(`${BASE_URL}/branches?countryId=${countryId}&brandId=${brandId}`);
    },
  }
};


export default api;
