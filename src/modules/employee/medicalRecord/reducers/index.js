import { ACTIONS } from "./../constants";


export default (state = { medicalRecordCreated: {}, isLoading: false, error: null, isLoadingRecord: false }, action) => {
  const { payload, type } = action
  switch (type) {
    case ACTIONS.CREATE_MEDICAL_RECORD_INIT: {
      return { ...state, isLoading: true }
    }
    case ACTIONS.CREATE_MEDICAL_RECORD_SUCCEDED: {
      return { ...state, medicalRecordCreated: payload, isLoading: false }
    }
    case ACTIONS.CREATE_MEDICAL_RECORD_FAILED: {
      return { ...state, error: payload, isLoading: false, medicalRecordCreated: {} }
    }
    case ACTIONS.RETEIVE_MEDICAL_RECORD_INIT: {
      return { ...state, isLoadingRecord: true }
    }
    case ACTIONS.RETEIVE_MEDICAL_RECORD_SUCCEDED: {
      return { ...state, medicalRecordCreated: payload, isLoadingRecord: false }
    }
    case ACTIONS.RETEIVE_MEDICAL_RECORD_FAILED: {
      return { ...state, medicalRecordCreated: {}, isLoadingRecord: false }
    }
    default: {
      return state
    }
  }
}
