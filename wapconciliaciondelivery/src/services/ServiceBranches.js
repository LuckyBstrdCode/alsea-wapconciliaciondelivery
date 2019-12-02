import {
  BASE_URL_BETA,
  BASE_URL
} from '../constants/api_url';

import { callApiGet, callApiPut } from './crud'


const ServiceBranches = {

  getBranchesWithDetail(urlParams) {
    const { countryId, aggregatorId, brandId} = urlParams;
    const url = `${BASE_URL_BETA}/branches?countryId=${countryId}&aggregatorId=${aggregatorId}&brandId=${brandId}`;
    return callApiGet(url);
  },

  // Method for modification branch
  updateSucursal(urlParams, body) {
    const { countryId, branchId, userId, brandId } = urlParams;
    const url = `${BASE_URL}/branches/${branchId}?userId=${userId}&countryId=${countryId}&brandId=${brandId}`;
    console.info(body);
    return callApiPut(url, body);
  },
  
};

export default ServiceBranches;