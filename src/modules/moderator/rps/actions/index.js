import { ACTIONS, ENDPOINT } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../constants"


export const fetchAlldepartment = (companyParam) => ({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_DEPARMTNETS_INIT,
      success: ACTIONS.FETCH_DEPARMTNETS_SUCCEDED,
      fail: ACTIONS.FETCH_DEPARMTNETS_FAILED
    },
    endpoint: ENDPOINT.ALL_DEPARTMENTS.replace(":companyParam", companyParam),
    method: HTTP_METHODS.GET,
    jwt: true
  }
})


export const fetchDetailsOfTroubles = (deparmentParam, params) => ({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_DETAILS_OF_TROUBLES_INIT,
      success: ACTIONS.FETCH_DETAILS_OF_TROUBLES_SUCCEDED,
      fail: ACTIONS.FETCH_DETAILS_OF_TROUBLES_FAILED
    },
    endpoint: ENDPOINT.DETAILS_OF_TROUBLES.replace(":deparmentParam", deparmentParam),
    method: HTTP_METHODS.GET,
    params,
    jwt: true
  }
})


export const fetchNeedForInterventions = (deparmentParam, params) => ({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_NEED_FOR_INTERVENTIONS_INIT,
      success: ACTIONS.FETCH_NEED_FOR_INTERVENTIONS_SUCCEDED,
      fail: ACTIONS.FETCH_NEED_FOR_INTERVENTIONS_FAILED
    },
    endpoint: ENDPOINT.NEED_FOR_INTERVENTIONS.replace(":deparmentParam", deparmentParam),
    method: HTTP_METHODS.GET,
    params,
    jwt: true
  }
})
