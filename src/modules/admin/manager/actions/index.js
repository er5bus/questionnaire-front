import { ACTIONS, ENDPOINT } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../constants"


export const filterManagers = (searchTerm) =>
  ({
    type: ACTIONS.FILTER_MANAGERS,
    payload: { searchTerm }
  })


export const fetchManagers = (companyParam, pageNum) => 
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_MANAGERS_INIT,
        success: ACTIONS.FETCH_MANAGERS_SUCCEDED,
        fail: ACTIONS.FETCH_MANAGERS_FAILED
      },
      endpoint: ENDPOINT.MANAGERS.replace(":companyParam", companyParam),
      method: HTTP_METHODS.GET,
      params: { page: pageNum },
      jwt: true
    }
  })


export const clearManagerForm = () =>
  ({
    type: ACTIONS.CLEAR_MANAGER_FORM,
  })


export const createManager = (companyParam, payload) => 
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_MANAGER_INIT,
        success: ACTIONS.CREATE_MANAGER_SUCCEDED,
        fail: ACTIONS.CREATE_MANAGER_FAILED 
      },
      messages: {
        success: "Your user has been created successfuly",
        fail: "Something went wrong please try again"
      },
      endpoint: ENDPOINT.MANAGERS.replace(":companyParam", companyParam),
      method: HTTP_METHODS.POST,
      jwt: true
    }
  })


export const editManager = (companyParam, param, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_MANAGER_INIT,
        success: ACTIONS.EDIT_MANAGER_SUCCEDED,
        fail: ACTIONS.EDIT_MANAGER_FAILED
      },
      messages: {
        success: "Your user has been updated successfuly",
        fail: "Something went wrong please try again"
      },
      endpoint: ENDPOINT.MANAGER.replace(":companyParam", companyParam).replace(":param", param),
      method: HTTP_METHODS.PUT,
      jwt: true
    }
  })


export const fetchManager = ({companyParam, param}) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_MANAGER_INIT,
        success: ACTIONS.FETCH_MANAGER_SUCCEDED,
        fail: ACTIONS.FETCH_MANAGER_FAILED
      },
      endpoint: ENDPOINT.MANAGER.replace(":companyParam", companyParam).replace(":param", param),
      method: HTTP_METHODS.GET,
      jwt: true
    }
  })

