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

  let headers = { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDAyODE4MDYsImV4cCI6MTYwMDI5MjYwNiwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQHByZWRpY3QtYS5jb20ifQ.lB625SOvJ1omoEHw_JbQt_kt43YoCBlTUHR0hmb9vsIoHFgc4uW2jBy6xjAqh23xC27J1y0C2peRRgWxCQe3GLAZ3OCE3Mj67kHcZ4KctEanDqp008hMShJZdWuDKCSYKpWBFM1GqKNv9SRA7AaUwv2e8uwDZRWVwHCcYyJGaSs2ipa_qPONkf0AgyI74xstZ6I9sJjUfZrh6NPQfeR2DEdzpNV6YBLOo3LkLHDksWghjf9IqtM84nK7Odwiz8Fzae9jxtN6yQWBq7cP5WyY5907Ush2jH97hTjlZn3YW1Cn2OhQLVJ8ALL4u1RtaPtbMrEzg595-pwfXHXjnjsV8r86vQSQC_0NPw_TPdwa_HEB2_Z9e-dWbnI2_AbIzLyLAb-s4is50VaEt0E4zJzRxBT7ysQnbmKVn_Oze54dwwWKSdPaQtaxj44BxVBdFvBhujbNpDts-49n1MHcEufLrWZsLEO2afjWr0CJUxD_A2_-evZQmVxYmrkTJGHphibi5ezhlgP7H_mpv69qKTaMq4b8VYX0xl3xGnncmtsKNhCHlRihthzL0TTfJFbff36buINaxJiN931l5Bv-5OacZVpAm8AptR8c7EdertyYRTYlGFFBSJJB2FfLXlnIXhKtbnjSUvCTIxb52xLQoeSdP2yV9IlPdbGL3-6B9JznkIk` }

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
