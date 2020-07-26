import { ACTIONS, ENDPOINT } from "./../constants"
import { CALL_API, HTTP_METHODS, SAVE_SESSION, DELETE_SESSION } from "./../../../../constants"


export const createMedicalRecord = (companyParam, payload) =>
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
        success: "Your medical record has been created successfuly",
        fail: "Something went wrong please try again"
      },
      endpoint: ENDPOINT.MANAGER_INVITATIONS.replace(":companyParam", companyParam),
      method: HTTP_METHODS.POST,
      jwt: true
    }
  })
