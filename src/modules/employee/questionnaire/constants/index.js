export const ACTIONS = {
  NEXT_PAGE: "questionnaire@NEXT_PAGE",
  PREV_PAGE: "questionnaire@PREV_PAGE",
  EXIT_PAGE: "questionnaire@EXIT_PAGE",
  NEXT_QUESTION: "questionnaire@NEXT_QUESTION",
  CHANGE_PAGE: "questionnaire@CHANGE_PAGE",
  SELECT_DISELECT_FROM_BODY: "questionnaire@SELECT_DISELECT_FROM_BODY",
  NEXT_SELECTED_FROM_BODY_QUESTION: "questionnaire@nextSelectedFromBodyQuestions",
  NEXT_OTHER_QUESTIONS_SECTION: "questionnaire@nextOtherQuestionSection",
  ASK_SCREEN: "questionnaire@ASK_CONTINUE",
  UPDATE_SCORE: "questionnaire@UPDATE_SCORE",
  UPDATE_SELECTED_SCORE: "questionnaire@UPDATE_SELECTED_SCORE",
  UPDATE_DESELECTED_SCORE: "questionnaire@UPDATE_DESELECTED_SCORE",
  TASKES_ENDED: "questionnaire@TASKES_ENDED",
  GET_TREE_NODE_PARAMS_INIT: "questionnaire@GET_TREE_NODE_PARAMS_INIT",
  GET_TREE_NODE_PARAMS_SUCCEDED: "questionnaire@GET_TREE_NODE_PARAMS_SUCCEDED",
  GET_TREE_NODE_PARAMS_FAILED: "questionnaire@GET_TREE_NODE_PARAMS_FAILED",

  FETCH_QUESTION_SCORES_INIT: "questionnaire@FETCH_QUESTION_SCORES_INIT",
  FETCH_QUESTION_SCORES_SUCCEDED: "questionnaire@FETCH_QUESTION_SCORES_SUCCEDED",
  FETCH_QUESTION_SCORES_FAILED: "questionnaire@FETCH_QUESTION_SCORES_FAILED",

  FETCH_QUESTION_INIT: "questionnaire@FETCH_QUESTION_INIT",
  FETCH_QUESTION_SUCCEDED: "questionnaire@FETCH_QUESTION_SUCCEDED",
  FETCH_QUESTION_FAILED: "questionnaire@FETCH_QUESTION_FAILED",

  FETCH_CATEGORY_FOOD_INIT: 'questionnaire@FETCH_CATEGORY_FOOD_INIT',
  FETCH_CATEGORY_FOOD_SUCCEDED: 'questionnaire@FETCH_CATEGORY_FOOD_SUCCEDED',
  FETCH_CATEGORY_FOOD_FAILED: 'questionnaire@FETCH_CATEGORY_FOOD_FAILED',

  FETCH_FOODS_INIT: 'questionnaire@FETCH_FOODS_INIT',
  FETCH_FOODS_SUCCEDED: 'questionnaire@FETCH_FOODS_SUCCEDED',
  FETCH_FOODS_FAILED: 'questionnaire@FETCH_FOODS_FAILED',

  FILL_SCORES: 'questionnaire@FILL_SCORES',
  FILL_SELECTED_DESELECTED_NUTRI_SCORES: 'questionnaire@FILL_SELECTED_DESELECTED_NUTRI_SCORES',
  SAVE_QUESTION_ANSWER: 'questionnaire@SAVE_QUEStION_ANSWER',

  HAS_PAIN: 'questionnaire@HAS_PAIN',

  SAVE_STATE_INIT: 'questionnaire@SAVE_STATE_INIT',
  SAVE_STATE_SUCCEDED: 'questionnaire@SAVE_STATE_SUCCEDED',
  SAVE_STATE_FAILED: 'questionnaire@SAVE_STATE_FAILED',

  GET_STATE_INIT: 'questionnaire@GET_STATE_INIT',
  GET_STATE_SUCCEDED: 'questionnaire@GET_STATE_SUCCEDED',
  GET_STATE_FAILED: 'questionnaire@GET_STATE_FAILED',

  NEXT_SECTION_THIRD: 'questionnaire@NEXT_SECTION_THIRD',
  NEXT_SECTION_FOURTH: 'questionnaire@NEXT_SECTION_FOURTH',

  UPDATE_OTHER_QUESTION_TO_USE: 'questionnaire@UPDATE_OTHER_QUESTION_TO_USE',

  SAVE_NUTRI_STATE: 'questionnaire@SAVE_NUTRI_STATE',

  SAVE_SCORES_INIT: 'questionnaire@SAVE_SCORES_INIT',
  SAVE_SCORES_SUCCEDED: 'questionnaire@SAVE_SCORES_SUCCEDED',
  SAVE_SCORES_FAILED: 'questionnaire@SAVE_SCORES_FAILED',
  CLEAN_CACH: "CLEAN_CACH",
  GO_TO_NUTRUTION: "questionnaire@GO_TO_NUTRUTION",
  CHANGE_PAGE_AFTER_SELECTION: "questionnaire@CHANGE_PAGE_AFTER_SELECTION"
}

