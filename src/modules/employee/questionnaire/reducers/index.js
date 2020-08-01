import { ACTIONS } from './../constants';


export default (state = {
  page: 1,
  exit: false,
  isLoading: false,
  item: null,
  error: null,
  selectedPartBody: [],
  selectedPartBodyID: [],
  questionsAnswered: [],
  questions: [],
  currentQuestion: { treeparam: "", nodeparam: "" },
  selectedPartBodyToUse: [],
  isLoadingSectionBody: false,
  selectedPartBodyIDToUse: [],
}, action) => {
  const { payload, type } = action
  switch (type) {

    case ACTIONS.NEXT_PAGE: {
      return { ...state, page: state.page + 1 }
    }

    case ACTIONS.PREV_PAGE: {
      return { ...state, page: state.page - 1 }
    }

    case ACTIONS.EXIT_PAGE: {
      return { ...state, page: 0, exit: true }
    }

    case ACTIONS.NEXT_QUESTION: {
      return { ...state, questionsAnswered: [...state.questionsAnswered, state.currentQuestion], currentQuestion: payload }
    }

    case ACTIONS.FETCH_QUESTION_INIT: {
      return { ...state, isLoading: true, item: null, error: null, success: false }
    }
    case ACTIONS.FETCH_QUESTION_SUCCEDED: {
      return { ...state, item: payload, isLoading: false, error: null, isLoadingSectionBody: false }
    }
    case ACTIONS.FETCH_QUESTION_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.FETCH_QUESTION_SCORES_INIT: {
      return { ...state, isLoading: true, AllScores: [] }
    }
    case ACTIONS.FETCH_QUESTION_SCORES_SUCCEDED: {
      return { ...state, isLoading: false, allScores: payload.items, isLoadingSectionBody: false }
    }
    case ACTIONS.FETCH_QUESTION_SCORES_FAILED: {
      return { ...state, isLoading: false, error: null }
    }
    case ACTIONS.SELECT_DISELECT_FROM_BODY: {
      var newSeletedbody = [...state.selectedPartBody]
      var newSeletedbodyID = [...state.selectedPartBodyID]
      if (newSeletedbody.includes(payload.value)) {
        let index = newSeletedbody.indexOf(payload.value)
        newSeletedbody.splice(index, 1)
        newSeletedbodyID.splice(index, 1)
      } else {
        newSeletedbody.push(payload.value)
        newSeletedbodyID.push(payload.id)
      }
      return { ...state, selectedPartBody: newSeletedbody, selectedPartBodyToUse: newSeletedbody, selectedPartBodyID: newSeletedbodyID, selectedPartBodyIDToUse: newSeletedbodyID }
    }
    case ACTIONS.NEXT_SELECTED_FROM_BODY_QUESTION: {
      var newArray = [...state.selectedPartBodyToUse];
      var newArrayID = [...state.selectedPartBodyIDToUse]
      if (newArray.length > 0) {
        newArray.shift();
        newArrayID.shift();
      }
      return { ...state, selectedPartBodyToUse: newArray, isLoadingSectionBody: true, selectedPartBodyIDToUse: newArrayID }
    }
    case ACTIONS.ASK_SCREEN: {
      return { ...state, isLoadingSectionBody: false }
    }

    default: {
      return state
    }
  }
}
