import { ACTIONS } from './../constants'


export default (state = { 
  page: 1, 
  exit: false, 
  isLoading: false, 
  item: null, 
  error: null, 
  questionsAnswered: [],
  questions: [],
  currentQuestion: { treeparam: "25c33f7013e74540a0d66faa8caee9a3" , nodeparam: "fede40a5aa7c4413a3c7bc25250c704b" } }, action) => {
  const { payload, type } = action
  switch (type) {

    case ACTIONS.NEXT_PAGE : {
      return { ...state, page: state.page + 1 } 
    }

    case ACTIONS.PREV_PAGE : {
      return { ...state, page: state.page - 1 }
    }

    case ACTIONS.EXIT_PAGE : {
      return { ...state, page: 0, exit: true }
    }

    case ACTIONS.NEXT_QUESTION : {
      return { ...state, questionsAnswered: [ ...state.questionsAnswered, state.currentQuestion ], currentQuestion: payload }
    }

    case ACTIONS.FETCH_QUESTION_INIT : {
      return { ...state, isLoading: true, item: null, error: null, success: false }
    }
    case ACTIONS.FETCH_QUESTION_SUCCEDED : {
      return { ...state, item: payload, isLoading: false, error: null }
    }
    case ACTIONS.FETCH_QUESTION_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.FETCH_QUESTION_SCORES_INIT: {
      return { ...state, isLoading: true, AllScores: [] }
    }
    case ACTIONS.FETCH_QUESTION_SCORES_SUCCEDED: {
      return { ...state, isLoading: false, allScores: payload.items }
    }
    case ACTIONS.FETCH_QUESTION_SCORES_FAILED: {
      return { ...state, isLoading: false, error: null }
    }

    default: {
      return state
    }
  }
}
