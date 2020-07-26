import { CALL_API, CALL_QUESTION_API } from './../constants'
import { makeBaseCall, makeQuestionCall } from './../utils/api'
import notif from 'react-notification-system-redux'


export const api = store => next => async action => {
  if (!action || action.type !== CALL_API ){
    return next(action)
  }

  const dispatch = dispatchActions(next)
  const { actions, messages = {}, endpoint, method, jwt, params = {}, extraData={} } = action.meta
  const { user : { access_token: accessToken=null  } } = store.getState().session

  const createNotificationOpts = (title, message) => ({
    title,
    message,
    position: 'tr',
    autoDismiss: 5,
  })

  if (jwt && !accessToken){
    next(notif.error(createNotificationOpts("Oops!", "You are not logged in. Please log in and try again")))
    return;
  }

  if (actions.init){
    dispatch(actions.init, params)
  }

  let headers = {}
  if (jwt) {
    headers = { Authorization: `Bearer  ${accessToken}`}
  }

  makeBaseCall(method, endpoint, action.payload, headers, params)
    .then( resp => {
      if (messages.success){
        next(notif.success(createNotificationOpts("Oh!", messages.success)))
      }
      dispatch(actions.success, Object.assign({}, resp.data, extraData ))

    })
    .catch(err => {
      if (messages.fail){
        next(notif.error(createNotificationOpts("Oops!", messages.fail)))
      }
      dispatch(actions.fail, ( err.response && err.response.data) || {})
    })
}

export const questionApi = store => next => async action => {
  if (!action || action.type !== CALL_QUESTION_API ){
    return next(action)
  }

  const dispatch = dispatchActions(next)
  const { actions, headers, endpoint, method, params = {}, extraData={} } = action.meta

  if (actions.init){
    dispatch(actions.init, params)
  }

  makeQuestionCall(method, endpoint, action.payload, headers, params)
    .then( resp => {
      dispatch(actions.success, Object.assign({}, resp.data, extraData ))

    })
    .catch(err => {
      dispatch(actions.fail, ( err.response && err.response.data) || {})
    })
}


const dispatchActions = next => (action, payload = {}) => {
  if (!Array.isArray(action)) return next({type: action, payload})
  return action.map(a =>  next({type: a, payload}));
}
