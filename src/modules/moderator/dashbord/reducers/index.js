 import { ACTIONS } from "./../constants"


export default (state = { isLoading: false , needForInterventions: null, departments: [], breakdownOfFailures: null,error: null }, action) => {
  const {  payload,  type } = action
  switch (type) {

         case ACTIONS.FETCH_DEPARMTNETS_INIT : {
             return { ...state, isLoading: true, error: null }
           }
           case ACTIONS.FETCH_DEPARMTNETS_SUCCEDED : {
            
             return { ...state, departments: payload.results || [], isLoading: false, error: null }
           }
           case ACTIONS.FETCH_DEPARMTNETS_FAILED : {
             return { ...state, error: payload, isLoading: false }
           }
 
     case ACTIONS.FETCH_BREAKDOWN_OF_FAILURES_INIT : {
       return { ...state, isLoading: true, error: null }
     }
     case ACTIONS.FETCH_BREAKDOWN_OF_FAILURES_SUCCEDED : {
       return { ...state, breakdownOfFailures: payload, isLoading: false, error: null }
     }
     case ACTIONS.FETCH_BREAKDOWN_OF_FAILURES_FAILED : {
       return { ...state, error: payload, isLoading: false }
     }
 
     case ACTIONS.FETCH_NEED_FOR_INTERVENTIONS_INIT : {
       return { ...state, isLoading: true, error: null }
     }
     case ACTIONS.FETCH_NEED_FOR_INTERVENTIONS_SUCCEDED : {
       return { ...state, needForInterventions: payload, isLoading: false, error: null }
     }
     case ACTIONS.FETCH_NEED_FOR_INTERVENTIONS_FAILED : {
       return { ...state, error: payload, isLoading: false }
     }

    default: {
      return state
    }
  }
}
