import { ACTIONS, otherSectionToUseQuestions } from './../constants';

const defaultState = {
  page: 1,
  tasksEnded: false,
  exit: false,
  isLoadingUserState: false,
  isLoading: false,
  item: null,
  error: null,
  selectedPartBody: [],
  selectedPartBodyID: [],
  questionsAnswered: [],
  questions: [],
  categories: [
    { id: "Kinésithérapie", idForSend: "PHYSIOTHERAPY"},
    { id: "Kinésithérapeute", idForSend: "PHYSIOTHERAPY" },
    { id: "Ergonomie", idForSend: "ERGONOMICS"},
    { id: "Médecine", idForSend: "MEDICINE"},
    { id: "Psychologie", idForSend: "PSYCHOLOGY"},
    { id: "Coach", idForSend: "COACH"},
    { id: "Aliments", idForSend: "NUTRITION" },
    { id: "Ostéopathie", idForSend: "OSTEOPATHY"},
    { id: "AT", idForSend: "STOPP_WORKING"},
    { id: "Diététicien", idForSend: "DIET"},
  ],
  currentQuestion: { treeparam: "", nodeparam: "" },
  selectedPartBodyToUse: [],
  isLoadingSectionBody: false,
  selectedPartBodyIDToUse: [],
  scores: [],
  otherSectionQuestion: [
    { id: "ERGONOMIE", value: "Ergonomique" },
    { id: "COACHING", value: "Activité Physique" },
    { id: "PSYCHOLOGIE", value: "Psychologique" }
  ],
  otherSectionQuestionToUse: [
    { id: "ERGONOMIE", value: "Vous avez déjà répondu à des questions ergonomique", page: 4 },
    { id: "COACHING", value: "Vous avez compléte le questionnaire sur l'activité physique", page: 6 },
    { id: "PSYCHOLOGIE", value: "Vous avez complété le questionnaire concernant les risques psycho-sociaux", page: 5 }
  ],
  categoryScore: {
    PHYSIOTHERAPY: 0,
    ERGONOMICS: 0,
    MEDICINE: 0,
    PSYCHOLOGY: 0,
    COACH: 0,
    NUTRITION: 0,
    OSTEOPATHY: 0,
    STOPP_WORKING: 0,
    DIET : 0
  },
  isLoadingNextOtherSectionQuestion: false,
  foodCategories: [],
  foodList: {},
  foods: [],
  hasPain: false,
  isLoadingFoodCategories: false,
  isLoadingFoods: false,
  selectedScoreNutrition: 0,
  deselectedScoreNutrition: 0,

  selectedScoreNutritionBreakfast: 0,
  deselectedScoreNutritionBreakfast: 0,
  selectedScoreNutritionLunch: 0,
  deselectedScoreNutritionLunch: 0,
  selectedScoreNutritionDinner: 0,
  deselectedScoreNutritionDinner: 0,
  selectedScoreNutritionSnack: 0,
  deselectedScoreNutritionSnack: 0,

  selectedScoreNut: 0,
  deselectedScoreNut: 0,
  deselectedScoreNutState: false,
  healthAnsweredQuestion: [],
  ergonomicsAnsweredQuestion: [],
  coachingAnsweredQuestion: [],
  psychologiqueAnsweredQuestion: [],
  nextSectionThirdState: false,
  nextSectionFourthState: false,
  periodeNut: 0,
  Breakfast: { selectedColumn: [[], [], [], []], selectedNutri: [] },
  Lunch: { selectedColumn: [[], [], [], []], selectedNutri: [] },
  Dinner: { selectedColumn: [[], [], [], []], selectedNutri: [] },
  Snack: { selectedColumn: [[], [], [], []], selectedNutri: [] },
  scorsSaved: null,
  nutrutionalInformationPage: true
}
export default (state = {
  page: 1,
  tasksEnded: false,
  exit: false,
  isLoadingUserState: false,
  isLoading: false,
  item: null,
  error: null,
  selectedScoreNutrition: 0,
  deselectedScoreNutrition: 0,

  selectedScoreNutritionBreakfast: 0,
  deselectedScoreNutritionBreakfast: 0,
  selectedScoreNutritionLunch: 0,
  deselectedScoreNutritionLunch: 0,
  selectedScoreNutritionDinner: 0,
  deselectedScoreNutritionDinner: 0,
  selectedScoreNutritionSnack: 0,
  deselectedScoreNutritionSnack: 0,


  categories: [
    { id: "Kinésithérapie", idForSend: "PHYSIOTHERAPY"},
    { id: "Ergonomie", idForSend: "ERGONOMICS"},
    { id: "Médecine", idForSend: "MEDICINE"},
    { id: "Psychologie", idForSend: "PSYCHOLOGY"},
    { id: "Psychologue", idForSend: "PSYCHOLOGY" },
    { id: "Coach", idForSend: "COACH"},
    { id: "Aliments", idForSend: "NUTRITION" },
    { id: "Ostéopathie", idForSend: "OSTEOPATHY"},
    { id: "AT", idForSend: "STOPP_WORKING"},
    { id: "Diététicien", idForSend: "DIET"},
  ],
  selectedPartBody: [],
  selectedPartBodyID: [],
  questionsAnswered: [],
  questions: [],
  currentQuestion: { treeparam: "", nodeparam: "" },
  selectedPartBodyToUse: [],
  isLoadingSectionBody: false,
  selectedPartBodyIDToUse: [],
  scores: [],
  bodyPartChoices: {},
  categoryScore: {
    PHYSIOTHERAPY: 0,
    ERGONOMICS: 0,
    MEDICINE: 0,
    PSYCHOLOGY: 0,
    COACH: 0,
    NUTRITION: 0,
    OSTEOPATHY: 0,
    STOPP_WORKING: 0,
    DIET : 0

  },
  otherSectionQuestion: [
    { id: "ERGONOMIE", value: "Vous avez déjà répondu à des questions ergonomique" },
    { id: "COACHING", value: "Vous avez compléte le questionnaire sur l'activité physique" },
    { id: "PSYCHOLOGIE", value: "Vous avez complété le questionnaire concernant les risques psycho-sociaux" }
  ],
  otherSectionQuestionToUse: [
    { id: "ERGONOMIE", value: "Vous avez déjà répondu à des questions ergonomique", page: 4 },
    { id: "COACHING", value: "Vous avez compléte le questionnaire sur l'activité physique", page: 6 },
    { id: "PSYCHOLOGIE", value: "Vous avez complété le questionnaire concernant les risques psycho-sociaux", page: 5 }
  ],
  isLoadingNextOtherSectionQuestion: false,
  foodCategories: [],
  foodList: {},
  foods: [],
  isLoadingFoodCategories: false,
  isLoadingFoods: false,
  selectedScoreNut: 0,
  deselectedScoreNut: 0,
  deselectedScoreNutState: false,
  healthAnsweredQuestion: [],
  ergonomicsAnsweredQuestion: [],
  coachingAnsweredQuestion: [],
  psychologiqueAnsweredQuestion: [],
  nextSectionThirdState: false,
  nextSectionFourthState: false,
  periodeNut: 0,
  Breakfast: { selectedColumn: [[], [], [], []], selectedNutri: [] },
  Lunch: { selectedColumn: [[], [], [], []], selectedNutri: [] },
  Dinner: { selectedColumn: [[], [], [], []], selectedNutri: [] },
  Snack: { selectedColumn: [[], [], [], []], selectedNutri: [] },
  scorsSaved: null,
  nutrutionalInformationPage: true
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
      return { ...state, scorsSaved: false }
    }
    case ACTIONS.GET_STATE_SUCCEDED: {
      const newState = payload

      if (Object.entries(newState).length > 0) {

        return { ...newState, isLoadingUserState: false }
      }
      return { ...state, ...defaultState, isLoadingUserState: false }

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
      const categoryScore = { ...state.categoryScore }
      
      if (payload.Breakfast) {
    
        const selectedScore = payload.Breakfast.selectedColumn.reduce((acc, selectedFoods, index) => {
          let score = 0
          let cof = 4 - index
          selectedFoods.forEach((selectedFood) => {
            const [categoryId, id] = selectedFood.split("-")
            const foodObject = state.foodList.breakfast.find((food) => food.id === id && food.category_id === categoryId)
            score += ( parseInt(foodObject.selected_score, 10) || 0 )
          })
          
          acc += score * cof
          
          return acc
        }, 0)
        const unselectedScore = state.foodList.breakfast.reduce((acc, unselectedFood) => {
          const exists = payload.Breakfast.selectedNutri.some((selectedNutri) => {
            const [categoryId, id] = selectedNutri.split("-")
            return unselectedFood.id === id && unselectedFood.category_id === categoryId
          })
          if (!exists){
            acc += (parseInt(unselectedFood.selected_score, 10) || 0)
          }
          return acc
        }, 0)
        categoryScore.NUTRITION += (selectedScore + unselectedScore)
      
        return { ...state, periodeNut: payload.periodeNut, Breakfast: payload.Breakfast, categoryScore,  selectedScoreNutritionBreakfast : selectedScore , deselectedScoreNutritionBreakfast : unselectedScore  }
       
      } else if (payload.Lunch) {

        const selectedScore = payload.Lunch.selectedColumn.reduce((acc, selectedFoods, index) => {
          let score = 0
          let cof = 4 - index
          selectedFoods.forEach((selectedFood) => {
            const [categoryId, id] = selectedFood.split("-")
            const foodObject = state.foodList.lunch.find((food) => food.id === id && food.category_id === categoryId)
            score += ( parseInt(foodObject.selected_score, 10) || 0 )
          })
          
          acc += score * cof
          
          return acc
        }, 0)
        const unselectedScore = state.foodList.lunch.reduce((acc, unselectedFood) => {
          const exists = payload.Lunch.selectedNutri.some((selectedNutri) => {
            const [categoryId, id] = selectedNutri.split("-")
            return unselectedFood.id === id && unselectedFood.category_id === categoryId
          })
          if (!exists){
            acc += (parseInt(unselectedFood.selected_score, 10) || 0)
          }
          return acc
        }, 0)
        categoryScore.NUTRITION += (selectedScore + unselectedScore)
        return { ...state, periodeNut: payload.periodeNut, Lunch: payload.Lunch, categoryScore ,  selectedScoreNutritionLunch : selectedScore , deselectedScoreNutritionLunch : unselectedScore  }

      } else if (payload.Snack) {
        const selectedScore = payload.Snack.selectedColumn.reduce((acc, selectedFoods, index) => {
          let score = 0
          let cof = 4 - index
          selectedFoods.forEach((selectedFood) => {
            const [categoryId, id] = selectedFood.split("-")
            const foodObject = state.foodList.snack.find((food) => food.id === id && food.category_id === categoryId)
            score += ( parseInt(foodObject.selected_score, 10) || 0 )
          })
          
          acc += score * cof
          
          return acc
        }, 0)
        const unselectedScore = state.foodList.snack.reduce((acc, unselectedFood) => {
          const exists = payload.Snack.selectedNutri.some((selectedNutri) => {
            const [categoryId, id] = selectedNutri.split("-")
            return unselectedFood.id === id && unselectedFood.category_id === categoryId
          })
          if (!exists){
            acc += (parseInt(unselectedFood.selected_score, 10) || 0)
          }
          return acc
        }, 0)
        


        categoryScore.NUTRITION += (payload.selectedScoreNutritionBreakfast +  payload.selectedScoreNutritionLunch + payload.selectedScoreNutritionDinnerselectedScore + selectedScore  + unselectedScore + payload.deselectedScoreNutritionBreakfast +  payload.deselectedScoreNutritionLunch +   payload.deselectedScoreNutritionDinner)
        
        const nutritionMax = 5
        if( categoryScore.NUTRITION > 0 && categoryScore.NUTRITION <= 150) {
          categoryScore.NUTRITION = 1
        }else if(categoryScore.NUTRITION > 150 && categoryScore.NUTRITION <= 210) {
          categoryScore.NUTRITION = 2
        }else if (categoryScore.NUTRITION > 210 && categoryScore.NUTRITION <= 280) {
          categoryScore.NUTRITION = 3
        }else if (categoryScore.NUTRITION > 280) {
          categoryScore.NUTRITION = 4
        }
        categoryScore.NUTRITION = categoryScore.NUTRITION > nutritionMax ? nutritionMax : categoryScore.NUTRITION
        return { ...state, periodeNut: payload.periodeNut, Snack: payload.Snack, categoryScore, selectedScoreNutritionSnack: selectedScore, deselectedScoreNutritionSnack: unselectedScore }
      } else if (payload.Dinner) {
        const selectedScore = payload.Dinner.selectedColumn.reduce((acc, selectedFoods, index) => {
          let score = 0
          let cof = 4 - index
          selectedFoods.forEach((selectedFood) => {
            const [categoryId, id] = selectedFood.split("-")
            const foodObject = state.foodList.dinner.find((food) => food.id === id && food.category_id === categoryId)
            score += ( parseInt(foodObject.selected_score, 10) || 0 )
          })
          
          acc += score * cof
          
          return acc
        }, 0)
        const unselectedScore = state.foodList.dinner.reduce((acc, unselectedFood) => {
          const exists = payload.Dinner.selectedNutri.some((selectedNutri) => {
            const [categoryId, id] = selectedNutri.split("-")
            return unselectedFood.id === id && unselectedFood.category_id === categoryId
          })
          if (!exists){
            acc += (parseInt(unselectedFood.selected_score, 10) || 0)
          }
          return acc
        }, 0)
        categoryScore.NUTRITION += (selectedScore + unselectedScore)
        return { ...state, periodeNut: payload.periodeNut, Dinner: payload.Dinner, categoryScore ,  selectedScoreNutritionDinner : selectedScore , deselectedScoreNutritionDinner : unselectedScore  }
      } else {
        return state
      }
    }
    case ACTIONS.CHANGE_PAGE_AFTER_SELECTION : {
      return {...state, page:4, selectedPartBody:[], selectedPartBodyID:[], selectedPartBodyToUse:[], selectedPartBodyIDToUse:[] }
    }
    case ACTIONS.NEXT_SECTION_THIRD: {
      return { ...state, nextSectionThirdState: true }
    }
    case ACTIONS.NEXT_SECTION_FOURTH: {
      return { ...state, nextSectionFourthState: payload }
    }
    case ACTIONS.NEXT_PAGE: {
      const page = state.page + 1
      return { ...state, page }
    }
    case ACTIONS.PREV_PAGE: {
      return { ...state, page: state.page - 1 }
    }
    case ACTIONS.TASKES_ENDED: {

      return { ...state, tasksEnded: true }
    }
    case ACTIONS.UPDATE_SCORE: {
      const categoryScore = { ...state.categoryScore };
      (payload || []).forEach(element => {
        const key = state.categories.find( (cat) => cat.id === element.name)
        if (key && key.idForSend){

          categoryScore[key.idForSend] += element.value
        }
      })

      let newArrayScores = [...state.scores]
      if (newArrayScores.length > 0) {
        for (let i = 0; i < payload.length; i++) {
          let indexScore = newArrayScores.map(el => el.name).indexOf(payload[i].name);
          if (indexScore > -1) {
            newArrayScores[indexScore] = { id: payload[i].id, value: newArrayScores[indexScore].value + payload[i].value, name: payload[i].name }
          } else {
            newArrayScores.push(payload[i])
          }
        }
      } else {
        newArrayScores = payload
      }
      return { ...state, scores: newArrayScores, categoryScore }
    }
    case ACTIONS.FILL_SCORES: {
      return { ...state, scores: payload }
    }
    case ACTIONS.EXIT_PAGE: {
      return { ...state, page: 0, exit: true }
    }

    case ACTIONS.NEXT_QUESTION: {
      const questionsAnswered = [...state.questionsAnswered, state.currentQuestion]
      return { ...state, questionsAnswered, currentQuestion: payload }
    }
    case ACTIONS.CHANGE_PAGE: {
      return { ...state, page: payload }
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
      const page = state.page
      const categoryScore = { ...state.categoryScore }
      if (page === 4) {
        const ergoMax = 10
        categoryScore.ERGONOMICS = categoryScore.ERGONOMICS > ergoMax ? ergoMax : categoryScore.ERGONOMICS
        if( state.hasPain && categoryScore.ERGONOMICS >= 4) {
          categoryScore.ERGONOMICS = 4
        }else if(state.hasPain && categoryScore.ERGONOMICS === 3) {
          categoryScore.ERGONOMICS = 3
        }else if (state.hasPain && categoryScore.ERGONOMICS === 2) {
          categoryScore.ERGONOMICS = 2
        }else if (state.hasPain && categoryScore.ERGONOMICS < 2) {
          categoryScore.ERGONOMICS = 0
        }
        const psychotherapyMax = 8
        categoryScore.PHYSIOTHERAPY = categoryScore.PHYSIOTHERAPY > psychotherapyMax ? psychotherapyMax : categoryScore.PHYSIOTHERAPY
        if (state.hasPain && categoryScore.PHYSIOTHERAPY >= 4) {
          categoryScore.PHYSIOTHERAPY = 2
        }else if (state.hasPain && categoryScore.PHYSIOTHERAPY >= 2 &&  categoryScore.PHYSIOTHERAPY < 4 ) {
          categoryScore.PHYSIOTHERAPY = 2
        }else if (state.hasPain && categoryScore.PHYSIOTHERAPY < 2 ) {
          categoryScore.PHYSIOTHERAPY = 0
        }
      } else if (page === 5) {
        let max = 50
        categoryScore.PSYCHOLOGY = categoryScore.PSYCHOLOGY > max ? max : categoryScore.PSYCHOLOGY
        if (categoryScore.PSYCHOLOGY >= 31 ) {
          categoryScore.PSYCHOLOGY =+ 3
        }else if ( 23 <= categoryScore.PSYCHOLOGY && categoryScore.PSYCHOLOGY < 31) {
          categoryScore.PSYCHOLOGY += 2
        }else if ( 10 <= categoryScore.PSYCHOLOGY && categoryScore.PSYCHOLOGY < 23) {
          categoryScore.PSYCHOLOGY += 0
        }
      } else if (page === 6) {
        let max = 9
        categoryScore.COACH = categoryScore.COACH > max ? max : categoryScore.COACH
        if(categoryScore.COACH >= 8){
          categoryScore.COACH = 4
        }else if( 4 <= categoryScore.COACH && categoryScore.COACH < 8) {
          categoryScore.COACH = 3
        }else if (2 <= categoryScore.COACH && categoryScore.COACH < 4) {
          categoryScore.COACH = 2
        } else if (categoryScore.COACH < 2) {
          categoryScore.COACH = 0
        }
      } else if (!state.hasPain && page === 6) {

               

        if (state.bodyPartChoices["HEADACHE"] === 1){
          if(categoryScore.MEDICINE >= 4) {
            categoryScore.MEDICINE = 4
          }else {
            categoryScore.MEDICINE = 0
          }
      
          if (categoryScore.OSTEOPATHY >=  6) {
            categoryScore.OSTEOPATHY = 4
          }else if (categoryScore.OSTEOPATHY == 5 ) {
            categoryScore.OSTEOPATHY = 3
          }else if (categoryScore.OSTEOPATHY < 5) {
            categoryScore.OSTEOPATHY = 0
          }
      
          if (categoryScore.ERGONOMICS ==  6) {
            categoryScore.ERGONOMICS = 2
          }else if (categoryScore.ERGONOMICS == 4  ) {
            categoryScore.ERGONOMICS = 1
          }else if (categoryScore.ERGONOMICS < 4) {
            categoryScore.ERGONOMICS = 0
          }
      
          if (categoryScore.PHYSIOTHERAPY == 4 ) {
            categoryScore.PHYSIOTHERAPY = 2
          }else if (   categoryScore.PHYSIOTHERAPY >= 2 && categoryScore.PHYSIOTHERAPY <= 3  ) {
            categoryScore.PHYSIOTHERAPY = 1
          }else  if (categoryScore.ERGONOMICS < 2){
            categoryScore.PHYSIOTHERAPY = 0
          }
        }else if (state.bodyPartChoices["HEADACHE"] === 2){
          if(categoryScore.MEDICINE >= 2) {
            categoryScore.MEDICINE = 4
          }else {
            categoryScore.MEDICINE = 0
          }
      
          if (categoryScore.OSTEOPATHY >=  7) {
            categoryScore.OSTEOPATHY = 4
          }else if (categoryScore.OSTEOPATHY >= 5 && categoryScore.OSTEOPATHY <= 6 ) {
            categoryScore.OSTEOPATHY = 3
          }else if (categoryScore.OSTEOPATHY < 5) {
            categoryScore.OSTEOPATHY = 0
          }
      
          if (categoryScore.ERGONOMICS >=  12) {
            categoryScore.ERGONOMICS = 4
          }else if (categoryScore.ERGONOMICS >= 7 && categoryScore.ERGONOMICS < 12  ) {
            categoryScore.ERGONOMICS = 2
          }else if (categoryScore.ERGONOMICS >= 4 && categoryScore.ERGONOMICS < 7  ) {
            categoryScore.ERGONOMICS = 1
          }else if (categoryScore.ERGONOMICS < 4) {
            categoryScore.ERGONOMICS = 0
          }
      
          if (categoryScore.PHYSIOTHERAPY >= 4 ) {
            categoryScore.PHYSIOTHERAPY = 2
          }else if (   categoryScore.PHYSIOTHERAPY == 2 ) {
            categoryScore.PHYSIOTHERAPY = 1
          }else  {
            categoryScore.PHYSIOTHERAPY = 0
          }
        }else if (state.bodyPartChoices["HEADACHE"] === 3){
          if(categoryScore.MEDICINE >= 2) {
            categoryScore.MEDICINE = 4
          }else {
            categoryScore.MEDICINE = 0
          }
      
          if (categoryScore.OSTEOPATHY ==  8) {
            categoryScore.OSTEOPATHY = 4
          }else if (categoryScore.OSTEOPATHY >= 5 && categoryScore.OSTEOPATHY <= 7 ) {
            categoryScore.OSTEOPATHY = 3
          }else if (categoryScore.OSTEOPATHY == 4 ) {
            categoryScore.OSTEOPATHY = 2
          }else if (categoryScore.OSTEOPATHY < 4) {
            categoryScore.OSTEOPATHY = 0
          }
      
          if (categoryScore.ERGONOMICS >=  13) {
            categoryScore.ERGONOMICS = 4
          }else if (categoryScore.ERGONOMICS >= 10 && categoryScore.ERGONOMICS < 13  ) {
            categoryScore.ERGONOMICS = 3
          }else if (categoryScore.ERGONOMICS >= 6 && categoryScore.ERGONOMICS < 10  ) {
            categoryScore.ERGONOMICS = 2
          }else if (categoryScore.ERGONOMICS >= 4 && categoryScore.ERGONOMICS < 6  ) {
            categoryScore.ERGONOMICS = 1
          }else if (categoryScore.ERGONOMICS < 6) {
            categoryScore.ERGONOMICS = 0
          }
      
          if (categoryScore.PHYSIOTHERAPY >= 8 ) {
            categoryScore.PHYSIOTHERAPY = 2
          }else if (   categoryScore.PHYSIOTHERAPY >= 5 && categoryScore.PHYSIOTHERAPY < 8  ) {
            categoryScore.PHYSIOTHERAPY = 1
          }else if (categoryScore.PHYSIOTHERAPY < 5 )  {
            categoryScore.OSTEOPATHY = 2
          }
      
          if (categoryScore.PSYCHOLOGY >= 8 ) {
            categoryScore.PSYCHOLOGY = 2
          }else if (   categoryScore.PSYCHOLOGY >= 5 && categoryScore.PSYCHOLOGY < 8  ) {
            categoryScore.PSYCHOLOGY = 1
          }else if (categoryScore.PSYCHOLOGY < 6 )  {
            categoryScore.PSYCHOLOGY = 0
          }
      
          
        }else if (state.bodyPartChoices["HEADACHE"] === 4){
          if(categoryScore.MEDICINE >= 2) {
            categoryScore.MEDICINE = 4
          }else {
            categoryScore.MEDICINE = 0
          }
      
          if (categoryScore.OSTEOPATHY ==  8) {
            categoryScore.OSTEOPATHY = 4
          }else if (categoryScore.OSTEOPATHY >= 5 && categoryScore.OSTEOPATHY <= 7 ) {
            categoryScore.OSTEOPATHY = 3
          }else if (categoryScore.OSTEOPATHY == 4 ) {
            categoryScore.OSTEOPATHY = 2
          }else if (categoryScore.OSTEOPATHY < 4) {
            categoryScore.OSTEOPATHY = 0
          }
      
          if (categoryScore.ERGONOMICS >=  13) {
            categoryScore.ERGONOMICS = 4
          }else if (categoryScore.ERGONOMICS >= 10 && categoryScore.ERGONOMICS < 13  ) {
            categoryScore.ERGONOMICS = 3
          }else if (categoryScore.ERGONOMICS >= 6 && categoryScore.ERGONOMICS < 10  ) {
            categoryScore.ERGONOMICS = 2
          }else if (categoryScore.ERGONOMICS >= 4 && categoryScore.ERGONOMICS < 6  ) {
            categoryScore.ERGONOMICS = 1
          }else if (categoryScore.ERGONOMICS < 6) {
            categoryScore.ERGONOMICS = 0
          }
      
          if (categoryScore.PHYSIOTHERAPY >= 8 ) {
            categoryScore.PHYSIOTHERAPY = 2
          }else if (   categoryScore.PHYSIOTHERAPY >= 5 && categoryScore.PHYSIOTHERAPY < 8  ) {
            categoryScore.PHYSIOTHERAPY = 1
          }else if (categoryScore.PHYSIOTHERAPY < 5 )  {
            categoryScore.OSTEOPATHY = 2
          }
      
          if (categoryScore.PSYCHOLOGY >= 8 ) {
            categoryScore.PSYCHOLOGY = 2
          }else if (   categoryScore.PSYCHOLOGY >= 6 && categoryScore.PSYCHOLOGY < 8  ) {
            categoryScore.PSYCHOLOGY = 1
          }else if (categoryScore.PSYCHOLOGY < 6 )  {
            categoryScore.PSYCHOLOGY = 0
          }
        }
      
        if (state.bodyPartChoices["CERVICAL"] === 1){
          if(categoryScore.MEDICINE >= 4) {
            categoryScore.MEDICINE = 4
          }else {
            categoryScore.MEDICINE = 0
          }
      
          if (categoryScore.OSTEOPATHY >=  6) {
            categoryScore.OSTEOPATHY = 4
          }else if (categoryScore.OSTEOPATHY === 5) {
            categoryScore.OSTEOPATHY = 3
          }else if (categoryScore.OSTEOPATHY < 5) {
            categoryScore.OSTEOPATHY = 0
          }
      
          if (categoryScore.ERGONOMICS === 6) {
            categoryScore.ERGONOMICS = 2
          }else if (categoryScore.ERGONOMICS === 4) {
            categoryScore.ERGONOMICS = 1
          }else if (categoryScore.ERGONOMICS < 4) {
            categoryScore.ERGONOMICS = 0
          }
      
          if (categoryScore.PHYSIOTHERAPY === 4 ) {
            categoryScore.PHYSIOTHERAPY = 2
          }else if ( 2 <= categoryScore.PHYSIOTHERAPY && categoryScore.PHYSIOTHERAPY <= 3) {
            categoryScore.PHYSIOTHERAPY = 1
          }else if ( categoryScore.PHYSIOTHERAPY < 2) {
            categoryScore.PHYSIOTHERAPY = 0
          }
        }else if (state.bodyPartChoices["CERVICAL"] === 2) {
          if(categoryScore.MEDICINE >= 4) {
            categoryScore.MEDICINE = 4
          }else {
            categoryScore.MEDICINE = 0
          }
      
          if (categoryScore.OSTEOPATHY >=  7) {
            categoryScore.OSTEOPATHY = 4
          }else if (categoryScore.OSTEOPATHY >= 4 && categoryScore.OSTEOPATHY < 7) {
            categoryScore.OSTEOPATHY = 3
          }else if (categoryScore.OSTEOPATHY < 4) {
            categoryScore.OSTEOPATHY = 1
          }
      
          if (categoryScore.ERGONOMICS >= 9) {
            categoryScore.ERGONOMICS = 4
          }else if (categoryScore.ERGONOMICS >= 6 && categoryScore.ERGONOMICS <= 8) {
            categoryScore.ERGONOMICS = 3
          }else if (categoryScore.ERGONOMICS >= 3 && categoryScore.ERGONOMICS < 3) {
            categoryScore.ERGONOMICS = 1
          }else if (categoryScore.ERGONOMICS < 4) {
            categoryScore.ERGONOMICS = 0
          }
      
          if (categoryScore.PHYSIOTHERAPY >= 9 ) {
            categoryScore.PHYSIOTHERAPY = 3
          }else if ( 6 <= categoryScore.PHYSIOTHERAPY && categoryScore.PHYSIOTHERAPY < 9) {
            categoryScore.PHYSIOTHERAPY = 2
          }else if ( categoryScore.PHYSIOTHERAPY < 6) {
            categoryScore.PHYSIOTHERAPY = 0
          }
        }else if (state.bodyPartChoices["CERVICAL"] === 3) {
          if (categoryScore.OSTEOPATHY >=  6) {
            categoryScore.OSTEOPATHY = 4
          }else if (categoryScore.OSTEOPATHY >= 4 && categoryScore.OSTEOPATHY < 6) {
            categoryScore.OSTEOPATHY = 3
          }else if (categoryScore.OSTEOPATHY < 4) {
            categoryScore.OSTEOPATHY = 0
          }
      
          if (categoryScore.ERGONOMICS >= 8) {
            categoryScore.ERGONOMICS = 4
          }else if (categoryScore.ERGONOMICS >= 5 && categoryScore.ERGONOMICS < 8) {
            categoryScore.ERGONOMICS = 2
          }else if (categoryScore.ERGONOMICS < 5) {
            categoryScore.ERGONOMICS = 0
          }
      
          if (categoryScore.PHYSIOTHERAPY >= 12 ) {
            categoryScore.PHYSIOTHERAPY = 4
          }else if ( 10 <= categoryScore.PHYSIOTHERAPY && categoryScore.PHYSIOTHERAPY < 12) {
            categoryScore.PHYSIOTHERAPY = 3
          }else if (categoryScore.PHYSIOTHERAPY >= 5 && categoryScore.PHYSIOTHERAPY < 10) {
            categoryScore.PHYSIOTHERAPY = 2
          }else if ( categoryScore.PHYSIOTHERAPY < 5) {
            categoryScore.PHYSIOTHERAPY = 0
          }
        }else if (state.bodyPartChoices["CERVICAL"] === 4) {
          if(categoryScore.MEDICINE >= 4) {
            categoryScore.MEDICINE = 4
          }else {
            categoryScore.MEDICINE = 0
          }
      
          if (categoryScore.OSTEOPATHY >=  6) {
            categoryScore.OSTEOPATHY = 3
          }else if (categoryScore.OSTEOPATHY >= 4 && categoryScore.OSTEOPATHY < 6) {
            categoryScore.OSTEOPATHY = 2
          }else if (categoryScore.OSTEOPATHY < 4) {
            categoryScore.OSTEOPATHY = 0
          }
      
          if (categoryScore.ERGONOMICS >= 8) {
            categoryScore.ERGONOMICS = 4
          }else if (categoryScore.ERGONOMICS >= 5 && categoryScore.ERGONOMICS < 8) {
            categoryScore.ERGONOMICS = 2
          }else if (categoryScore.ERGONOMICS < 5) {
            categoryScore.ERGONOMICS = 0
          }
      
          if (categoryScore.PHYSIOTHERAPY >= 13 ) {
            categoryScore.PHYSIOTHERAPY = 4
          }else if ( 9 <= categoryScore.PHYSIOTHERAPY && categoryScore.PHYSIOTHERAPY < 13) {
            categoryScore.PHYSIOTHERAPY = 3
          }else if (categoryScore.PHYSIOTHERAPY >= 5 && categoryScore.PHYSIOTHERAPY < 9) {
            categoryScore.PHYSIOTHERAPY = 2
          }else if ( categoryScore.PHYSIOTHERAPY < 5) {
            categoryScore.PHYSIOTHERAPY = 0
          }
        }
        
      
        if (state.bodyPartChoices["ELBOW_WIRST_HAND"] === 1){
          if(categoryScore.MEDICINE == 4) {
            categoryScore.MEDICINE = 4
          }else {
            categoryScore.MEDICINE = 0
          }
      
          if (categoryScore.PSYCHOLOGY == 3) {
            categoryScore.PSYCHOLOGY = 1
          }else {
            categoryScore.PSYCHOLOGY = 0
          }
      
          if (categoryScore.OSTEOPATHY >=  5) {
            categoryScore.OSTEOPATHY = 4
          } else if (categoryScore.OSTEOPATHY < 5) {
            categoryScore.OSTEOPATHY = 0
          }
      
          if (categoryScore.ERGONOMICS >=  7) {
            categoryScore.ERGONOMICS = 2
          }else if (categoryScore.ERGONOMICS >= 5 && categoryScore.ERGONOMICS < 7 ) {
            categoryScore.ERGONOMICS = 1
          }else if (categoryScore.ERGONOMICS < 5) {
            categoryScore.ERGONOMICS = 0
          }
      
      
        }else if (state.bodyPartChoices["ELBOW_WIRST_HAND"] === 2){
          if(categoryScore.MEDICINE == 4) {
            categoryScore.MEDICINE = 4
          }else {
            categoryScore.MEDICINE = 0
          }
      
          if (categoryScore.PSYCHOLOGY >= 5) {
            categoryScore.PSYCHOLOGY = 1
          }else {
            categoryScore.PSYCHOLOGY = 0
          }
      
          if (categoryScore.OSTEOPATHY >=  8) {
            categoryScore.OSTEOPATHY = 4
          } else if (categoryScore.OSTEOPATHY >=  5 && categoryScore.OSTEOPATHY <  8 ) {
            categoryScore.OSTEOPATHY = 3
          }else if (categoryScore.OSTEOPATHY < 5   ) {
            categoryScore.OSTEOPATHY = 2
          }
      
          if (categoryScore.ERGONOMICS >=  7) {
            categoryScore.ERGONOMICS = 3
          }else if (categoryScore.ERGONOMICS >= 4 && categoryScore.ERGONOMICS < 7 ) {
            categoryScore.ERGONOMICS = 1
          }else if (categoryScore.ERGONOMICS < 4) {
            categoryScore.ERGONOMICS = 0
          }
      
          if (categoryScore.PHYSIOTHERAPY >=  6) {
            categoryScore.PHYSIOTHERAPY = 3
          }else if (categoryScore.PHYSIOTHERAPY >= 4 && categoryScore.PHYSIOTHERAPY < 6 ) {
            categoryScore.PHYSIOTHERAPY = 1
          }else if (categoryScore.PHYSIOTHERAPY < 4) {
            categoryScore.PHYSIOTHERAPY = 0
          }
        }else if (state.bodyPartChoices["ELBOW_WIRST_HAND"] === 3){
          
          if (categoryScore.PSYCHOLOGY == 4) {
            categoryScore.PSYCHOLOGY = 1
          }else {
            categoryScore.PSYCHOLOGY = 0
          }
      
          if (categoryScore.OSTEOPATHY ==  2) {
            categoryScore.OSTEOPATHY = 2
          } else {
            categoryScore.OSTEOPATHY = 0
          }
      
          if (categoryScore.ERGONOMICS >=  7) {
            categoryScore.ERGONOMICS = 4
          }else if (categoryScore.ERGONOMICS >= 5 && categoryScore.ERGONOMICS < 7 ) {
            categoryScore.ERGONOMICS = 2
          }else if (categoryScore.ERGONOMICS < 5) {
            categoryScore.ERGONOMICS = 0
          }
      
          if (categoryScore.PHYSIOTHERAPY >=  8) {
            categoryScore.PHYSIOTHERAPY = 4
          }else if (categoryScore.PHYSIOTHERAPY >= 6 && categoryScore.PHYSIOTHERAPY < 8 ) {
            categoryScore.PHYSIOTHERAPY = 3
          }else if (categoryScore.PHYSIOTHERAPY < 6) {
            categoryScore.PHYSIOTHERAPY = 1
          }
          
        }else if (state.bodyPartChoices["ELBOW_WIRST_HAND"] === 4){
          if (categoryScore.PSYCHOLOGY == 4) {
            categoryScore.PSYCHOLOGY = 1
          }else {
            categoryScore.PSYCHOLOGY = 0
          }
      
        
          if (categoryScore.ERGONOMICS >=  7) {
            categoryScore.ERGONOMICS = 4
          }else if (categoryScore.ERGONOMICS >= 5 && categoryScore.ERGONOMICS < 7 ) {
            categoryScore.ERGONOMICS = 2
          }else if (categoryScore.ERGONOMICS >= 3 && categoryScore.ERGONOMICS < 5) {
            categoryScore.ERGONOMICS = 1
          }else if (categoryScore.ERGONOMICS < 3  ) {
            categoryScore.ERGONOMICS = 0
          }
      
          if (categoryScore.PHYSIOTHERAPY >=  8) {
            categoryScore.PHYSIOTHERAPY = 4
          }else if (categoryScore.PHYSIOTHERAPY >= 6 && categoryScore.PHYSIOTHERAPY < 8 ) {
            categoryScore.PHYSIOTHERAPY = 3
          }else if (categoryScore.PHYSIOTHERAPY < 6) {
            categoryScore.PHYSIOTHERAPY = 1
          }
        }
      
        if (state.bodyPartChoices["BACK_THORAX"] === 1){
          if(categoryScore.MEDICINE == 4) {
            categoryScore.MEDICINE = 4
          }else {
            categoryScore.MEDICINE = 0
          }
      
      
          if (categoryScore.OSTEOPATHY >=  6) {
            categoryScore.OSTEOPATHY = 4
          } else if (categoryScore.OSTEOPATHY == 5) {
            categoryScore.OSTEOPATHY = 3
          }else if (categoryScore.OSTEOPATHY < 5) {
            categoryScore.OSTEOPATHY = 0
          }
      
          if (categoryScore.ERGONOMICS >=  5) {
            categoryScore.ERGONOMICS = 2
          }else if (categoryScore.ERGONOMICS >= 3 && categoryScore.ERGONOMICS < 5 ) {
            categoryScore.ERGONOMICS = 1
          }else if (categoryScore.ERGONOMICS < 3) {
            categoryScore.ERGONOMICS = 0
          }
      
          if (categoryScore.PHYSIOTHERAPY ==  8) {
            categoryScore.PHYSIOTHERAPY = 2
          }else if (categoryScore.PHYSIOTHERAPY >= 4 && categoryScore.PHYSIOTHERAPY < 8 ) {
            categoryScore.PHYSIOTHERAPY = 1
          }else  {
            categoryScore.PHYSIOTHERAPY = 0
          }
      
        }else  if (state.bodyPartChoices["BACK_THORAX"] === 2){
          if(categoryScore.MEDICINE >= 4) {
            categoryScore.MEDICINE = 4
          }else {
            categoryScore.MEDICINE = 0
          }

          if(categoryScore.DIET == 4 ) {
            categoryScore.DIET = 4
          }else {
            categoryScore.DIET = 0
          }
      
      
          if (categoryScore.OSTEOPATHY >  6) {
            categoryScore.OSTEOPATHY = 4
          } else if (categoryScore.OSTEOPATHY >= 4 && categoryScore.ERGONOMICS <= 5 ) {
            categoryScore.OSTEOPATHY = 3
          }else if (categoryScore.OSTEOPATHY < 4) {
            categoryScore.OSTEOPATHY = 0
          }
      
          if (categoryScore.ERGONOMICS >=  9) {
            categoryScore.ERGONOMICS = 4
          }else if (categoryScore.ERGONOMICS >= 4 && categoryScore.ERGONOMICS < 9 ) {
            categoryScore.ERGONOMICS = 2
          }else if (categoryScore.ERGONOMICS >= 2 && categoryScore.ERGONOMICS < 4 ) {
            categoryScore.ERGONOMICS = 1
          }else if (categoryScore.ERGONOMICS < 2) {
            categoryScore.ERGONOMICS = 0
          }
      
          if (categoryScore.PHYSIOTHERAPY >=  7) {
            categoryScore.PHYSIOTHERAPY = 3
          }else if (categoryScore.PHYSIOTHERAPY >= 6 && categoryScore.PHYSIOTHERAPY < 7 ) {
            categoryScore.PHYSIOTHERAPY = 2
          }else if (categoryScore.PHYSIOTHERAPY >= 3 && categoryScore.PHYSIOTHERAPY < 6 ) {
            categoryScore.PHYSIOTHERAPY = 1
          }else  if (categoryScore.PHYSIOTHERAPY < 3) {
            categoryScore.PHYSIOTHERAPY = 0
          }
      
          if (categoryScore.PSYCHOLOGY == 10) {
            categoryScore.PSYCHOLOGY = 2
          }else if (categoryScore.PSYCHOLOGY >= 6 && categoryScore.PSYCHOLOGY < 10 ) {
            categoryScore.PSYCHOLOGY = 1
          }else if (  categoryScore.PSYCHOLOGY < 6 ) {
            categoryScore.PSYCHOLOGY = 0
          }
      
      
        }else  if (state.bodyPartChoices["BACK_THORAX"] === 3){
          
      
          if (categoryScore.OSTEOPATHY ==  2) {
            categoryScore.OSTEOPATHY = 2
          } else  {
            categoryScore.OSTEOPATHY = 0
          }
      
          if (categoryScore.ERGONOMICS >=  8) {
            categoryScore.ERGONOMICS = 4
          }else if (categoryScore.ERGONOMICS >= 6 && categoryScore.ERGONOMICS < 8 ) {
            categoryScore.ERGONOMICS = 3
          }else if (categoryScore.ERGONOMICS >= 4 && categoryScore.ERGONOMICS < 6 ) {
            categoryScore.ERGONOMICS = 2
          }else if (categoryScore.ERGONOMICS >= 2 && categoryScore.ERGONOMICS < 4 ) {
            categoryScore.ERGONOMICS = 1
          }else if (categoryScore.ERGONOMICS < 2) {
            categoryScore.ERGONOMICS = 0
          }
      
          if (categoryScore.PHYSIOTHERAPY >=  9) {
            categoryScore.PHYSIOTHERAPY = 4
          }else if (categoryScore.PHYSIOTHERAPY >= 7 && categoryScore.PHYSIOTHERAPY < 9 ) {
            categoryScore.PHYSIOTHERAPY = 3
          }else  if (categoryScore.PHYSIOTHERAPY < 7) {
            categoryScore.PHYSIOTHERAPY = 1
          }
      
          if (categoryScore.PSYCHOLOGY == 10) {
            categoryScore.PSYCHOLOGY = 2
          }else if (categoryScore.PSYCHOLOGY >= 6 && categoryScore.PSYCHOLOGY < 10 ) {
            categoryScore.PSYCHOLOGY = 1
          }else if (  categoryScore.PSYCHOLOGY < 6 ) {
            categoryScore.PSYCHOLOGY = 0
          }
      
      
        }else  if (state.bodyPartChoices["BACK_THORAX"] === 4){
          
      
          if (categoryScore.OSTEOPATHY ==  4) {
            categoryScore.OSTEOPATHY = 3
          } else  if (categoryScore.OSTEOPATHY ==  2) {
            categoryScore.OSTEOPATHY = 1
          } else {
            categoryScore.OSTEOPATHY = 0
          }
      
          if (categoryScore.ERGONOMICS >=  10) {
            categoryScore.ERGONOMICS = 4
          }else if (categoryScore.ERGONOMICS >= 6 && categoryScore.ERGONOMICS < 10 ) {
            categoryScore.ERGONOMICS = 3
          }else if (categoryScore.ERGONOMICS >= 4 && categoryScore.ERGONOMICS < 6 ) {
            categoryScore.ERGONOMICS = 2
          }else if (categoryScore.ERGONOMICS >= 2 && categoryScore.ERGONOMICS < 4 ) {
            categoryScore.ERGONOMICS = 1
          }else if (categoryScore.ERGONOMICS < 2) {
            categoryScore.ERGONOMICS = 0
          }
      
          if (categoryScore.PHYSIOTHERAPY >=  8) {
            categoryScore.PHYSIOTHERAPY = 4
          }else if (categoryScore.PHYSIOTHERAPY >= 6 && categoryScore.PHYSIOTHERAPY < 8 ) {
            categoryScore.PHYSIOTHERAPY = 3
          }else  if (categoryScore.PHYSIOTHERAPY < 6) {
            categoryScore.PHYSIOTHERAPY = 2
          }
      
          if (categoryScore.PSYCHOLOGY == 8) {
            categoryScore.PSYCHOLOGY = 2
          }else if (categoryScore.PSYCHOLOGY >= 6 && categoryScore.PSYCHOLOGY < 8 ) {
            categoryScore.PSYCHOLOGY = 1
          }else if (  categoryScore.PSYCHOLOGY < 6 ) {
            categoryScore.PSYCHOLOGY = 0
          }
      
      
        }

       
       
        if (state.bodyPartChoices["SHOULDERS"] === 1){
          if(categoryScore.MEDICINE == 4) {
            categoryScore.MEDICINE = 4
          }else {
            categoryScore.MEDICINE = 0
          }
      
          if (categoryScore.PSYCHOLOGY == 4) {
            categoryScore.PSYCHOLOGY = 1
          }else {
            categoryScore.PSYCHOLOGY = 0
          }
      
          if (categoryScore.OSTEOPATHY >=  10) {
            categoryScore.OSTEOPATHY = 4
          } else if (categoryScore.OSTEOPATHY >= 8 && categoryScore.OSTEOPATHY < 10 ) {
            categoryScore.OSTEOPATHY = 3
          }else if (categoryScore.OSTEOPATHY >= 6 && categoryScore.OSTEOPATHY < 8 ) {
            categoryScore.OSTEOPATHY = 1
          }else if (categoryScore.OSTEOPATHY < 6  ) {
            categoryScore.OSTEOPATHY = 0
          }
      
          if (categoryScore.ERGONOMICS >=  8) {
            categoryScore.ERGONOMICS = 3
          }else if (categoryScore.ERGONOMICS >= 6 && categoryScore.ERGONOMICS < 8 ) {
            categoryScore.ERGONOMICS = 2
          }else if (categoryScore.ERGONOMICS >= 4 && categoryScore.ERGONOMICS < 6 ) {
            categoryScore.ERGONOMICS = 1
          }else if (categoryScore.ERGONOMICS < 4) {
            categoryScore.ERGONOMICS = 0
          }
      
          if (categoryScore.PHYSIOTHERAPY >= 8 ) {
            categoryScore.PHYSIOTHERAPY = 2
          }else if (  categoryScore.PHYSIOTHERAPY <= 4  && categoryScore.PHYSIOTHERAPY < 8) {
            categoryScore.PHYSIOTHERAPY = 1
          }else if ( categoryScore.PHYSIOTHERAPY < 4) {
            categoryScore.PHYSIOTHERAPY = 0
          }
      
      
        } else if (state.bodyPartChoices["SHOULDERS"] === 2){
          if(categoryScore.MEDICINE == 4) {
            categoryScore.MEDICINE = 4
          }else {
            categoryScore.MEDICINE = 0
          }
      
          if (categoryScore.PSYCHOLOGY >= 4) {
            categoryScore.PSYCHOLOGY = 1
          }else {
            categoryScore.PSYCHOLOGY = 0
          }
      
          if (categoryScore.OSTEOPATHY >=  9) {
            categoryScore.OSTEOPATHY = 4
          } else if (categoryScore.OSTEOPATHY >= 6 && categoryScore.OSTEOPATHY < 9 ) {
            categoryScore.OSTEOPATHY = 3
          }else if (categoryScore.OSTEOPATHY >= 4 && categoryScore.OSTEOPATHY < 6 ) {
            categoryScore.OSTEOPATHY = 1
          }else if (categoryScore.OSTEOPATHY < 4  ) {
            categoryScore.OSTEOPATHY = 0
          }
      
          if (categoryScore.ERGONOMICS >=  8) {
            categoryScore.ERGONOMICS = 3
          }else if (categoryScore.ERGONOMICS >= 6 && categoryScore.ERGONOMICS < 8 ) {
            categoryScore.ERGONOMICS = 2
          }else if (categoryScore.ERGONOMICS >= 2 && categoryScore.ERGONOMICS < 6 ) {
            categoryScore.ERGONOMICS = 1
          }else if (categoryScore.ERGONOMICS < 2) {
            categoryScore.ERGONOMICS = 0
          }
      
          if (categoryScore.PHYSIOTHERAPY >= 10 ) {
            categoryScore.PHYSIOTHERAPY = 3
          }else if (  categoryScore.PHYSIOTHERAPY <= 7  && categoryScore.PHYSIOTHERAPY < 10) {
            categoryScore.PHYSIOTHERAPY = 2
          }else if (  categoryScore.PHYSIOTHERAPY <= 5  && categoryScore.PHYSIOTHERAPY < 7) {
            categoryScore.PHYSIOTHERAPY = 1
          }else if ( categoryScore.PHYSIOTHERAPY < 5) {
            categoryScore.PHYSIOTHERAPY = 0
          }
      
      
        }else if (state.bodyPartChoices["SHOULDERS"] === 3){
          
      
          if (categoryScore.OSTEOPATHY ==  4) {
            categoryScore.OSTEOPATHY = 3
          }  else   {
            categoryScore.OSTEOPATHY = 0
          }
      
      
          if (categoryScore.PSYCHOLOGY == 4) {
            categoryScore.PSYCHOLOGY = 1
          }else {
            categoryScore.PSYCHOLOGY = 0
          }
      
      
          if (categoryScore.ERGONOMICS >=  10) {
            categoryScore.ERGONOMICS = 4
          }else if (categoryScore.ERGONOMICS >= 8 && categoryScore.ERGONOMICS < 10 ) {
            categoryScore.ERGONOMICS = 3
          }else if (categoryScore.ERGONOMICS >= 4 && categoryScore.ERGONOMICS < 8 ) {
            categoryScore.ERGONOMICS = 2
          }else if (categoryScore.ERGONOMICS < 4) {
            categoryScore.ERGONOMICS = 0
          }
      
          if (categoryScore.PHYSIOTHERAPY >= 10 ) {
            categoryScore.PHYSIOTHERAPY = 4
          }else if (  categoryScore.PHYSIOTHERAPY <= 6  && categoryScore.PHYSIOTHERAPY < 10) {
            categoryScore.PHYSIOTHERAPY = 3
          } else if ( categoryScore.PHYSIOTHERAPY < 6) {
            categoryScore.PHYSIOTHERAPY = 2
          }
      
      
        }else if (state.bodyPartChoices["SHOULDERS"] === 4){
      
          if (categoryScore.PSYCHOLOGY == 4) {
            categoryScore.PSYCHOLOGY = 1
          }else {
            categoryScore.PSYCHOLOGY = 0
          }
      
          if (categoryScore.OSTEOPATHY ==  4) {
            categoryScore.OSTEOPATHY = 2
          }  else   {
            categoryScore.OSTEOPATHY = 0
          }
      
          if (categoryScore.ERGONOMICS >=  10) {
            categoryScore.ERGONOMICS = 4
          }else if (categoryScore.ERGONOMICS >= 8 && categoryScore.ERGONOMICS < 10 ) {
            categoryScore.ERGONOMICS = 3
          }else if (categoryScore.ERGONOMICS >= 4 && categoryScore.ERGONOMICS < 8 ) {
            categoryScore.ERGONOMICS = 2
          }else if (categoryScore.ERGONOMICS >= 2 && categoryScore.ERGONOMICS < 4 ) {
            categoryScore.ERGONOMICS = 1
          }else if (categoryScore.ERGONOMICS < 2) {
            categoryScore.ERGONOMICS = 0
          }
      
          if (categoryScore.PHYSIOTHERAPY >= 8 ) {
            categoryScore.PHYSIOTHERAPY = 4
          }else if (  categoryScore.PHYSIOTHERAPY <= 4  && categoryScore.PHYSIOTHERAPY < 8) {
            categoryScore.PHYSIOTHERAPY = 3
          } else if ( categoryScore.PHYSIOTHERAPY < 4) {
            categoryScore.PHYSIOTHERAPY = 2
          }
      
      
        }
      
        if (state.bodyPartChoices["KNEES"] === 1){
          if(categoryScore.MEDICINE == 4) {
            categoryScore.MEDICINE = 4
          }else {
            categoryScore.MEDICINE = 0
          }
      
          if (categoryScore.OSTEOPATHY ==  7) {
            categoryScore.OSTEOPATHY = 4
          } else if (categoryScore.OSTEOPATHY == 5 ) {
            categoryScore.OSTEOPATHY = 3
          } else if (categoryScore.OSTEOPATHY < 5  ) {
            categoryScore.OSTEOPATHY = 1
          }
      
          if (categoryScore.ERGONOMICS >=  8) {
            categoryScore.ERGONOMICS = 3
          }else if (categoryScore.ERGONOMICS >= 6 && categoryScore.ERGONOMICS < 8 ) {
            categoryScore.ERGONOMICS = 2
          }else if (categoryScore.ERGONOMICS >= 2 && categoryScore.ERGONOMICS < 6 ) {
            categoryScore.ERGONOMICS = 1
          }else if (categoryScore.ERGONOMICS < 2) {
            categoryScore.ERGONOMICS = 0
          }
      
          if (categoryScore.PHYSIOTHERAPY >= 4 ) {
            categoryScore.PHYSIOTHERAPY = 2
          } else if ( categoryScore.PHYSIOTHERAPY < 4) {
            categoryScore.PHYSIOTHERAPY = 0
          }
      
      
        }else if (state.bodyPartChoices["KNEES"] === 2){
          if(categoryScore.MEDICINE == 4) {
            categoryScore.MEDICINE = 4
          }else {
            categoryScore.MEDICINE = 0
          }

          if(categoryScore.COACH == 4) {
            categoryScore.COACH = 2 
          }else {
            categoryScore.COACH = 0
          }

          if(categoryScore.DIET == 4) {
            categoryScore.DIET = 2
          }else {
            categoryScore.DIET = 0
          }

          
          if (categoryScore.PSYCHOLOGY == 4) {
            categoryScore.PSYCHOLOGY = 1
          }else {
            categoryScore.PSYCHOLOGY = 0
          }

          if (categoryScore.OSTEOPATHY ==  8) {
            categoryScore.OSTEOPATHY = 4
          } else if (categoryScore.OSTEOPATHY >= 4 && categoryScore.OSTEOPATHY < 8  ) {
            categoryScore.OSTEOPATHY = 3
          } else   {
            categoryScore.OSTEOPATHY = 0
          }
      
          if (categoryScore.ERGONOMICS >=  8) {
            categoryScore.ERGONOMICS = 4
          }else if (categoryScore.ERGONOMICS >= 6 && categoryScore.ERGONOMICS < 8 ) {
            categoryScore.ERGONOMICS = 3
          }else if (categoryScore.ERGONOMICS >= 4 && categoryScore.ERGONOMICS < 6 ) {
            categoryScore.ERGONOMICS = 2
          }else if (categoryScore.ERGONOMICS < 4) {
            categoryScore.ERGONOMICS = 0
          }
      
          if (categoryScore.PHYSIOTHERAPY >= 12 ) {
            categoryScore.PHYSIOTHERAPY = 3
          } else if (categoryScore.PHYSIOTHERAPY >= 6   && categoryScore.PHYSIOTHERAPY < 12  ) {
            categoryScore.PHYSIOTHERAPY = 2
          }else if (categoryScore.PHYSIOTHERAPY >= 4   && categoryScore.PHYSIOTHERAPY < 6  ) {
            categoryScore.PHYSIOTHERAPY = 1
          }else if ( categoryScore.PHYSIOTHERAPY < 4) {
            categoryScore.PHYSIOTHERAPY = 0
          }
      
      
        }else if (state.bodyPartChoices["KNEES"] === 3){
          if(categoryScore.MEDICINE == 4) {
            categoryScore.MEDICINE = 4
          }else {
            categoryScore.MEDICINE = 0
          }

          if (categoryScore.OSTEOPATHY ==  4) {
            categoryScore.OSTEOPATHY = 2
          }  else   {
            categoryScore.OSTEOPATHY = 0
          }
 
          
          if (categoryScore.PSYCHOLOGY == 4) {
            categoryScore.PSYCHOLOGY = 1
          }else {
            categoryScore.PSYCHOLOGY = 0
          }

         
      
          if (categoryScore.ERGONOMICS >=  8) {
            categoryScore.ERGONOMICS = 4
          }else if (categoryScore.ERGONOMICS >= 6 && categoryScore.ERGONOMICS < 8 ) {
            categoryScore.ERGONOMICS = 3
          }else if (categoryScore.ERGONOMICS >= 4 && categoryScore.ERGONOMICS < 6 ) {
            categoryScore.ERGONOMICS = 2
          }else if (categoryScore.ERGONOMICS >= 2 && categoryScore.ERGONOMICS < 4 ) {
            categoryScore.ERGONOMICS = 1
          }else  {
            categoryScore.ERGONOMICS = 0
          }
      
          if (categoryScore.PHYSIOTHERAPY >= 8 ) {
            categoryScore.PHYSIOTHERAPY = 4
          } else if (categoryScore.PHYSIOTHERAPY >= 6   && categoryScore.PHYSIOTHERAPY < 10  ) {
            categoryScore.PHYSIOTHERAPY = 3
          }else if (categoryScore.PHYSIOTHERAPY >= 4   && categoryScore.PHYSIOTHERAPY < 6  ) {
            categoryScore.PHYSIOTHERAPY = 2
          }else if ( categoryScore.PHYSIOTHERAPY < 4) {
            categoryScore.PHYSIOTHERAPY = 1
          }
      
      
        }else if (state.bodyPartChoices["KNEES"] === 4){
          

          if (categoryScore.OSTEOPATHY ==  4) {
            categoryScore.OSTEOPATHY = 2
          }  else   {
            categoryScore.OSTEOPATHY = 0
          }
 
          
          if (categoryScore.PSYCHOLOGY == 4) {
            categoryScore.PSYCHOLOGY = 1
          }else {
            categoryScore.PSYCHOLOGY = 0
          }

         
      
          if (categoryScore.ERGONOMICS >=  8) {
            categoryScore.ERGONOMICS = 4
          }else if (categoryScore.ERGONOMICS >= 6 && categoryScore.ERGONOMICS < 8 ) {
            categoryScore.ERGONOMICS = 3
          }else if (categoryScore.ERGONOMICS >= 4 && categoryScore.ERGONOMICS < 6 ) {
            categoryScore.ERGONOMICS = 2
          }else if (categoryScore.ERGONOMICS >= 2 && categoryScore.ERGONOMICS < 4 ) {
            categoryScore.ERGONOMICS = 1
          }else  {
            categoryScore.ERGONOMICS = 0
          }
      
          if (categoryScore.PHYSIOTHERAPY >= 8 ) {
            categoryScore.PHYSIOTHERAPY = 4
          } else if ( categoryScore.PHYSIOTHERAPY < 8) {
            categoryScore.PHYSIOTHERAPY = 3
          }
      
      
        }
      
      
        if (state.bodyPartChoices["HIP"] === 1){
          if(categoryScore.MEDICINE == 4) {
            categoryScore.MEDICINE = 4
          }else {
            categoryScore.MEDICINE = 0
          }
      
          if (categoryScore.OSTEOPATHY ==  7) {
            categoryScore.OSTEOPATHY = 4
          } else if (categoryScore.OSTEOPATHY >= 4  && categoryScore.OSTEOPATHY < 7 ) {
            categoryScore.OSTEOPATHY = 3
          } else if (categoryScore.OSTEOPATHY < 4  ) {
            categoryScore.OSTEOPATHY = 1
          }
      
          if (categoryScore.PHYSIOTHERAPY == 4 ) {
            categoryScore.PHYSIOTHERAPY = 1
          }  
      
      
          if (categoryScore.ERGONOMICS ==  8) {
            categoryScore.ERGONOMICS = 2
          }else if (categoryScore.ERGONOMICS >= 6 && categoryScore.ERGONOMICS < 8 ) {
            categoryScore.ERGONOMICS = 1
          } 
      
          
      
      
        } else if (state.bodyPartChoices["HIP"] === 2){
          if(categoryScore.MEDICINE == 4) {
            categoryScore.MEDICINE = 4
          }else {
            categoryScore.MEDICINE = 0
          }
          
          if(categoryScore.DIET == 4) {
            categoryScore.DIET = 2
          }else {
            categoryScore.DIET = 0
          }

          if (categoryScore.PSYCHOLOGY == 2) {
            categoryScore.PSYCHOLOGY = 1
          }else {
            categoryScore.PSYCHOLOGY = 0
          }
 
          if(categoryScore.COACH == 4) {
            categoryScore.COACH = 2 
          }else {
            categoryScore.COACH = 0
          }
 
          if (categoryScore.OSTEOPATHY ==  6) {
            categoryScore.OSTEOPATHY = 3
          } else if (categoryScore.OSTEOPATHY == 4    ) {
            categoryScore.OSTEOPATHY = 2
          } else if (categoryScore.OSTEOPATHY < 4  ) {
            categoryScore.OSTEOPATHY = 1
          }
 
          if (categoryScore.ERGONOMICS >=  9) {
            categoryScore.ERGONOMICS = 4
          }else if (categoryScore.ERGONOMICS >= 8 && categoryScore.ERGONOMICS < 9 ) {
            categoryScore.ERGONOMICS = 3
          }else if (categoryScore.ERGONOMICS >= 3 && categoryScore.ERGONOMICS < 8 ) {
            categoryScore.ERGONOMICS = 1
          } else   {
            categoryScore.ERGONOMICS = 0
          } 
          
          if (categoryScore.PHYSIOTHERAPY >= 8 ) {
            categoryScore.PHYSIOTHERAPY = 3
          } else if (categoryScore.PHYSIOTHERAPY >= 6 &&  categoryScore.PHYSIOTHERAPY < 8 ) {
            categoryScore.PHYSIOTHERAPY = 2
          } else if (categoryScore.PHYSIOTHERAPY >= 4 &&  categoryScore.PHYSIOTHERAPY < 6 ) {
            categoryScore.PHYSIOTHERAPY = 1
          }else if (  categoryScore.PHYSIOTHERAPY < 4 ) {
            categoryScore.PHYSIOTHERAPY = 0
          }    
      
          
      
      
        }else if (state.bodyPartChoices["HIP"] === 3){
          
          if (categoryScore.OSTEOPATHY ==  2) {
            categoryScore.OSTEOPATHY = 1
          }  else   {
            categoryScore.OSTEOPATHY = 0
          }
 
          if (categoryScore.ERGONOMICS >=  8) {
            categoryScore.ERGONOMICS = 3
          }else if (categoryScore.ERGONOMICS >= 5 && categoryScore.ERGONOMICS < 8 ) {
            categoryScore.ERGONOMICS = 2
          }else if (categoryScore.ERGONOMICS >= 2 && categoryScore.ERGONOMICS < 5 ) {
            categoryScore.ERGONOMICS = 1
          } else   {
            categoryScore.ERGONOMICS = 0
          } 
          
          if (categoryScore.PHYSIOTHERAPY >= 8 ) {
            categoryScore.PHYSIOTHERAPY = 4
          } else if (categoryScore.PHYSIOTHERAPY >= 6 &&  categoryScore.PHYSIOTHERAPY < 8 ) {
            categoryScore.PHYSIOTHERAPY = 3
          } else if (categoryScore.PHYSIOTHERAPY >= 4 &&  categoryScore.PHYSIOTHERAPY < 6 ) {
            categoryScore.PHYSIOTHERAPY = 2
          }else if (  categoryScore.PHYSIOTHERAPY < 4 ) {
            categoryScore.PHYSIOTHERAPY = 1
          }    
      
          
      
      
        }else if (state.bodyPartChoices["HIP"] === 4){
          
         
          if (categoryScore.ERGONOMICS >=  8) {
            categoryScore.ERGONOMICS = 4
          }else if (categoryScore.ERGONOMICS >= 6 && categoryScore.ERGONOMICS < 8 ) {
            categoryScore.ERGONOMICS = 3
          }else if (categoryScore.ERGONOMICS >= 4 && categoryScore.ERGONOMICS < 6 ) {
            categoryScore.ERGONOMICS = 2
          }else if (categoryScore.ERGONOMICS >= 2 && categoryScore.ERGONOMICS < 4 ) {
            categoryScore.ERGONOMICS = 1
          } else   {
            categoryScore.ERGONOMICS = 0
          } 
          
          if (categoryScore.PHYSIOTHERAPY >= 8 ) {
            categoryScore.PHYSIOTHERAPY = 4
          }  else if (categoryScore.PHYSIOTHERAPY >= 4 &&  categoryScore.PHYSIOTHERAPY < 8 ) {
            categoryScore.PHYSIOTHERAPY = 3
          }else if (  categoryScore.PHYSIOTHERAPY < 4 ) {
            categoryScore.PHYSIOTHERAPY = 2
          }    
      
          
      
      
        }
        
        if (state.bodyPartChoices["LEG_FOOT"] === 1){
          if(categoryScore.MEDICINE == 4) {
            categoryScore.MEDICINE = 4
          }else {
            categoryScore.MEDICINE = 0
          }
      
          if (categoryScore.OSTEOPATHY >=  7) {
            categoryScore.OSTEOPATHY = 4
          } else if (categoryScore.OSTEOPATHY >= 5  && categoryScore.OSTEOPATHY < 7 ) {
            categoryScore.OSTEOPATHY = 3
          } else if (categoryScore.OSTEOPATHY < 5  ) {
            categoryScore.OSTEOPATHY = 1
          }
      
      
          if (categoryScore.ERGONOMICS >=  7) {
            categoryScore.ERGONOMICS = 2
          }else if (categoryScore.ERGONOMICS >= 2 && categoryScore.ERGONOMICS < 7 ) {
            categoryScore.ERGONOMICS = 1
          } else {
            categoryScore.ERGONOMICS = 0
          }
      
          
          if (categoryScore.PHYSIOTHERAPY == 6 ) {
            categoryScore.PHYSIOTHERAPY = 1
          }  else if (categoryScore.PHYSIOTHERAPY >= 4 && categoryScore.PHYSIOTHERAPY < 6 ) {
            categoryScore.PHYSIOTHERAPY = 1
          } else {
            categoryScore.PHYSIOTHERAPY = 0
          }
      
      
      
        }else if (state.bodyPartChoices["LEG_FOOT"] === 2){
          if(categoryScore.MEDICINE == 4) {
            categoryScore.MEDICINE = 4
          }else {
            categoryScore.MEDICINE = 0
          }

          if(categoryScore.DIET == 4) {
            categoryScore.DIET = 2
          }else {
            categoryScore.DIET = 0
          }

          if (categoryScore.PSYCHOLOGY == 2) {
            categoryScore.PSYCHOLOGY = 1
          }else {
            categoryScore.PSYCHOLOGY = 0
          }

          if (categoryScore.COACH == 4) {
            categoryScore.COACH = 2
          }else {
            categoryScore.COACH = 0
          }

          if (categoryScore.OSTEOPATHY ==  6) {
            categoryScore.OSTEOPATHY = 4
          } else if (categoryScore.OSTEOPATHY == 4  ) {
            categoryScore.OSTEOPATHY = 3
          } else if (categoryScore.OSTEOPATHY < 4  ) {
            categoryScore.OSTEOPATHY = 1
          }
      
      
          if (categoryScore.ERGONOMICS >=  8) {
            categoryScore.ERGONOMICS = 3
          }else if (categoryScore.ERGONOMICS >= 6 && categoryScore.ERGONOMICS < 8 ) {
            categoryScore.ERGONOMICS = 2
          }else if (categoryScore.ERGONOMICS >= 2 && categoryScore.ERGONOMICS < 6 ) {
            categoryScore.ERGONOMICS = 1
          } else {
            categoryScore.ERGONOMICS = 0
          }
      
          
          if (categoryScore.PHYSIOTHERAPY >= 13 ) {
            categoryScore.PHYSIOTHERAPY = 3
          }  else if (categoryScore.PHYSIOTHERAPY >= 8 && categoryScore.PHYSIOTHERAPY < 13 ) {
            categoryScore.PHYSIOTHERAPY = 2
          } else if (categoryScore.PHYSIOTHERAPY >= 6 && categoryScore.PHYSIOTHERAPY < 8 ) {
            categoryScore.PHYSIOTHERAPY = 1
          } else if (  categoryScore.PHYSIOTHERAPY < 6 ){
            categoryScore.PHYSIOTHERAPY = 0
          }
      
      
      
        }else if (state.bodyPartChoices["LEG_FOOT"] === 3){
         

          if (categoryScore.OSTEOPATHY ==  2) {
            categoryScore.OSTEOPATHY = 2
          }   else {
            categoryScore.OSTEOPATHY = 0
          }
      
      
          if (categoryScore.ERGONOMICS >=  8) {
            categoryScore.ERGONOMICS = 3
          }else if (categoryScore.ERGONOMICS >= 6 && categoryScore.ERGONOMICS < 8 ) {
            categoryScore.ERGONOMICS = 2
          }else if (categoryScore.ERGONOMICS >= 4 && categoryScore.ERGONOMICS < 6 ) {
            categoryScore.ERGONOMICS = 1
          } else {
            categoryScore.ERGONOMICS = 0
          }
      
          
          if (categoryScore.PHYSIOTHERAPY >= 9 ) {
            categoryScore.PHYSIOTHERAPY = 4
          }  else if (categoryScore.PHYSIOTHERAPY >= 5 && categoryScore.PHYSIOTHERAPY < 9 ) {
            categoryScore.PHYSIOTHERAPY = 3
          } else if (  categoryScore.PHYSIOTHERAPY < 5 ){
            categoryScore.PHYSIOTHERAPY = 1
          }
      
      
      
        }else if (state.bodyPartChoices["LEG_FOOT"] === 4){
         

          if (categoryScore.OSTEOPATHY ==  2) {
            categoryScore.OSTEOPATHY = 2
          }   else {
            categoryScore.OSTEOPATHY = 0
          }
      
      
          if (categoryScore.ERGONOMICS >=  8) {
            categoryScore.ERGONOMICS = 3
          }else if (categoryScore.ERGONOMICS >= 6 && categoryScore.ERGONOMICS < 8 ) {
            categoryScore.ERGONOMICS = 2
          }else if (categoryScore.ERGONOMICS >= 4 && categoryScore.ERGONOMICS < 6 ) {
            categoryScore.ERGONOMICS = 1
          } else {
            categoryScore.ERGONOMICS = 0
          }
      
          
          if (categoryScore.PHYSIOTHERAPY >= 9 ) {
            categoryScore.PHYSIOTHERAPY = 4
          }  else if (categoryScore.PHYSIOTHERAPY >= 5 && categoryScore.PHYSIOTHERAPY < 9 ) {
            categoryScore.PHYSIOTHERAPY = 3
          } else if (  categoryScore.PHYSIOTHERAPY < 5 ){
            categoryScore.PHYSIOTHERAPY = 1
          }
      
      
      
        }
      
        if (state.bodyPartChoices["LUMBAR_BUTTOCKS"] === 1){
          if(categoryScore.MEDICINE == 4) {
            categoryScore.MEDICINE = 4
          }else {
            categoryScore.MEDICINE = 0
          }
      
          if (categoryScore.OSTEOPATHY >= 6) {
            categoryScore.OSTEOPATHY = 4
          } else if (categoryScore.OSTEOPATHY == 5   ) {
            categoryScore.OSTEOPATHY = 3
          } else if (categoryScore.OSTEOPATHY <= 3  ) {
            categoryScore.OSTEOPATHY = 2
          }
      
      
          if (categoryScore.ERGONOMICS >=  4) {
            categoryScore.ERGONOMICS = 4
          }else if (categoryScore.ERGONOMICS == 3  ) {
            categoryScore.ERGONOMICS = 3
          }else if (categoryScore.ERGONOMICS == 2  ) {
            categoryScore.ERGONOMICS = 2
          } else if (categoryScore.ERGONOMICS < 2  ) {
            categoryScore.ERGONOMICS = 0
          }
      
          
          if (categoryScore.PHYSIOTHERAPY >= 4 ) {
            categoryScore.PHYSIOTHERAPY = 2
          }  else if (categoryScore.PHYSIOTHERAPY >= 2 && categoryScore.PHYSIOTHERAPY < 4 ) {
            categoryScore.PHYSIOTHERAPY = 1
          } else if (categoryScore.PHYSIOTHERAPY < 2 ) {
            categoryScore.PHYSIOTHERAPY = 0
          }
      
      
      
        } else if (state.bodyPartChoices["LUMBAR_BUTTOCKS"] === 2){
          if(categoryScore.MEDICINE == 4) {
            categoryScore.MEDICINE = 4
          }else {
            categoryScore.MEDICINE = 0
          }

          if(categoryScore.DIET == 4) {
            categoryScore.DIET = 4
          }else {
            categoryScore.DIET = 0
          }

          if(categoryScore.COACH == 4) {
            categoryScore.COACH = 4
          }else {
            categoryScore.COACH = 0
          }
      
          if (categoryScore.OSTEOPATHY > 5) {
            categoryScore.OSTEOPATHY = 4
          } else if (categoryScore.OSTEOPATHY == 5   ) {
            categoryScore.OSTEOPATHY = 3
          } else if (categoryScore.OSTEOPATHY < 5  ) {
            categoryScore.OSTEOPATHY = 2
          }
      
      
          if (categoryScore.ERGONOMICS >=  8) {
            categoryScore.ERGONOMICS = 4
          }else if (categoryScore.ERGONOMICS >= 5  && categoryScore.ERGONOMICS <  8) {
            categoryScore.ERGONOMICS = 3
          }else if (categoryScore.ERGONOMICS >= 4  && categoryScore.ERGONOMICS <  5) {
            categoryScore.ERGONOMICS = 1
          } else if (categoryScore.ERGONOMICS < 4 ) {
            categoryScore.ERGONOMICS = 0
          }
      
          
          if (categoryScore.PHYSIOTHERAPY >= 8 ) {
            categoryScore.PHYSIOTHERAPY = 3
          }  else if (categoryScore.PHYSIOTHERAPY >= 5 && categoryScore.PHYSIOTHERAPY < 8 ) {
            categoryScore.PHYSIOTHERAPY = 2
          } else if (categoryScore.PHYSIOTHERAPY >= 4 && categoryScore.PHYSIOTHERAPY < 5 ) {
            categoryScore.PHYSIOTHERAPY = 1
          }else if (categoryScore.PHYSIOTHERAPY < 4) {
            categoryScore.PHYSIOTHERAPY = 0
          }
          
          if (categoryScore.PSYCHOLOGY >= 8) {
            categoryScore.PSYCHOLOGY = 2
          }else if (categoryScore.PSYCHOLOGY >= 6 && categoryScore.PSYCHOLOGY < 8  ) {
            categoryScore.PSYCHOLOGY = 1
          }else if (categoryScore.PSYCHOLOGY < 6) {
            categoryScore.PHYSIOTHERAPY = 0
          }
      
      
        } else if (state.bodyPartChoices["LUMBAR_BUTTOCKS"] === 3){
          if(categoryScore.MEDICINE >= 4) {
            categoryScore.MEDICINE = 4
          }else {
            categoryScore.MEDICINE = 0
          }
 
          if(categoryScore.COACH == 3) {
            categoryScore.COACH = 1
          }else {
            categoryScore.COACH = 0
          }
      
          if (categoryScore.OSTEOPATHY == 3) {
            categoryScore.OSTEOPATHY = 3
          } else if (categoryScore.OSTEOPATHY == 2   ) {
            categoryScore.OSTEOPATHY = 2
          } else   {
            categoryScore.OSTEOPATHY = 0
          }
      
      
          if (categoryScore.ERGONOMICS >=  8) {
            categoryScore.ERGONOMICS = 4
          }else if (categoryScore.ERGONOMICS >= 6  && categoryScore.ERGONOMICS <  8) {
            categoryScore.ERGONOMICS = 3
          }else if (categoryScore.ERGONOMICS >= 3  && categoryScore.ERGONOMICS <  6) {
            categoryScore.ERGONOMICS = 2
          }else if (categoryScore.ERGONOMICS >= 2  && categoryScore.ERGONOMICS <  3) {
            categoryScore.ERGONOMICS = 1
          } else if (categoryScore.ERGONOMICS < 3 ) {
            categoryScore.ERGONOMICS = 0
          }
      
          
          if (categoryScore.PHYSIOTHERAPY >= 5 ) {
            categoryScore.PHYSIOTHERAPY = 4
          }  else if (categoryScore.PHYSIOTHERAPY >= 4 && categoryScore.PHYSIOTHERAPY < 5 ) {
            categoryScore.PHYSIOTHERAPY = 3
          }else if (categoryScore.PHYSIOTHERAPY < 4) {
            categoryScore.PHYSIOTHERAPY = 2
          }
          
          if (categoryScore.PSYCHOLOGY >= 10) {
            categoryScore.PSYCHOLOGY = 2
          }else if (categoryScore.PSYCHOLOGY >= 7 && categoryScore.PSYCHOLOGY < 10  ) {
            categoryScore.PSYCHOLOGY = 1
          }else if (categoryScore.PSYCHOLOGY < 7) {
            categoryScore.PHYSIOTHERAPY = 0
          }
      
      
        } else if (state.bodyPartChoices["LUMBAR_BUTTOCKS"] === 4){
          
 
          if(categoryScore.COACH == 4) {
            categoryScore.COACH = 1
          }else {
            categoryScore.COACH = 0
          }

          if (categoryScore.OSTEOPATHY == 3) {
            categoryScore.OSTEOPATHY = 2
          } else  {
            categoryScore.OSTEOPATHY = 0
          }
      
          if (categoryScore.ERGONOMICS >= 8) {
            categoryScore.ERGONOMICS = 4
          } else if (categoryScore.ERGONOMICS >= 6  && categoryScore.ERGONOMICS <  8)  {
            categoryScore.ERGONOMICS = 3
          } else if (categoryScore.ERGONOMICS >= 3  && categoryScore.ERGONOMICS <  6)  {
            categoryScore.ERGONOMICS = 1
          }else if (categoryScore.ERGONOMICS < 3 ) {
            categoryScore.ERGONOMICS = 0
          }
       
          if (categoryScore.PHYSIOTHERAPY >= 7 ) {
            categoryScore.PHYSIOTHERAPY = 4
          }  else if (categoryScore.PHYSIOTHERAPY >= 4 && categoryScore.PHYSIOTHERAPY < 7 ) {
            categoryScore.PHYSIOTHERAPY = 3
          }else if (categoryScore.PHYSIOTHERAPY < 4) {
            categoryScore.PHYSIOTHERAPY = 2
          }
          
          if (categoryScore.PSYCHOLOGY >= 10) {
            categoryScore.PSYCHOLOGY = 2
          }else if (categoryScore.PSYCHOLOGY >= 6 && categoryScore.PSYCHOLOGY < 10  ) {
            categoryScore.PSYCHOLOGY = 1
          }else if (categoryScore.PSYCHOLOGY < 6) {
            categoryScore.PHYSIOTHERAPY = 0
          }
      
      
        }     
      
      }
      return { ...state, otherSectionQuestionToUse: nextArray, isLoadingNextOtherSectionQuestion: true, categoryScore }
    }
    case ACTIONS.FETCH_CATEGORY_FOOD_INIT: {

      return { ...state, isLoadingFoodCategories: true }
    }
    case ACTIONS.FETCH_CATEGORY_FOOD_SUCCEDED: {
      const foodList = Object.keys(payload).reduce((acc, key) => {
        const breakfast = payload[key].meals.every((meal) => meal.id === 4)
        const lunch = payload[key].meals.every((meal) => meal.id === 5)
        const snack = payload[key].meals.every((meal) => meal.id === 3)
        const dinner = payload[key].meals.every((meal) => meal.id === 6)
        if (breakfast){
          acc.breakfast = acc.breakfast.concat(payload[key].foods)
            .filter(food => food.hasOwnProperty('category_id'))
        }
        if (lunch){
          acc.lunch = acc.lunch.concat(payload[key].foods)
            .filter(food => food.hasOwnProperty('category_id'))
        }
        if (snack){
          acc.snack = acc.snack.concat(payload[key].foods)
            .filter(food => food.hasOwnProperty('category_id'))
        }
        if (dinner){
          acc.dinner = acc.dinner.concat(payload[key].foods)
            .filter(food => food.hasOwnProperty('category_id'))
        }
        return acc
      }, {breakfast: [], lunch: [], snack: [], dinner: []})
      return { ...state, isLoadingFoodCategories: false, foodCategories: payload, foodList }
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
    case ACTIONS.HAS_PAIN : {
      return { ...state, hasPain: payload.hasPain }
    }
    case ACTIONS.SAVE_QUESTION_ANSWER: {
      if (payload.page === 3) {
        const bodyPartChoices = { ...state.bodyPartChoices }
        if (payload.name === "Moins de 3 semaines" && payload.type === "CERVICAL"){
          bodyPartChoices["CERVICAL"] = 1
        }
        if (payload.name === "Entre 3 semaines et 3 mois" && payload.type === "CERVICAL"){
          bodyPartChoices["CERVICAL"] = 2
        }
        if (payload.name === "Entre 3 mois et un an" && payload.type === "CERVICAL"){
          bodyPartChoices["CERVICAL"] = 3
        }
        if (payload.name === "Plus d'un an" && payload.type === "CERVICAL"){
          bodyPartChoices["CERVICAL"] = 4
        }
        let newAnswersHealth = [...state.healthAnsweredQuestion, payload]
        return { ...state, bodyPartChoices, healthAnsweredQuestion: newAnswersHealth, bodyPartChoices /*categoryScore*/ }

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
    case ACTIONS.GO_TO_NUTRUTION : {
      return {...state,nutrutionalInformationPage:false}
    }
    case ACTIONS.CLEAN_CACH: {
      Object.assign(state, {})
      return state

    }
    default: {
      return state
    }
  }
}
