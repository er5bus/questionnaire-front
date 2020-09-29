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

  let headers = { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDEwNjc3MDYsInJvbGVzIjpbIlJPTEVfQURNSU4iLCJST0xFX1VTRVIiXSwidXNlcm5hbWUiOiJhZG1pbkBwcmVkaWN0LWEuY29tIiwiZXhwIjoxNjA2MjU1MzA2fQ.Qvs1fq8LT7t-XsL7i9HmF10ToBWj6_jtydzt6EjY4P86ERMOqEp2TNx275-iWaVcAUOUVMxlGzZNUkSDlUJ8bI0LllrstpVu2okEEpUwoU56oy27sdy3WXRCnLv3WEC3-2DXBfe6n23rZrtPZYVXzCKxDzpJfkNpq_WB1niKEL6-Ladm_28qQ6ZAAiYUaRQ9uDD8OyhLgXoESndWBA184HMvryLYKEVgUIf85DbEVYt63l0bp7Rdh46D_gIvqX8jcYSuHSsvCzRnNe0YJvvKOSke_SqhxXkM4cTM3kiaBczqpxeFNbSdyF1L_AtIj_Jc96ZIZTt7CBIwvxU9OTNfxffxwcZDLunIxIvW5tC5EHfl_BkIpfmtliKTDRzkdC75eodPs8c3wY4lRy2AtXwTQ0lWZR7BkoAUGU1WfZnuCYQzZEfTRLSD88eWvieklGzbyvGAzwPuoWT-g6nUOBQX3AEkitdyFj0Y8QNA29N2kDdKyon5bzmLwOia60WMWMFqJVIat7lk_JhN2AhgkmGVo1Pk8kPuiQcF_obdss8gJUA3brkKIlebNAAdB_gKP-ecrBmsWsjnvWigpkuf_8WAwkp1QRXb3sEeX_APIOOrFW3PtdPbbQ8Lzt5vR6qxeDLtMBX6rvtQhkcUm7st_WLKy3Yd_T6B1dw6XMitZIOIBwY` }

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
