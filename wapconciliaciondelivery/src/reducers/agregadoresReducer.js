import {
    COMIENZAR_DESCARGA_AGREGADORES,
    DESCARGA_AGREGADORES_EXITOSA,
    DESCARGA_AGREGADORES_ERROR
} from "../types";

// cada reducer tiene su propio state
const initialState = {
    agregadores: [],
    errror: null,
    loading: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case COMIENZAR_DESCARGA_AGREGADORES:
            return {
                ...state,
                error: null,
            }
        case DESCARGA_AGREGADORES_EXITOSA:
            return {
                ...state,
                error: null,
                agregadores: [...state.agregadores, action.payload]
            }
        case DESCARGA_AGREGADORES_ERROR:
            return {
                ...state,
                error: true,
            }
        default:
            return state;
    }
}