export const ENDPOINT = {
  QUESTION_SCORES: "/api/tree/:treeparam/all/scores",
  QUESTION: "/api/tree/:treeparam/node/:nodeparam",
  FOOD_CATEGORY: 'category/cat-foods-meals',
  FOOD_FOODS: "food/list?page=1&searchName=&searchLegend=&searchSelectedScore=&searchDeselectedScore=",
  IMAGES_PATH: "https://predicta.fulltech.io/public/uploads/",
  HISTORY_SAVE: "/api/question-history",
  SAVE_SCORS: `/api/employee/${localStorage.getItem("id")}/questionnaires`
}



export const HUMAN_BODY = {
  HEADACHE: { value: "Céphalées (maux de tête) avec le visage de face", id: "HEADACHE" },
  CERVICAL: { value: "Cervicalgies (cou)", id: "CERVICAL" },
  SHOULDERS: { value: "Épaules", id: "SHOULDERS" },
  BACK_THORAX: { value: "Dos/Thorax", id: "BACK_THORAX" },
  ELBOW_WIRST_HAND: { value: "Coude/Poignet/Main", id: "ELBOW_WIRST_HAND" },
  ABDOMINAL_PAIN: { value: "Douleurs digestives (maux de ventre)", id: "ABDOMINAL_PAIN" },
  LUMBAR_BUTTOCKS: { value: "Lombalgies/fessalgies (avec l'arrière des cuisses)", id: "LUMBAR_BUTTOCKS" },
  HIP: { value: "Hanche (que sur la vue de face)", id: "HIP" },
  KNEES: { value: "Genoux", id: "KNEES" },
  LEG_FOOT: { value: "Jambe/Pied", id: "LEG_FOOT" },
}
export const statcTreeNode = {
  HEADACHE: { treeparam: "ccb5d1793e5f45a18861fccfb4a06216", nodeparam: "20d73d9958fb43629fbfacb4b49413b2" },
  CERVICAL: { treeparam: "f7b857ccf6dc4061a1820a0a5ca6440c", nodeparam: "123e8f8a010547c285c7a2c9e86ca89e" },
  SHOULDERS: { treeparam: "07b6f8ca782e449b88041033037accdc", nodeparam: "6c0572c6f4834be38e01f23357864015" },
  BACK_THORAX: { treeparam: "bc1254428f474bb5ba2525d84c66055c", nodeparam: "29bcc98ac5bf410a93d432cafd71a83d" },
  ELBOW_WIRST_HAND: { treeparam: "e199669151894fddb3c15600e8459d54", nodeparam: "fab8aa138432409283a09ee931308f90" },
  ABDOMINAL_PAIN: { treeparam: "d2844841b8e944dab115c67a69983722", nodeparam: "d036099a268e49ddb129fee0c0fd0760" },
  LUMBAR_BUTTOCKS: { treeparam: "eda8d9baad0349f49a487a4fd5898a21", nodeparam: "4ac2f6fb5ee349b5af25bbc16914a789" },
  HIP: { treeparam: "1d344f888862487dbdcaeebfc6ab7ed0", nodeparam: "b8d0ce1d66c04a278645178aece2f881" },
  KNEES: { treeparam: "2c9d40170f6341ea8f056fb1efb80adb", nodeparam: "d818ba0988ef40489b79f6ddc8281168" },
  LEG_FOOT: { treeparam: "7127f7f61ae141d6920cb43d00698887", nodeparam: "2b92410322094201abd78c02b25ff47e" },

}

export const otherQuestionsTreeNode = {
  ERGONOMIE: { treeparam: "ce3ca0a588534b83bdcdbd79ce99472e", nodeparam: "d1e3f5cb64ad4a8ca4c9a09b49531982" },
  PSYCHOLOGIE: { treeparam: "794623b5d08b4159a30b711bed94d005", nodeparam: "f3819c71e64c46cc868b321fd4ac986d" },
  COACHING: { treeparam: "5e88325207f74342814b401467bfad98", nodeparam: "fb6a8f2fed1a42c0b0e3cd9afc5309ab" },
}

export const otherSectionToUseQuestions = [
  { id: "ERGONOMIE", value: "Ergonomique", page: 4 }, 
  { id: "COACHING", value: "Activité Physique", page: 6 }, 
  { id: "PSYCHOLOGIE", value: "Psychologique", page: 5 }
]

export const zonePeriodeData = {
  tasks: {

  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Très fréquemment',
      taskIds: [],
    },
    'column-2': {
      id: 'column-2',
      title: 'Régulièrement',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Parfois',
      taskIds: [],
    },
    'column-4': {
      id: 'column-4',
      title: 'Rarement',
      taskIds: [],
    },

  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4']
};
