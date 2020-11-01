import { ACTIONS } from "./../constants"


export default (state = { isLoading: false, needForInterventions: null, departments: [], detailsOfTrouble: null, error: null }, action) => {
  const { payload, type } = action
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

    case ACTIONS.FETCH_DETAILS_OF_TROUBLES_INIT : {
      return { ...state, isLoading: true, error: null }
    }
    case ACTIONS.FETCH_DETAILS_OF_TROUBLES_SUCCEDED : {
      return { ...state, detailsOfTrouble: payload, isLoading: false, error: null }
    }
    case ACTIONS.FETCH_DETAILS_OF_TROUBLES_FAILED : {
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
