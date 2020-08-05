import notif from 'react-notification-system-redux';
import { CALL_API, CALL_FOOD_API, CALL_QUESTION_API } from './../constants';
import { makeBaseCall, makeFoodQuestion, makeQuestionCall } from './../utils/api';


export const api = store => next => async action => {
  if (!action || action.type !== CALL_API) {
    return next(action)
  }

  const dispatch = dispatchActions(next)
  const { actions, messages = {}, endpoint, method, jwt, params = {}, extraData = {} } = action.meta
  const { user: { access_token: accessToken = null } } = store.getState().session

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

  let headers = { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1OTUxNzYzOTcsInJvbGVzIjpbIlJPTEVfQURNSU4iLCJST0xFX1VTRVIiXSwidXNlcm5hbWUiOiJhZG1pbkBwcmVkaWN0LWEuY29tIiwiZXhwIjoxNjAwMzYwMzk3fQ.NvZ_667uIOtmdlMC49vPGRaF8ekQqd5i8SD3g1fkSr0qFDmYUSznCDSkv_A7j-eFeuGvH2d08dCzK-PU3OG-zeIHvV3v-ICz1JPrM3fMQwC4BsM0lqQfxtold-I3ckd0nt64S2wo04DWFfI8qUVmxo3pQexaUf0CMO_E0TiDLWGSi2YYJGkMk-jpZvMIDLlL7e3j7_rdHshun94vKOwu-lYQ70oFYhGNV43nK4bqPqeMbI_mRkjH3ahpQDSVjmUFitPFfQX4OyHQlinHgQAYizkfTbdNoW8u3WD_bU7fhjD8_nz2VQwLBy4RE7PWkeVlHb9Ra6a1k8z74kk9mInm7rQhq1NrmukUEmyfQvlF_5EO3hpWMT8283We9XQ5azEB4ZvzJlqQVl81ofC4LxSamBZ1GFG2-vH13Auibdt6MTh1vDuMNkirajL8b1FOYoqjzOzFwMz_HwWfTDb2jjdJkEHKRew_bHFte726ASlnpTBCMplwSYLuGYNOH_Wdi4-hO4r9HQp3ixMT5toKagvxEt5_v8XFk5PLa0MXGt4ohP7TB4AyzF6ra8IS-FtiOJgXcjfclQ5mVYAHjHGNJXHQeCEIAx-i_S7GcAAJsfz4f_Fl03kyudSOKvthRXIQyuOFALXyIMjJxho8fv8XvhoeFyu7946JqZYK5STNwHAiejs` }

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
