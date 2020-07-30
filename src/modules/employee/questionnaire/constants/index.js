export const ACTIONS = {
  NEXT_PAGE: "questionnaire@NEXT_PAGE",
  PREV_PAGE: "questionnaire@PREV_PAGE",
  EXIT_PAGE: "questionnaire@EXIT_PAGE",
  SELECT_DISELECT_FROM_BODY: "SELECT_DISELECT_FROM_BODY",
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

export const HUMAN_BODY_FRONT_SIDE = {
  FACE: "Face",
  NECK: "Neck",
  CHEST: "Chest",
  RIGHT_ARM: "Right arm",
  LEFT_ARM: "Left arm",
  ELBOW: "Elbow",
  RIGHT_FOREARM: "Right forearm",
  LEFT_FOREARM: "Left forearm",
  RIGHT_HAND: "Right hand",
  LEFT_HAND: "Left hand",
  RIGHT_FINGERS: "Right fingers",
  LEFT_FINGERS: "Left fingers",
  THIGHS: "Thighs",
  RIGHT_THIGH: "Right thigh",
  LEFT_THIGH: "Left thigh",
  RIGHT_LEG: "Right leg",
  LEFT_LEG: "Left leg",
  RIGHT_FOOT: "Right foot",
  LEFT_FOOT: "Left foot",
  TOE: "toe",
  ANKLE: "ankle",
  RIGHT_KNEE: "Right knee",
  LEFT_KNEE: "Left knee",
  LOWER_LIMB: "lower limb",
  RIGHT_SHOULDER: "Right shoulder",
  LEFT_SHOULDER: "Left shoulder",
  UPPER_LIMB: "upper limb",
  RIGHT_EAR: "right ear",
  LEFT_EAR: "left ear",
  WIRST: "wirst",
  STOMACH: "Stomach"
}
export const HUMAN_BODY_BACK_SIDE = {
  HEAD: "Head",
  NAPE: "Nape",
  BACK: "Back",
  RIGHT_FOREARM: "Right forearm",
  LEFT_FOREARM: "Left forearm",
  BUTTOCKS: "Buttocks",
  RIGHT_CALF: "Right calf",
  LEFT_CALF: "Left calf",
  RIGHT_TOES: "Right toes",
  LEFT_TOES: "Left toes",
  RIGHT_SHOULDER_BLADE:"Right shoulder blade",
  LEFT_SHOULDER_BLADE:"Left shoulder blade"
}