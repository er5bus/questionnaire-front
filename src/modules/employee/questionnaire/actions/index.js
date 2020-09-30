import { CALL_API, CALL_FOOD_API, CALL_QUESTION_API, HTTP_METHODS } from './../../../../constants';
import { ACTIONS, ENDPOINT } from './../constants';


export const nextPage = () =>
  ({
    type: ACTIONS.NEXT_PAGE,
  })


export const prevPage = () =>
  ({
    type: ACTIONS.PREV_PAGE,
  })

export const tasksEnded = () =>
  ({
    type: ACTIONS.TASKES_ENDED,
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
export const nextOtherQuestionsSection = () => ({
  type: ACTIONS.NEXT_OTHER_QUESTIONS_SECTION
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
export const updateSelectedScoreNutrition = (payload) => ({
  type: ACTIONS.UPDATE_SELECTED_SCORE,
  payload
});
export const updateDeSelectedScoreNutrition = (payload) => ({
  type: ACTIONS.UPDATE_DESELECTED_SCORE,
  payload
});
export const updateotherSectionQuestionToUse = (payload) => ({
  type: ACTIONS.UPDATE_OTHER_QUESTION_TO_USE,
  payload
})
export const updateScore = (payload) => ({
  type: ACTIONS.UPDATE_SCORE,
  payload
})
export const changePage = (payload) => ({
  type: ACTIONS.CHANGE_PAGE,
  payload
})
export const changePageAfterSelection = () => ({
  type: ACTIONS.CHANGE_PAGE_AFTER_SELECTION,
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
export const nextSectionThird = (payload) => ({
  type: ACTIONS.NEXT_SECTION_THIRD,
  payload
})
export const nextSectionFourth = (payload) => ({
  type: ACTIONS.NEXT_SECTION_FOURTH,
  payload
})

export const saveNutriState = (payload) => ({
  type: ACTIONS.SAVE_NUTRI_STATE,
  payload
})

export const saveScoresUser = (payload) => ({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.SAVE_SCORES_INIT,
      success: ACTIONS.SAVE_SCORES_SUCCEDED,
      fail: ACTIONS.SAVE_SCORES_FAILED
    },
    jwt: true,
    userId: true,
    endpoint: ENDPOINT.SAVE_SCORS,
    method: HTTP_METHODS.POST,
  }
})

export const getUserHistory = () => ({
  type: CALL_API,
  meta: {
    actions: {
      init: ACTIONS.GET_STATE_INIT,
      success: ACTIONS.GET_STATE_SUCCEDED,
      fail: ACTIONS.GET_STATE_FAILED
    },
    jwt: true,
    endpoint: ENDPOINT.HISTORY_SAVE,
    method: HTTP_METHODS.GET,
  }
})
export const saveUserState = (payload) => ({
  type: CALL_API,
  payload,
  meta: {
    actions: {
      init: ACTIONS.SAVE_STATE_INIT,
      success: ACTIONS.SAVE_STATE_SUCCEDED,
      fail: ACTIONS.SAVE_STATE_FAILED
    },
    jwt: true,
    endpoint: ENDPOINT.HISTORY_SAVE,
    method: HTTP_METHODS.POST,
  }
})

export const readedInformationsNutri = () => ({
  type: ACTIONS.GO_TO_NUTRUTION
})


export const fillScoresTable = (payload) => ({
  type: ACTIONS.FILL_SCORES,
  payload
})
export const fillSelectedDeselectedNutriScores = (payload) => ({
  type: ACTIONS.FILL_SELECTED_DESELECTED_NUTRI_SCORES,
  payload
})

export const saveQuestionAnswered = (payload) => ({
  type: ACTIONS.SAVE_QUESTION_ANSWER,
  payload
})
export const fetchFoodCategories = () => ({
  type: CALL_FOOD_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_CATEGORY_FOOD_INIT,
      success: ACTIONS.FETCH_CATEGORY_FOOD_SUCCEDED,
      fail: ACTIONS.FETCH_CATEGORY_FOOD_FAILED
    },
    endpoint: ENDPOINT.FOOD_CATEGORY,
    method: HTTP_METHODS.GET,
  }
})
export const fetchFoods = () => ({
  type: CALL_FOOD_API,
  meta: {
    actions: {
      init: ACTIONS.FETCH_FOODS_INIT,
      success: ACTIONS.FETCH_FOODS_SUCCEDED,
      fail: ACTIONS.FETCH_FOODS_FAILED
    },
    endpoint: ENDPOINT.FOOD_FOODS,
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