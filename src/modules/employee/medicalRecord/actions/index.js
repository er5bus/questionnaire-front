import { CALL_API, HTTP_METHODS } from "./../../../../constants";
import { ACTIONS, ENDPOINT } from "./../constants";


export const createMedicalRecord = (payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_MEDICAL_RECORD_INIT,
        success: ACTIONS.CREATE_MEDICAL_RECORD_SUCCEDED,
        fail: ACTIONS.CREATE_MEDICAL_RECORD_FAILED
      },
      messages: {
        success: "Your medical record has been created successfuly",
        fail: "Something went wrong please try again"
      },
      endpoint: ENDPOINT.CREATE_MEDICAL_RECORD,
      method: HTTP_METHODS.POST,
      jwt: true
    }
  })
export const retriveMedicalRecord = () =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.RETEIVE_MEDICAL_RECORD_INIT,
        success: ACTIONS.RETEIVE_MEDICAL_RECORD_SUCCEDED,
        fail: ACTIONS.RETEIVE_MEDICAL_RECORD_FAILED
      },
      messages: {
        fail: "Something went wrong please try again"
      },
      endpoint: ENDPOINT.RETEIVE_MEDICAL_RECORD,
      method: HTTP_METHODS.GET,
      jwt: true
    }
  })
