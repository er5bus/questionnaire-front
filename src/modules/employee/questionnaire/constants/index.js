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

}

export const ENDPOINT = {
  QUESTION_SCORES: "/api/tree/:treeparam/all/scores",
  QUESTION: "/api/tree/:treeparam/node/:nodeparam",
  FOOD_CATEGORY: 'category/cat-foods-meals',
  FOOD_FOODS: "food/list?page=1&searchName=&searchLegend=&searchSelectedScore=&searchDeselectedScore=",
  IMAGES_PATH: "https://predicta.fulltech.io/public/uploads/"
}



export const HUMAN_BODY = {
  HEADACHE: { value: "Céphalées (maux de tête)", id: "HEADACHE" },
  CERVICAL: { value: "Cervicales", id: "CERVICAL" },
  SHOULDERS: { value: "Épaules", id: "SHOULDERS" },
  BACK_THORAX: { value: "Dos/Thorax", id: "BACK_THORAX" },
  ELBOW_WIRST_HAND: { value: "Coude/Poignet/Main", id: "ELBOW_WIRST_HAND" },
  ABDOMINAL_PAIN: { value: "Douleurs abdominales", id: "ABDOMINAL_PAIN" },
  LUMBAR_BUTTOCKS: { value: "Lombaires/Fesses", id: "LUMBAR_BUTTOCKS" },
  HIP: { value: "Hanche", id: "HIP" },
  KNEES: { value: "Genoux", id: "KNEES" },
  LEG_FOOT: { value: "Jambe/Pied", id: "LEG_FOOT" },
}
export const statcTreeNode = {
  HEADACHE: { treeparam: "c0812a5f1610401485c1bf3148085844", nodeparam: "f4e92c0e40094d5685b8de5a6c3020dc" },
  CERVICAL: { treeparam: "f1b49c3b2919444f969f173de6db8c9b", nodeparam: "0324c2cbec264e16aa61a8dc3ff209f4" },
  SHOULDERS: { treeparam: "437448c11c9348a6af4697361fdca0dc", nodeparam: "1f9a641de655458c8e4907508c03e4c6" },
  BACK_THORAX: { treeparam: "bc1254428f474bb5ba2525d84c66055c", nodeparam: "29bcc98ac5bf410a93d432cafd71a83d" },
  ELBOW_WIRST_HAND: { treeparam: "5a96522e51364c658a20e8c05cf6f22e", nodeparam: "d3792daabdab44b490edbee950b2200f" },
  ABDOMINAL_PAIN: { treeparam: "2c7c3f37da444d52a6fece527f4a0b99", nodeparam: "910e49087df64539b00ab1b3731c3169" },
  LUMBAR_BUTTOCKS: { treeparam: "2c7c3f37da444d52a6fece527f4a0b99", nodeparam: "910e49087df64539b00ab1b3731c3169" },
  HIP: { treeparam: "6553ba39019e4a8cb7a0fbe46ef24771", nodeparam: "ae1748506865410882138351391d99ac" },
  KNEES: { treeparam: "45c4308cd22347b39ee99cc2dbb4bea9", nodeparam: "690855bf0c5b44169fbe9de34aec7839" },
  LEG_FOOT: { treeparam: "25c33f7013e74540a0d66faa8caee9a3", nodeparam: "fede40a5aa7c4413a3c7bc25250c704b" },

}

export const otherQuestionsTreeNode = {
  ERGONOMIE: { treeparam: "ce3ca0a588534b83bdcdbd79ce99472e", nodeparam: "d1e3f5cb64ad4a8ca4c9a09b49531982" },
  PSYCHOLOGIE: { treeparam: "794623b5d08b4159a30b711bed94d005", nodeparam: "f3819c71e64c46cc868b321fd4ac986d" },
  COACHING: { treeparam: "5e88325207f74342814b401467bfad98", nodeparam: "fb6a8f2fed1a42c0b0e3cd9afc5309ab" },
}

export const zonePeriodeData = {
  tasks: {

  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Fréquement',
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
