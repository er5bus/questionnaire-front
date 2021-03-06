import { sessionService } from "redux-react-session";
import { DELETE_SESSION, SAVE_SESSION } from "./../constants";


export const saveSession = store => next => action => {
  if (!action || action.type !== SAVE_SESSION) {
    return next(action)
  }

  const { access_token: accessToken } = action.payload

  sessionService.saveUser(action.payload)
  sessionService.saveSession({ accessToken })
}


export const deleteSession = store => next => action => {
  if (!action || action.type !== DELETE_SESSION) {
    return next(action)
  }
  localStorage.clear()
  sessionService.deleteUser()
  sessionService.deleteSession()
}
