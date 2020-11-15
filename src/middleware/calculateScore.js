import { QUESTION_CHANGE_PAGE } from "./../constants";


export const calculateScore = store => next => action => {
  if (!action || action.type !== SAVE_SESSION) {
    return next(action)
  }

  switch (page) {
    case 3:
      // HealthLogo
      break;
    case 4:
      // ErgoLogo
      break;
    case 5:
      // PsyLogo
      psy = 0
      max = 50
      if (psy >= (31/max)) {
        psy =+ 3
      }else if ( (23/max) <= psy && psy < (31/max) ) {
        psy += 2
      }else if ( (10/max) <= psy && psy < (23/max)) {
        psy += 0
      }
      break;
    case 6:
      // CochingLogo
      break;
    case 7:
      // NutriLogo
      break;
    default:
      // whiteLogo
      break;
  }

}
