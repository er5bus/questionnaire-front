import { CALL_QUESTION_API, /*CALL_API,*/ HTTP_METHODS } from './../../../../constants';
import { ACTIONS, ENDPOINT } from './../constants';


export const nextPage = () =>
  ({
    type: ACTIONS.NEXT_PAGE,
  })


export const prevPage = () =>
  ({
    type: ACTIONS.PREV_PAGE,
  })


export const exitPage = () =>
  ({
    type: ACTIONS.EXIT_PAGE
  })


export const changeCurrentQuestion = (payload) =>
  ({
    type: ACTIONS.NEXT_QUESTION,
    payload
  })
export const selectDiselectPartBody = (payload) =>
  ({
    type: ACTIONS.SELECT_DISELECT_FROM_BODY,
    payload
  })
export const nextSelectedFromBodyQuestions = () => ({
  type: ACTIONS.NEXT_SELECTED_FROM_BODY_QUESTION
})
export const askContinueScreen = () => ({
  type: ACTIONS.ASK_SCREEN
})
export const fetchQuestionScores = ({ treeparam }) =>
  ({
    type: CALL_QUESTION_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_QUESTION_SCORES_INIT,
        success: ACTIONS.FETCH_QUESTION_SCORES_SUCCEDED,
        fail: ACTIONS.FETCH_QUESTION_SCORES_FAILED
      },
      endpoint: ENDPOINT.QUESTION_SCORES.replace(":treeparam", treeparam),
      method: HTTP_METHODS.GET,
    }
  })

export const updateScore = (payload) => ({
  type: ACTIONS.UPDATE_SCORE,
  payload
})
export const fetchQuestion = ({ treeparam, nodeparam }) =>
  ({
    type: CALL_QUESTION_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_QUESTION_INIT,
        success: ACTIONS.FETCH_QUESTION_SUCCEDED,
        fail: ACTIONS.FETCH_QUESTION_FAILED
      },
      endpoint: ENDPOINT.QUESTION.replace(":treeparam", treeparam).replace(":nodeparam", nodeparam),
      method: HTTP_METHODS.GET,
    }
  })
export const getTreeNodeParamsForSelectedBodyArea = (payload) => ({
  type: CALL_QUESTION_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.GET_TREE_NODE_PARAMS_INIT,
      success: ACTIONS.GET_TREE_NODE_PARAMS_SUCCEDED,
      fail: ACTIONS.GET_TREE_NODE_PARAMS_FAILED
    },
    endpoint: ENDPOINT.QUESTION,
    method: HTTP_METHODS.GET
  }
})