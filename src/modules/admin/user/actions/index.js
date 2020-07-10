import { ACTIONS, ENDPOINT } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../constants"


export const filterUsers = (searchTerm) =>
  ({
    type: ACTIONS.FILTER_USERS,
    payload: { searchTerm }
  })


export const fetchUsers = (pageNum) => 
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_USERS_INIT,
        success: ACTIONS.FETCH_USERS_SUCCEDED,
        fail: ACTIONS.FETCH_USERS_FAILED
      },
      endpoint: ENDPOINT.USERS,
      method: HTTP_METHODS.GET,
      params: { page: pageNum },
      jwt: true
    }
  })


export const clearUserForm = () =>
  ({
    type: ACTIONS.CLEAR_USER_FORM,
  })


export const createUser = (payload) => 
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_USER_INIT,
        success: ACTIONS.CREATE_USER_SUCCEDED,
        fail: ACTIONS.CREATE_USER_FAILED 
      },
      messages: {
        success: "Your user has been created successfuly",
        fail: "Something went wrong please try again"
      },
      endpoint: ENDPOINT.USERS,
      method: HTTP_METHODS.POST,
      jwt: true
    }
  })


export const editUser = (param, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_USER_INIT,
        success: ACTIONS.EDIT_USER_SUCCEDED,
        fail: ACTIONS.EDIT_USER_FAILED
      },
      messages: {
        success: "Your user has been updated successfuly",
        fail: "Something went wrong please try again"
      },
      endpoint: ENDPOINT.USER.replace(":param", param),
      method: HTTP_METHODS.PUT,
      jwt: true
    }
  })


export const fetchUser = ({param}) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_USER_INIT,
        success: ACTIONS.FETCH_USER_SUCCEDED,
        fail: ACTIONS.FETCH_USER_FAILED
      },
      endpoint: ENDPOINT.USER.replace(":param", param),
      method: HTTP_METHODS.GET,
      jwt: true
    }
  })

