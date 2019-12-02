import {
    COMIENZAR_LOGIN_USER,
    LOGIN_USER_EXITOSA,
    LOGIN_USER_ERROR
} from "../types";

// cada reducer tiene su propio state
const initialState = {
    attributes: {
        countryId: null,
        branchId: null,
        branchName: null,
        brandId: null,
        aggregatorId: null,
    },
    authenticated: false,
    grupo: null,
    errror: null,
    loading: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case COMIENZAR_LOGIN_USER:
            return {
                ...state,
                error: null,
            }
        case LOGIN_USER_EXITOSA:
            return {
                ...state,
                error: null,
                authenticated: action.payload.authenticated,
                grupo: action.payload.grupo,
                attributes: action.payload.attributes
            }
        case LOGIN_USER_ERROR:
            return {
                ...state,
                error: true,
            }
        default:
            return state;
    }
}