import { ACTIONS, ENDPOINT } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../constants"


export const filterDepartments = (searchTerm) =>
  ({
    type: ACTIONS.FILTER_DEPARTMENTS,
    payload: { searchTerm }
  })


export const fetchDepartments = (pageNum) => 
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_DEPARTMENTS_INIT,
        success: ACTIONS.FETCH_DEPARTMENTS_SUCCEDED,
        fail: ACTIONS.FETCH_DEPARTMENTS_FAILED
      },
      endpoint: ENDPOINT.DEPARTMENTS,
      method: HTTP_METHODS.GET,
      params: { page: pageNum },
      jwt: true
    }
  })


export const clearDepartmentForm = () =>
  ({
    type: ACTIONS.CLEAR_DEPARTMENT_FORM,
  })


export const createDepartment = (payload) => 
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_DEPARTMENT_INIT,
        success: ACTIONS.CREATE_DEPARTMENT_SUCCEDED,
        fail: ACTIONS.CREATE_DEPARTMENT_FAILED 
      },
      messages: {
        success: "Your user has been created successfuly",
        fail: "Something went wrong please try again"
      },
      endpoint: ENDPOINT.DEPARTMENTS,
      method: HTTP_METHODS.POST,
      jwt: true
    }
  })


export const editDepartment = (param, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_DEPARTMENT_INIT,
        success: ACTIONS.EDIT_DEPARTMENT_SUCCEDED,
        fail: ACTIONS.EDIT_DEPARTMENT_FAILED
      },
      messages: {
        success: "Your user has been updated successfuly",
        fail: "Something went wrong please try again"
      },
      endpoint: ENDPOINT.DEPARTMENT.replace(":param", param),
      method: HTTP_METHODS.PUT,
      jwt: true
    }
  })


export const fetchDepartment = ({param}) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_DEPARTMENT_INIT,
        success: ACTIONS.FETCH_DEPARTMENT_SUCCEDED,
        fail: ACTIONS.FETCH_DEPARTMENT_FAILED
      },
      endpoint: ENDPOINT.DEPARTMENT.replace(":param", param),
      method: HTTP_METHODS.GET,
      jwt: true
    }
  })

