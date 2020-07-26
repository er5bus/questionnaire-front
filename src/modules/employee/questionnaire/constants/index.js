export const ACTIONS = {
  NEXT_PAGE: "questionnaire@NEXT_PAGE",
  PREV_PAGE: "questionnaire@PREV_PAGE",
  EXIT_PAGE: "questionnaire@EXIT_PAGE",

  NEXT_QUESTION: "questionnaire@NEXT_QUESTION",

  FETCH_QUESTION_SCORES_INIT: "questionnaire@FETCH_QUESTION_SCORES_INIT",
  FETCH_QUESTION_SCORES_SUCCEDED: "questionnaire@FETCH_QUESTION_SCORES_SUCCEDED",
  FETCH_QUESTION_SCORES_FAILED: "questionnaire@FETCH_QUESTION_SCORES_FAILED",
  
  FETCH_QUESTION_INIT: "questionnaire@FETCH_QUESTION_INIT",
  FETCH_QUESTION_SUCCEDED: "questionnaire@FETCH_QUESTION_SUCCEDED",
  FETCH_QUESTION_FAILED: "questionnaire@FETCH_QUESTION_FAILED"
}

export const ENDPOINT = {
  QUESTION_SCORES: "/api/tree/:treeparam/all/scores",
  QUESTION: "/api/tree/:treeparam/node/:nodeparam"
  
}
