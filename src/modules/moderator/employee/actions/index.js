import { ACTIONS, ENDPOINT } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../constants"


export const filterEmployees = (searchTerm) =>
  ({
    type: ACTIONS.FILTER_EMPLOYEES,
    payload: { searchTerm }
  })


export const fetchEmployees = (departmentParam, pageNum) => 
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_EMPLOYEES_INIT,
        success: ACTIONS.FETCH_EMPLOYEES_SUCCEDED,
        fail: ACTIONS.FETCH_EMPLOYEES_FAILED
      },
      endpoint: ENDPOINT.EMPLOYEES.replace(":departmentParam", departmentParam),
      method: HTTP_METHODS.GET,
      params: { page: pageNum },
      jwt: true
    }
  })


export const clearEmployeeForm = () =>
  ({
    type: ACTIONS.CLEAR_EMPLOYEE_FORM,
  })


export const createEmployee = (departmentParam, payload) => 
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
        success: "Votre utilisateur a été créé avec succès",
        fail: "Something went wrong please try again"
      },
      endpoint: ENDPOINT.EMPLOYEES.replace(":departmentParam", departmentParam),
      method: HTTP_METHODS.POST,
      jwt: true
    }
  })


export const editEmployee = (departmentParam, param, payload) =>
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
        success: "Votre utilisateur a été mis à jour avec succès",
        fail: "Something went wrong please try again"
      },
      endpoint: ENDPOINT.EMPLOYEE.replace(":departmentParam", departmentParam).replace(":param", param),
      method: HTTP_METHODS.PUT,
      jwt: true
    }
  })


export const fetchEmployee = ({departmentParam, param}) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_EMPLOYEE_INIT,
        success: ACTIONS.FETCH_EMPLOYEE_SUCCEDED,
        fail: ACTIONS.FETCH_EMPLOYEE_FAILED
      },
      endpoint: ENDPOINT.EMPLOYEE.replace(":departmentParam", departmentParam).replace(":param", param),
      method: HTTP_METHODS.GET,
      jwt: true
    }
  })

