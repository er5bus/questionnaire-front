import { ACTIONS, otherSectionToUseQuestions } from './../constants';


export default (state = {
  rapport : null,
  isLoading: false
}, action) => {
  const { payload, type } = action
 
  
  switch (type) {
    case ACTIONS.GET_STATE_INIT: {
      return { ...state, isLoadingUserState: true }
    }
    case ACTIONS.SAVE_SCORES_SUCCEDED: {
      return { ...state, scorsSaved: true }
    }
    case ACTIONS.SAVE_SCORES_FAILED: {
      return { ...state, rapport: false }
    }
    case ACTIONS.GET_SCORES_SUCCEDED: {
     
      return { ...state, isLoading: true, rapport: payload.items[0].questionCategories }
    }
    case ACTIONS.GET_SCORES_FAILED: {
      return { ...state, isLoading: false, error: payload }
    }
    case ACTIONS.GET_STATE_SUCCEDED: {
      let newState = payload

      if (Object.entries(newState).length) {
        Object.assign(state, newState)
        return { ...state, isLoadingUserState: false }
      }
      return { ...state, isLoadingUserState: false }

    }
    case ACTIONS.UPDATE_OTHER_QUESTION_TO_USE: {
      let newArraySections = [...otherSectionToUseQuestions]
      switch (payload) {
        case 5:
          newArraySections.splice(0, 2)
          return newArraySections
        case 6:
          newArraySections.splice(0, 1)
          return newArraySections
        default:
          break;
      }
      return { ...state, otherSectionQuestionToUse: newArraySections }
    }
    case ACTIONS.SAVE_NUTRI_STATE: {

      if (payload.Breakfast) {
        return { ...state, periodeNut: payload.periodeNut, Breakfast: payload.Breakfast }

      } else if (payload.Lunch) {
        return { ...state, periodeNut: payload.periodeNut, Lunch: payload.Lunch }

      } else if (payload.Snack) {
        return { ...state, periodeNut: payload.periodeNut, Snack: payload.Snack }

      } else if (payload.Dinner) {
        return { ...state, periodeNut: payload.periodeNut, Dinner: payload.Dinner }

      } else {
        return state
      }


    }

    case ACTIONS.NEXT_SECTION_THIRD: {
      return { ...state, nextSectionThirdState: true }
    }
    case ACTIONS.NEXT_SECTION_FOURTH: {
      return { ...state, nextSectionFourthState: payload }
    }
    case ACTIONS.NEXT_PAGE: {

      return { ...state, page: state.page + 1 }
    }

    case ACTIONS.PREV_PAGE: {

      return { ...state, page: state.page - 1 }
    }
    case ACTIONS.TASKES_ENDED: {

      return { ...state, tasksEnded: true }
    }
    case ACTIONS.UPDATE_SCORE: {
      let newArrayScores = [...state.scores]
      if (newArrayScores.length > 0) {
        for (let i = 0; i < payload.length; i++) {
          let indexScore = newArrayScores.map(el => el.id).indexOf(payload[i].id);
          if (indexScore > -1) {
            newArrayScores[indexScore] = { id: payload[i].id, value: newArrayScores[indexScore].value + payload[i].value, name: payload[i].name }
          } else {
            newArrayScores.push(payload[i])
          }
        }
      } else {
        newArrayScores = payload
      }

      return { ...state, scores: newArrayScores }
    }
    case ACTIONS.FILL_SCORES: {
      return { ...state, scores: payload }
    }
    case ACTIONS.EXIT_PAGE: {
      return { ...state, page: 0, exit: true }
    }

    case ACTIONS.NEXT_QUESTION: {
      return { ...state, questionsAnswered: [...state.questionsAnswered, state.currentQuestion], currentQuestion: payload }
    }
    case ACTIONS.CHANGE_PAGE: {
      let newPage = payload

      return { ...state, page: newPage }
    }
    case ACTIONS.FETCH_QUESTION_INIT: {
      return { ...state, isLoading: true, item: null, error: null, success: false }
    }
    case ACTIONS.FETCH_QUESTION_SUCCEDED: {
      return { ...state, item: payload, isLoading: false, error: null, isLoadingSectionBody: false, isLoadingNextOtherSectionQuestion: false }
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
        newSeletedbody[0] = payload.value
        newSeletedbodyID[0] = payload.id
      }

      ;

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
    case ACTIONS.NEXT_OTHER_QUESTIONS_SECTION: {
      let nextArray = [...state.otherSectionQuestionToUse]
      if (nextArray.length > 0) {
        nextArray.shift()
      }
      return { ...state, otherSectionQuestionToUse: nextArray, isLoadingNextOtherSectionQuestion: true }
    }
    case ACTIONS.FETCH_CATEGORY_FOOD_INIT: {

      return { ...state, isLoadingFoodCategories: true }
    }
    case ACTIONS.FETCH_CATEGORY_FOOD_SUCCEDED: {

      return { ...state, isLoadingFoodCategories: false, foodCategories: payload }
    }
    case ACTIONS.FETCH_CATEGORY_FOOD_FAILED: {
      return { ...state, isLoadingFoodCategories: false, foodCategories: [] }
    }
    case ACTIONS.FETCH_FOODS_INIT: {
      return { ...state, isLoadingFoods: true }
    }
    case ACTIONS.FETCH_FOODS_SUCCEDED: {
      return { ...state, isLoadingFoods: false, foods: payload }
    }
    case ACTIONS.FETCH_FOODS_FAILED: {
      return { ...state, isLoadingFoodCategories: false, foods: [] }
    }
    case ACTIONS.UPDATE_SELECTED_SCORE: {
      let newScoreNut = state.selectedScoreNut;
      if (payload.type == "add") {
        newScoreNut = newScoreNut + payload.value
      } else {
        newScoreNut = newScoreNut - payload.value
      }
      return { ...state, selectedScoreNut: newScoreNut }
    }
    case ACTIONS.UPDATE_DESELECTED_SCORE: {
      let newDeselctScore = state.deselectedScoreNut
      if (payload.type == "add") {
        newDeselctScore = newDeselctScore + payload.value
      } else {
        newDeselctScore = newDeselctScore - payload.value
      }
      return { ...state, deselectedScoreNut: newDeselctScore }
    }
    case ACTIONS.FILL_SELECTED_DESELECTED_NUTRI_SCORES: {
      let lastSelectedScore = payload.lastSelectedScore;
      let lastDeselectedScore = payload.lastDeselectedScore
      return { ...state, selectedScoreNut: lastSelectedScore, deselectedScoreNut: lastDeselectedScore }
    }
    case ACTIONS.SAVE_QUESTION_ANSWER: {
      if (payload.page === 3) {
        let newAnswersHealth = [...state.healthAnsweredQuestion, payload]
        return { ...state, healthAnsweredQuestion: newAnswersHealth }
      } else if (payload.page === 4) {
        let newAnswersErgonimics = [...state.ergonomicsAnsweredQuestion, payload]
        return { ...state, ergonomicsAnsweredQuestion: newAnswersErgonimics }
      } else if (payload.page === 5) {
        let newAnswersPsy = [...state.psychologiqueAnsweredQuestion, payload]
        return { ...state, psychologiqueAnsweredQuestion: newAnswersPsy }
      } else if (payload.page === 6) {
        let newAnswersCoching = [...state.coachingAnsweredQuestion, payload]
        return { ...state, coachingAnsweredQuestion: newAnswersCoching }
      }
    }
    default: {
      return state
    }
  }
}
