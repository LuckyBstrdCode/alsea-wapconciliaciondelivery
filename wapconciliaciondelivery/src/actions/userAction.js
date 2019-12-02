import {
    COMIENZAR_LOGIN_USER,
    LOGIN_USER_EXITOSA,
    LOGIN_USER_ERROR
} from '../types';

export function validarLoginAction(){
    return dispatch => {
        dispatch( iniciarValidacion() )
    }
}

export const iniciarValidacion = () => {
    return {
        type: COMIENZAR_LOGIN_USER
    }
}

export const validacionExito = (userAuth) => {
    return {
        type: LOGIN_USER_EXITOSA,
        payload: userAuth
    }
}

export const validacionError = () => {
    return {
        type: LOGIN_USER_ERROR   
    }
}

