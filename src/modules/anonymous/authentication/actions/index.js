import { ACTIONS, ENDPOINT } from "./../constants"
import { CALL_API, HTTP_METHODS, SAVE_SESSION, DELETE_SESSION } from "./../../../../constants"


export const clearError = () => ({
  type: ACTIONS.CLEAR_ERRORS
})


export const login = (payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.ACCOUNT_LOGIN_INIT,
        success: [SAVE_SESSION, ACTIONS.ACCOUNT_LOGIN_SUCCEDED],
        fail: ACTIONS.ACCOUNT_LOGIN_FAILED
      },
      messages: {
        fail: "email ou mot de passe invalide, veuillez réessayer"
      },
      endpoint: ENDPOINT.LOGIN,
      method: HTTP_METHODS.POST
    }
  })


export const fetchInvitation = (token) => 
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_ACCOUNT_INVITATION_INIT,
        success: ACTIONS.FETCH_ACCOUNT_INVITATION_SUCCEDED,
        fail: ACTIONS.FETCH_ACCOUNT_INVITATION_FAILED
      },
      endpoint: ENDPOINT.INVITATION.replace(":param", token),
      method: HTTP_METHODS.GET
    }
  })


export const register = (token, payload) => 
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_ACCOUNT_INIT,
        success: [SAVE_SESSION, ACTIONS.CREATE_ACCOUNT_SUCCEDED],
        fail: ACTIONS.CREATE_ACCOUNT_FAILED
      },
      messages: {
        fail: "Une erreur s'est produite. Veuillez réessayer"
      },
      endpoint: ENDPOINT.REGISTER.replace(":param", token),
      method: HTTP_METHODS.POST
    }
  })


export const logout = () =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.ACCOUNT_LOGOUT_INIT,
        success: [DELETE_SESSION, ACTIONS.ACCOUNT_LOGOUT_SUCCEDED],
        fail: ACTIONS.ACCOUNT_LOGOUT_FAILED
      },
      messages: {
        success: "Vous avez été déconnecté avec succès",
        fail: "Une erreur s'est produite. Veuillez réessayer"
      },
      endpoint: ENDPOINT.LOGOUT,
      method: HTTP_METHODS.POST,
      jwt: true
    }
  })
