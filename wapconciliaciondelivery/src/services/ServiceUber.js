import { callApiGet, callApiPost, callApiPut } from './crud';

import {
  BASE_URL
} from '../constants/api_url';

const uber = {
  services: {
    getMenu(countryId, branchId, aggregatorId, sucursalMenuId) {
      return callApiGet(
        `${BASE_URL}/menu?countryId=${countryId}&branchId=${branchId}&aggregatorId=${aggregatorId}&menuSucursalId=${sucursalMenuId}`
      );
    },

    getMenuUber(sucursalMenuId) {
      let url = `${BASE_URL}/menu/uber?menuSucursalId=${sucursalMenuId}`;
      return callApiGet(url);
    },

    updateMenuUberDevelop(sucursalMenuId, body) {
      // return callApiPut(`http://localhost:8080/menu?menuSucursalId=${sucursalMenuId}`, body);
      return callApiPut(`${BASE_URL}/menu?menuSucursalId=${sucursalMenuId}`, body);
    },

    updateMenuUber(sucursalMenuId, body) {
      // return callApiPost(`http://localhost:8080/menu?menuSucursalId=${sucursalMenuId}`, body);
      return callApiPost(`${BASE_URL}/menu?menuSucursalId=${sucursalMenuId}`, body);
    },

    updateItemStatusUber(urlParams, body) {
      const { itemId, branchId, aggregatorId, countryId, brandId, status } = urlParams;
      const url = `${BASE_URL}/admin/items/uber/updateItem?itemId=${itemId}&branchId=${branchId}&aggregatorId=${aggregatorId}&countryId=${countryId}&brandId=${brandId}$active=${status}`;
      return callApiPut(url, body);
    },
  }
};


export default uber;
