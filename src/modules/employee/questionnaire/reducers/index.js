import { ACTIONS } from './../constants';


export default (state = {
  page: 1,
  tasksEnded: false,
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
  scores: [],
  otherSectionQuestion: [{ id: "ERGONOMIE", value: "Ergonomique" }, { id: "COACHING", value: "Activité Physique" }, { id: "PSYCHOLOGIE", value: "Psychologique" }],
  otherSectionQuestionToUse: [{ id: "ERGONOMIE", value: "Ergonomique", page: 4 }, { id: "COACHING", value: "Activité Physique", page: 6 }, { id: "PSYCHOLOGIE", value: "Psychologique", page: 5 }],
  isLoadingNextOtherSectionQuestion: false,
  foodCategories: [],
  foods: [],
  isLoadingFoodCategories: false,
  isLoadingFoods: false,
  selectedScoreNut: 0,
  deselectedScoreNut: 0

}, action) => {
  const { payload, type } = action
  switch (type) {

    case ACTIONS.NEXT_PAGE: {
      console.log("Fanhdell");

      localStorage.setItem("CurrentPage", state.page + 1)
      return { ...state, page: state.page + 1 }
    }

    case ACTIONS.PREV_PAGE: {
      localStorage.setItem("CurrentPage", state.page - 1)
      return { ...state, page: state.page - 1 }
    }
    case ACTIONS.TASKES_ENDED: {
      localStorage.setItem("taskEnd", true)
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
      localStorage.setItem("ScoresArray", JSON.stringify(newArrayScores))

      return { ...state, scores: newArrayScores }
    }
    case ACTIONS.FILL_SCORES: {
      return { ...state, scores: payload }
    }
    case ACTIONS.EXIT_PAGE: {
      return { ...state, page: 0, exit: true }
    }

    case ACTIONS.NEXT_QUESTION: {
      localStorage.setItem("CurrentQuestion", JSON.stringify(payload))
      return { ...state, questionsAnswered: [...state.questionsAnswered, state.currentQuestion], currentQuestion: payload }
    }
    case ACTIONS.CHANGE_PAGE: {
      let newPage = payload
      localStorage.setItem("CurrentPage", newPage)
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

      localStorage.setItem("selectedBodyArea", JSON.stringify({ value: payload.value, id: payload.id }))
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
    default: {
      return state
    }
  }
}
