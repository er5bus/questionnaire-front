import { ACTIONS, ENDPOINT } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../constants"


export const filterCompanies = (searchTerm) =>
  ({
    type: ACTIONS.FILTER_COMPANIES,
    payload: { searchTerm }
  })


export const fetchCompanies = (pageNum) => 
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_COMPANIES_INIT,
        success: ACTIONS.FETCH_COMPANIES_SUCCEDED,
        fail: ACTIONS.FETCH_COMPANIES_FAILED
      },
      endpoint: ENDPOINT.COMPANIES,
      method: HTTP_METHODS.GET,
      params: { page: pageNum },
      jwt: true
    }
  })


export const clearCompanyForm = () =>
  ({
    type: ACTIONS.CLEAR_COMPANY_FORM,
  })

export const createCompany = (payload) => 
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_COMPANY_INIT,
        success: ACTIONS.CREATE_COMPANY_SUCCEDED,
        fail: ACTIONS.CREATE_COMPANY_FAILED 
      },
      messages: {
        success: "Votre entreprise a été créée avec succès",
        fail: "Une erreur s'est produite. Veuillez réessayer"
      },
      endpoint: ENDPOINT.COMPANIES,
      method: HTTP_METHODS.POST,
      jwt: true
    }
  })


export const editCompany = (param, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_COMPANY_INIT,
        success: ACTIONS.EDIT_COMPANY_SUCCEDED,
        fail: ACTIONS.EDIT_COMPANY_FAILED
      },
      messages: {
        success: "Votre entreprise a été mise à jour avec succès",
        fail: "Une erreur s'est produite. Veuillez réessayer"
      },
      endpoint: ENDPOINT.COMPANY.replace(":param", param),
      method: HTTP_METHODS.PUT,
      jwt: true
    }
  })


export const deleteCompany = (param) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DELETE_COMPANY_INIT,
        success: ACTIONS.DELETE_COMPANY_SUCCEDED,
        fail: ACTIONS.DELETE_COMPANY_FAILED
      },
      messages: {
        success: "Votre entreprise a été supprimée avec succès",
        fail: "Une erreur s'est produite. Veuillez réessayer"
      },
      endpoint: ENDPOINT.COMPANY.replace(":param", param),
      extraData: { id: param },
      method: HTTP_METHODS.DELETE,
      jwt: true
    }
  })


export const fetchCompany = ({param}) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_COMPANY_INIT,
        success: ACTIONS.FETCH_COMPANY_SUCCEDED,
        fail: ACTIONS.FETCH_COMPANY_FAILED
      },
      endpoint: ENDPOINT.COMPANY.replace(":param", param),
      method: HTTP_METHODS.GET,
      jwt: true
    }
  })

