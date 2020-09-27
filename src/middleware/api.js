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

  let headers = { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDExNjI2MDEsImV4cCI6MTYwMTE3MzQwMSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQHByZWRpY3QtYS5jb20ifQ.eeI8LfA_GGSev4u17DA2qXbfciLF3Mckzyw-N7RHlDbCVt2XpB-NkECpEW9R6Kgo1Gk7qQKmNuzH03eWqEUi7nRfw5IqydDgxC1oRTnF7_zOCJ0Z1DdkIx8Bbu8mFoIcpB3hxqm0Bz68z0pTXKzIYOtuaQ8f_pA2vsJeXwaeBRZk4E-DlJpgAXEYwA4w1i4uE1NTJBh459WoEFps5GsjyP50UGFs6NkSnCjmoHR1ZfhDvTS1fg--yMuEv_S3PI6o_TZSRyVOslx4Nh7zRyp0RvZCjKtlYwjqCzTFTtKHP85MSVUJTszIKyiDfEZqVVfc54sxNh1yYb4xzpAm0C7tkokx1G03-C6rlM3Y3hHLXyP8YtwrOcJlp0a_v67K0f3S4iRPmyafBb6suBuQdls_VXj4hleDKZw4mJwRmnGOnjEkULHx_22h-VptFpgY2RJcdRZ7XJ6z8RmP9AGTx9BuY9J6LzOWTIGh5lkbbaORrO8A5kcWtR-091uYDq_QFJXzWLBZTHNVNR66Gm0cPcMbWlZl6dK1RGTk0CjUD5Uvu0htxn6s2_xmZvoW8XxBuM3zE62Zrn1xM1zcgoodHRVrayAphmt1FaYM8MqsKzCdmtDlm2ObmR_aLh0rMuX2XbvynNVYop5Dnr85hImV87mLSfBWHn0XKTUdus2rCg1bsnk  ` }

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
