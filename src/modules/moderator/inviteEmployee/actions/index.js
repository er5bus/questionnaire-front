import { ACTIONS, ENDPOINT } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../constants"


export const filterInvitations = (searchTerm) =>
  ({
    type: ACTIONS.FILTER_EMPLOYEE_INVITATION,
    payload: { searchTerm }
  })


export const fetchInvitations = ( departmentParam, pageNum) => 
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_EMPLOYEE_INVITATIONS_INIT,
        success: ACTIONS.FETCH_EMPLOYEE_INVITATIONS_SUCCEDED,
        fail: ACTIONS.FETCH_EMPLOYEE_INVITATIONS_FAILED
      },
      endpoint: ENDPOINT.EMPLOYEE_INVITATIONS.replace(":departmentParam", departmentParam),
      method: HTTP_METHODS.GET,
      params: { page: pageNum },
      jwt: true
    }
  })


export const clearInvitationStore = () =>
  ({
    type: ACTIONS.CLEAR_EMPLOYEE_INVITATION_STORE,
  })


export const createInvitation = (departmentParam, payload) => 
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_EMPLOYEE_INVITATION_INIT,
        success: ACTIONS.CREATE_EMPLOYEE_INVITATION_SUCCEDED,
        fail: ACTIONS.CREATE_EMPLOYEE_INVITATION_FAILED 
      },
      messages: {
        success: "Votre invitation a été créée avec succès",
        fail: "Une erreur s'est produite. Veuillez réessayer"
      },
      endpoint: ENDPOINT.EMPLOYEE_INVITATIONS.replace(":departmentParam", departmentParam),
      method: HTTP_METHODS.POST,
      jwt: true
    }
  })


export const editInvitation = (departmentParam, employeeParam, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_EMPLOYEE_INVITATION_INIT,
        success: ACTIONS.EDIT_EMPLOYEE_INVITATION_SUCCEDED,
        fail: ACTIONS.EDIT_EMPLOYEE_INVITATION_FAILED
      },
      messages: {
        success: "Votre invitation a été mise à jour avec succès",
        fail: "Une erreur s'est produite. Veuillez réessayer"
      },
      endpoint: ENDPOINT.EMPLOYEE_INVITATION.replace(":departmentParam", departmentParam).replace(":employeeParam", employeeParam),
      method: HTTP_METHODS.PUT,
      jwt: true
    }
  })


export const deleteInvitation = (departmentParam, employeeParam) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DELETE_EMPLOYEE_INVITATION_INIT,
        success: ACTIONS.DELETE_EMPLOYEE_INVITATION_SUCCEDED,
        fail: ACTIONS.DELETE_EMPLOYEE_INVITATION_FAILED
      },
      messages: {
        success: "Votre invitation a été supprimée avec succès",
        fail: "Une erreur s'est produite. Veuillez réessayer"
      },
      endpoint: ENDPOINT.EMPLOYEE_INVITATION.replace(":departmentParam", departmentParam).replace(":employeeParam", employeeParam),
      extraData: { id: employeeParam },
      method: HTTP_METHODS.DELETE,
      jwt: true
    }
  })

export const sendInvitation = (departmentParam, employeeParam) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.SEND_EMPLOYEE_INVITATION_INIT,
        success: ACTIONS.SEND_EMPLOYEE_INVITATION_SUCCEDED,
        fail: ACTIONS.SEND_EMPLOYEE_INVITATION_FAILED
      },
      messages: {
        success: "Votre invitation a été envoyée avec succès",
        fail: "Une erreur s'est produite. Veuillez réessayer"
      },
      endpoint: ENDPOINT.SEND_EMPLOYEE_INVITATION.replace(":departmentParam", departmentParam).replace(":employeeParam", employeeParam),
      method: HTTP_METHODS.POST,
      jwt: true
    }
  })

export const fetchInvitation = ({departmentParam, employeeParam}) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_EMPLOYEE_INVITATION_INIT,
        success: ACTIONS.FETCH_EMPLOYEE_INVITATION_SUCCEDED,
        fail: ACTIONS.FETCH_EMPLOYEE_INVITATION_FAILED
      },
      endpoint: ENDPOINT.EMPLOYEE_INVITATION.replace(":departmentParam", departmentParam).replace(":employeeParam", employeeParam),
      method: HTTP_METHODS.GET,
      jwt: true
    }
  })

