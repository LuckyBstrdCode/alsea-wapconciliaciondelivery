import { callApiPut } from './crud'

import {
  BASE_URL
} from '../constants/api_url';

const serviceItems = {

  updateItems(urlParams, body) {
    const { userId, countryId, brandId, branchId, aggregatorId, sucursalMenuId } = urlParams;
    const url = `${BASE_URL}/items?userId=${userId}&countryId=${countryId}&brandId=${brandId}&branchId=${branchId}&aggregatorId=${aggregatorId}&menuId=${sucursalMenuId}`;
    return callApiPut(url, body);
  },
};

export default serviceItems;