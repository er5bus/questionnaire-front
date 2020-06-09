import { ACTIONS, ENDPOINT } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../constants"


export const filterInvitations = (searchTerm) =>
  ({
    type: ACTIONS.FILTER_COMPANY_INVITATIONS,
    payload: { searchTerm }
  })


export const fetchInvitations = (pageNum) => 
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_COMPANY_INVITATIONS_INIT,
        success: ACTIONS.FETCH_COMPANY_INVITATIONS_SUCCEDED,
        fail: ACTIONS.FETCH_COMPANY_INVITATIONS_FAILED
      },
      endpoint: ENDPOINT.COMPANY_INVITATIONS,
      method: HTTP_METHODS.GET,
      params: { page: pageNum },
      jwt: true
    }
  })


export const clearInvitationForm = () =>
  ({
    type: ACTIONS.CLEAR_COMPANY_INVITATION_FORM,
  })


export const createInvitation = (payload) => 
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_COMPANY_INVITATION_INIT,
        success: ACTIONS.CREATE_COMPANY_INVITATION_SUCCEDED,
        fail: ACTIONS.CREATE_COMPANY_INVITATION_FAILED 
      },
      messages: {
        success: "Your invitation has been created successfuly",
        fail: "Something went wrong please try again"
      },
      endpoint: ENDPOINT.COMPANY_INVITATIONS,
      method: HTTP_METHODS.POST,
      jwt: true
    }
  })


export const sendEmail = (payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.SEND_COMPANY_INVITATION_INIT,
        success: ACTIONS.SEND_COMPANY_INVITATION_SUCCEDED,
        fail: ACTIONS.SEND_COMPANY_INVITATION_FAILED
      },
      messages: {
        success: "Your invitation has been sent successfuly",
        fail: "Something went wrong please try again"
      },
      endpoint: ENDPOINT.COMPANY_SEND_INVITATIONS,
      method: HTTP_METHODS.POST,
      jwt: true
    }
  })


export const editInvitation = (param, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_COMPANY_INVITATION_INIT,
        success: ACTIONS.EDIT_COMPANY_INVITATION_SUCCEDED,
        fail: ACTIONS.EDIT_COMPANY_INVITATION_FAILED
      },
      messages: {
        success: "Your invitation has been updated successfuly",
        fail: "Something went wrong please try again"
      },
      endpoint: ENDPOINT.COMPANY_INVITATION.replace(":param", param),
      method: HTTP_METHODS.PUT,
      jwt: true
    }
  })


export const deleteInvitation = (param) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DELETE_COMPANY_INVITATION_INIT,
        success: ACTIONS.DELETE_COMPANY_INVITATION_SUCCEDED,
        fail: ACTIONS.DELETE_COMPANY_INVITATION_FAILED
      },
      messages: {
        success: "Your invitation has been deleted successfuly",
        fail: "Something went wrong please try again"
      },
      endpoint: ENDPOINT.COMPANY_INVITATION.replace(":param", param),
      extraData: { id: param },
      method: HTTP_METHODS.DELETE,
      jwt: true
    }
  })


export const fetchInvitation = ({param}) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_COMPANY_INVITATION_INIT,
        success: ACTIONS.FETCH_COMPANY_INVITATION_SUCCEDED,
        fail: ACTIONS.FETCH_COMPANY_INVITATION_FAILED
      },
      endpoint: ENDPOINT.COMPANY_INVITATION.replace(":param", param),
      method: HTTP_METHODS.GET,
      jwt: true
    }
  })

