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
    listAggregator(countryId, brandId, branchId) {
      return callApiGet(
        `${BASE_URL}/aggregators?countryId=${countryId}&brandId=${brandId}&branchId=${branchId}`
      );
    },
    listMenuByAggregator(countryId, brandId, branchId, aggregatorId) {
      return callApiGet(
        `${BASE_URL}/items/aggregators/${aggregatorId}?countryId=${countryId}&brandId=${brandId}&branchId=${branchId}`
      );
    },
    listMenuWhitAggregators(countryId, brandId, branchId) {
      return callApiGet(
        `${BASE_URL}/items/aggregators?countryId=${countryId}&brandId=${brandId}&branchId=${branchId}`
      );
    },
    itemDetail(countryId, branchId, aggregatorId, sucursalMenuId, itemId) {
      return callApiGet(
        `${BASE_URL}/items/${itemId}/detail?countryId=${countryId}&branchId=${branchId}&aggregatorId=${aggregatorId}&sucursalMenuId=${sucursalMenuId}`
      );
    },
  }
};


export default api;
