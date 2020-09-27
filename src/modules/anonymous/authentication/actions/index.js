import { CALL_API, DELETE_SESSION, HTTP_METHODS, SAVE_SESSION } from "./../../../../constants";
import { ACTIONS, ENDPOINT } from "./../constants";


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
        success: "Welcome back.",
        fail: "Invalid email or password."
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
        success: "Welcome to your account",
        fail: "Something went wrong please try again"
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
        success: [DELETE_SESSION, ACTIONS.ACCOUNT_LOGOUT_SUCCEDED, ACTIONS.CLEAN_CACH],
        fail: ACTIONS.ACCOUNT_LOGOUT_FAILED
      },
      messages: {
        success: "You've been logged out successfully",
        fail: "Something went wrong please try again"
      },
      endpoint: ENDPOINT.LOGOUT,
      method: HTTP_METHODS.POST,
      jwt: true
    }
  })
