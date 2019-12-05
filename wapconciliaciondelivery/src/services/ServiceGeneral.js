import { callApiGet, getToken } from './crud';

import {
  BASE_URL,
  SWITCH_B
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

    getTokenPayments() {
      return getToken();
    },

    getPayments(initialDate, endDate, paymentMethodId) {
      return callApiGet(`${SWITCH_B}/report/payments?endDate=${endDate}&initialDate=${initialDate}&paymentMethodId=${paymentMethodId}`);
    },

  }
};

export default api;
