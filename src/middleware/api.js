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

  let headers = {
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1OTk5MjUzMTksImV4cCI6MTU5OTkzNjExOSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQHByZWRpY3QtYS5jb20ifQ.O8wN7QOyyzzc7L8pUD_QKZ32Q0If01E9odufMtVXWSbRNuDFQra-T06jDIeHjg6QkbjouR2vxjmAqpjNp9VjQRbURpJHr6lxH5LMSkS92WlOvUaH2BdeookyCFJo0zPA-zpzSCANOVC8ikUDbYlGqFImC6BRSf_dNv96-0iVSJZ-mnMXyCWG9MlHf97HMK2mUs-GXG-WJGhp0lhwofJzulbzaLJ7F3bH6SXttV8MwDeM1-zLVq6UD7l4Yftp4MGzp4435gA3rh6ySLvVujsNS9r7ZQd_TWCoW7ulEKQ42Ow77BB9UU6xiDAJyOVzH2YB15ut3p11at-vhaNYDiaa0ZQH_w5y6d6U1Fr7whDK8H7WZO1vKS_HcjZx7XUBmkJ5rqzPPWdB8On39z38b8CxJBy7NzECp0yEqc41om3iRZvOgK17V3GNX2iY-kOQSmPkmkWPyF8iYca3nIlNBdsnoFgRoH_CJAsi9L4mb-pxCfQCi10H0k8XNdNBc_Xgy_EmdNj5vV2HRwEXAV_3oCC3VdrMT9lryobEDrWt1tuXJZ-cYQm5tzDRAHz3nHlu6wm2UabDSwRtpjbdOfoRLjojo06G6A4Djv99Oj0XJCa1ssUElMtQYf-fMRAeyRXfBF3OJK3IL9j-V9IpJePLdqBrfwGPVx1rXjeENO1EMtRBE3U
  ` }

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
