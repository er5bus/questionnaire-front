import { ACTIONS, ENDPOINT } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../constants"


export const filterInvitations = (searchTerm) =>
  ({
    type: ACTIONS.FILTER_MANAGER_INVITATION,
    payload: { searchTerm }
  })


export const fetchInvitations = ( companyParam, pageNum) => 
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_MANAGER_INVITATIONS_INIT,
        success: ACTIONS.FETCH_MANAGER_INVITATIONS_SUCCEDED,
        fail: ACTIONS.FETCH_MANAGER_INVITATIONS_FAILED
      },
      endpoint: ENDPOINT.MANAGER_INVITATIONS.replace(":companyParam", companyParam),
      method: HTTP_METHODS.GET,
      params: { page: pageNum },
      jwt: true
    }
  })


export const clearInvitationStore = () =>
  ({
    type: ACTIONS.CLEAR_MANAGER_INVITATION_STORE,
  })


export const createInvitation = (companyParam, payload) => 
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_MANAGER_INVITATION_INIT,
        success: ACTIONS.CREATE_MANAGER_INVITATION_SUCCEDED,
        fail: ACTIONS.CREATE_MANAGER_INVITATION_FAILED 
      },
      messages: {
        success: "Your invitation has been created successfuly",
        fail: "Something went wrong please try again"
      },
      endpoint: ENDPOINT.MANAGER_INVITATIONS.replace(":companyParam", companyParam),
      method: HTTP_METHODS.POST,
      jwt: true
    }
  })


export const editInvitation = (companyParam, managerParam, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_MANAGER_INVITATION_INIT,
        success: ACTIONS.EDIT_MANAGER_INVITATION_SUCCEDED,
        fail: ACTIONS.EDIT_MANAGER_INVITATION_FAILED
      },
      messages: {
        success: "Your invitation has been updated successfuly",
        fail: "Something went wrong please try again"
      },
      endpoint: ENDPOINT.MANAGER_INVITATION.replace(":companyParam", companyParam).replace(":managerParam", managerParam),
      method: HTTP_METHODS.PUT,
      jwt: true
    }
  })


export const deleteInvitation = (companyParam, managerParam) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DELETE_MANAGER_INVITATION_INIT,
        success: ACTIONS.DELETE_MANAGER_INVITATION_SUCCEDED,
        fail: ACTIONS.DELETE_MANAGER_INVITATION_FAILED
      },
      messages: {
        success: "Your invitation has been deleted successfuly",
        fail: "Something went wrong please try again"
      },
      endpoint: ENDPOINT.MANAGER_INVITATION.replace(":companyParam", companyParam).replace(":managerParam", managerParam),
      extraData: { id: managerParam },
      method: HTTP_METHODS.DELETE,
      jwt: true
    }
  })

export const sendInvitation = (companyParam, managerParam) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.SEND_MANAGER_INVITATION_INIT,
        success: ACTIONS.SEND_MANAGER_INVITATION_SUCCEDED,
        fail: ACTIONS.SEND_MANAGER_INVITATION_FAILED
      },
      messages: {
        success: "Your invitation has been sent successfuly",
        fail: "Something went wrong please try again"
      },
      endpoint: ENDPOINT.SEND_MANAGER_INVITATION.replace(":companyParam", companyParam).replace(":managerParam", managerParam),
      method: HTTP_METHODS.POST,
      jwt: true
    }
  })

export const fetchInvitation = ({companyParam, managerParam}) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_MANAGER_INVITATION_INIT,
        success: ACTIONS.FETCH_MANAGER_INVITATION_SUCCEDED,
        fail: ACTIONS.FETCH_MANAGER_INVITATION_FAILED
      },
      endpoint: ENDPOINT.MANAGER_INVITATION.replace(":companyParam", companyParam).replace(":managerParam", managerParam),
      method: HTTP_METHODS.GET,
      jwt: true
    }
  })

