import notif from 'react-notification-system-redux';
import { CALL_API, CALL_FOOD_API, CALL_QUESTION_API } from './../constants';
import { makeBaseCall, makeFoodQuestion, makeQuestionCall } from './../utils/api';


export const api = store => next => async action => {
  if (!action || action.type !== CALL_API) {
    return next(action)
  }

  const dispatch = dispatchActions(next)
  const { actions, messages = {}, endpoint, method, jwt, params = {}, extraData = {} } = action.meta
  const { user: { access_token: accessToken = null, id } } = store.getState().session
  localStorage.setItem('id', id)



  const createNotificationOpts = (title, message) => ({
    title,
    message,
    position: 'tr',
    autoDismiss: 5,
  })

  if (jwt && !accessToken) {
    next(notif.error(createNotificationOpts("Oops!", "You are not logged in. Please log in and try again")))
    return;
  }

  if (actions.init) {
    dispatch(actions.init, params)
  }

  let headers = {}
  if (jwt) {


    headers = { Authorization: `Bearer  ${accessToken}` }
  }

  makeBaseCall(method, endpoint, action.payload, headers, params)
    .then(resp => {
      if (messages.success) {
        next(notif.success(createNotificationOpts("Oh!", messages.success)))
      }
      dispatch(actions.success, Object.assign({}, resp.data, extraData))

    })
    .catch(err => {
      if (messages.fail) {
        next(notif.error(createNotificationOpts("Oops!", messages.fail)))
      }
      dispatch(actions.fail, (err.response && err.response.data) || {})
    })
}

export const questionApi = store => next => async action => {
  if (!action || action.type !== CALL_QUESTION_API) {
    return next(action)
  }

  const dispatch = dispatchActions(next)
  const { actions, headers, endpoint, method, params = {}, extraData = {} } = action.meta

  if (actions.init) {
    dispatch(actions.init, params)
  }

  makeQuestionCall(method, endpoint, action.payload, headers, params)
    .then(resp => {
      dispatch(actions.success, Object.assign({}, resp.data, extraData))

    })
    .catch(err => {
      dispatch(actions.fail, (err.response && err.response.data) || {})
    })
}
export const questionFoodApi = store => next => async action => {
  if (!action || action.type !== CALL_FOOD_API) {
    return next(action)
  }

  const dispatch = dispatchActions(next)
  const { actions, endpoint, method, params = {}, extraData = {} } = action.meta

  if (actions.init) {
    dispatch(actions.init, params)
  }

  let headers = { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDA4OTk4ODYsImV4cCI6MTYwMDkxMDY4Niwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQHByZWRpY3QtYS5jb20ifQ.FxrrCkCA8MNJYAbBCxJNLQ9a9UQ6jwvntXThfiv5_n768aQ_hxJmKYo3tDQlXL5WmodvGdkA1EHs-5CwFzHcG4q4OovM7wFuw-QgOUpXsaaxyFLLgEZ4alORrZU5f6FBUHvGfOzCr2UP3B9MWtjBGscDt44iy-p0pU5lDqCD7nFVsMLJkK3YYSAbnMkuSA1hbiM9h0ZSHx8Pq5oIiMPdSsyo_UxmiomcMyEwh_r2wh0y_ULRBv-hACisl0lO0osj3KgbbTxyF79N77eSeGAiLJy7f1cq_u9ExYZhbPYBqKvjB9zm2Ratsy8LQWwHqpOOWsKiShXOKblesrG6_vIiRB7lLDS_cvVK04oM8s8IokaGcEfm-3cTvfSu3tXnkrGukJ07uY2P7Pdo9oxUoX21sNw_5V6bCNLktn3g8PWXvGX_He39YabgsJY5N81NQi3esSdL4wtwy5J7SN2h-8P3s5n-P-ISoOEQcRtV8vLAWqacVWDlvv0luH_5ZCQx7pOu0btMW9rH5WdAuuabBtH9YY9D2t77dcuGBpvyhUBbYV_OdzkMsqFph-_go0dcMi6dCO1b0zVDgutyUNVdJwB13Vi-dIRU12LUI-XDl4PVUefiSiI0QHhIMRHGgHCp_mKDz7_YnDfgBLq1JMZYHnXnkp97yqoS5zQ-PUVoeb3TiD8` }

  makeFoodQuestion(method, endpoint, action.payload, headers, params)
    .then(resp => {
      dispatch(actions.success, Object.assign({}, resp.data, extraData))

    })
    .catch(err => {
      dispatch(actions.fail, (err.response && err.response.data) || {})
    })
}

const dispatchActions = next => (action, payload = {}) => {
  if (!Array.isArray(action)) return next({ type: action, payload })
  return action.map(a => next({ type: a, payload }));
}
