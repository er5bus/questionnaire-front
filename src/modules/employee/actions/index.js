import { ACTIONS, ENDPOINT } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../constants"


export const filterEmployees = (searchTerm) =>
  ({
    type: ACTIONS.FILTER_EMPLOYEES,
    payload: { searchTerm }
  })


export const fetchEmployees = (pageNum) => 
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_EMPLOYEES_INIT,
        success: ACTIONS.FETCH_EMPLOYEES_SUCCEDED,
        fail: ACTIONS.FETCH_EMPLOYEES_FAILED
      },
      endpoint: ENDPOINT.EMPLOYEES,
      method: HTTP_METHODS.GET,
      params: { page: pageNum },
      jwt: true
    }
  })


export const clearEmployeeForm = () =>
  ({
    type: ACTIONS.CLEAR_EMPLOYEE_FORM,
  })


export const createEmployee = (payload) => 
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_EMPLOYEE_INIT,
        success: ACTIONS.CREATE_EMPLOYEE_SUCCEDED,
        fail: ACTIONS.CREATE_EMPLOYEE_FAILED 
      },
      messages: {
        success: "Your user has been created successfuly",
        fail: "Something went wrong please try again"
      },
      endpoint: ENDPOINT.EMPLOYEES,
      method: HTTP_METHODS.POST,
      jwt: true
    }
  })


export const editEmployee = (param, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_EMPLOYEE_INIT,
        success: ACTIONS.EDIT_EMPLOYEE_SUCCEDED,
        fail: ACTIONS.EDIT_EMPLOYEE_FAILED
      },
      messages: {
        success: "Your user has been updated successfuly",
        fail: "Something went wrong please try again"
      },
      endpoint: ENDPOINT.EMPLOYEE.replace(":param", param),
      method: HTTP_METHODS.PUT,
      jwt: true
    }
  })


export const fetchEmployee = ({param}) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_EMPLOYEE_INIT,
        success: ACTIONS.FETCH_EMPLOYEE_SUCCEDED,
        fail: ACTIONS.FETCH_EMPLOYEE_FAILED
      },
      endpoint: ENDPOINT.EMPLOYEE.replace(":param", param),
      method: HTTP_METHODS.GET,
      jwt: true
    }
  })

