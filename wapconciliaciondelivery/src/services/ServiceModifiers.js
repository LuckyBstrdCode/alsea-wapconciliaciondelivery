import { callApiPut } from './crud'

import {
  BASE_URL
} from '../constants/api_url';

const serviceModifiers = {
  updateModifierGroups(urlParams, body) {
    const { userId, countryId, branchId, aggregatorId } = urlParams;
    const url = `${BASE_URL}/modifiers?userId=${userId}&countryId=${countryId}&aggregatorId=${aggregatorId}&branchId=${branchId}`;
    return callApiPut(url, body);
  },

  updateModifierItems(urlParams, body, modifiergroupid) {
    const { userId, countryId, branchId, aggregatorId } = urlParams;
    const url = `${BASE_URL}/modifiers/${modifiergroupid}/modifiers?userId=${userId}&countryId=${countryId}&aggregatorId=${aggregatorId}&branchId=${branchId}`;
    return callApiPut(url, body);
  },
};

export default serviceModifiers;