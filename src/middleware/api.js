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

  let headers = { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1OTY2MzE5NzksInJvbGVzIjpbIlJPTEVfQURNSU4iLCJST0xFX1VTRVIiXSwidXNlcm5hbWUiOiJhZG1pbkBwcmVkaWN0LWEuY29tIiwiZXhwIjoxNjAxODE1OTc5fQ.kl1odZ49WV50n9-6Dk7qQz87rB-r_f0rngmNxWbikz5zaTDvZVCuemOwI9kKYzePd97xkh3GN6Z3-V_oQYKnWN9q7aoBRXJOKd8nvTTwi8i1vuNuBn-Co30BSFNg5VKblzKs62JlJlcYc-g78ZMqXJZo6VXxPhVb8kKVhrlekD6SeCzJW8xkzGLuejgpWmTxryI4_VTVt4EHP3WTF88zisNndnCgYMEx-NY7AAp_G9E29y_7uj7KLx4HQ1kUvHzRCIGBcZmnQTFJzjgwHFB4SbErfyZx2Jk5X14F8cJ_CM9eRFhCk-knO5XyZDAgX-Jxp_aaN0mEhR-NVNi_5cm4S44ReoAjgMnBy5k-w8wYcc_GgKkgCufpYYyRlKTaSvUDGTU1Edrvnl1mf_jqPitsxgZgBygn3UatDQ90H7WJWwJmMt_owDLoHG0AwrcYtyJa-6sFKGpDc04UIrCg7S5vUcntdpMCLBeJ54Rp3C-TB8WKK8haG2onCdAbA-LI83lkdpLE6odaZrj4P20DFITzRRTuAHORQ5WtbidtVlphO3pniIg22HyVC_Ol5vO7GXcCb-NxkEbK_kq1g-Y4yNTk3qJ4aC692jksjBeoxmVLo02HukyWM8SfMi3a4GZERYbnbFzNpo4GbRo2r3uvwX9qt1pmu3xQuEowGlQkDelSHpE` }

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
