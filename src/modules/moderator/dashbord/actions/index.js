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
 
export const fetchBreakdownOfFailures = (deparmentParam) => ({
      type: CALL_API,
      meta: {
        actions: {
          init: ACTIONS.FETCH_BREAKDOWN_OF_FAILURES_INIT,
          success: ACTIONS.FETCH_BREAKDOWN_OF_FAILURES_SUCCEDED,
          fail: ACTIONS.FETCH_BREAKDOWN_OF_FAILURES_FAILED
        },
        endpoint: ENDPOINT.BREAKDOWN_OF_FAILURES.replace(":deparmentParam", deparmentParam),
        method: HTTP_METHODS.GET,
        jwt: true
      }
    })
    
    
    export const fetchNeedForInterventions = (deparmentParam) => ({
      type: CALL_API,
      meta: {
        actions: {
          init: ACTIONS.FETCH_NEED_FOR_INTERVENTIONS_INIT,
          success: ACTIONS.FETCH_NEED_FOR_INTERVENTIONS_SUCCEDED,
          fail: ACTIONS.FETCH_NEED_FOR_INTERVENTIONS_FAILED
        },
        endpoint: ENDPOINT.NEED_FOR_INTERVENTIONS.replace(":deparmentParam", deparmentParam),
        method: HTTP_METHODS.GET,
        jwt: true
      }
    })