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

  let headers = { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDA1OTk3OTMsImV4cCI6MTYwMDYxMDU5Mywicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQHByZWRpY3QtYS5jb20ifQ.CxEF6mL01qtI6uNE_0EGQSYTXc0I8_XCnRPd7Ga1aEaQV-In3dhMZPBlDjbEFa58l8LCsRKcZuctJY4gei2bTpVcT7VJL_6UZBJdc2GXhkYwk3n8dJml-KPT8Pl2S0xsrpN4b_WZ6DiQ1foh7ED8eAccLGKRWSio-XPfTF8JPgEorGU-s5n_DwNCQRyKAPnotX4vjlBOD3EsDplq27uyOlmd5TjB1V-PSUFoBE_AowVvtZdC6_dHNMZp91Bup1O5gugw3t9lES0HcntlKZZ5h3HaqCkE8irRB976co3xbji3xKZalRvdbGKc_sr9AR8sRxHl1ZXz4Ynm9MtwafSFEgTNbnZgNopUAET0b3u6mXz-W7gH9NHDUxD7WahjL6s_X_OHSZbUZxbTEOu09IuXsqqyrHGRoRz0PTpyWso_Q3Kn75-2sHPs4XJdAVxIBnRXiv-16fQJMyfqqXsvSA3xt5kaLCzA0ay9YO-rCxpOpzi4PS_s-842CtpyEgfiGTq4HzHc4V0UxprYiYhFuBq6eNrxMYO_tpyGPskjZqy3FkZNrpPVH4rhsqqqSi7bRToGwtHEMTnsFunEDNKaPnx32LRj_L5ynbYMFQUUaWeIcdzx1rmmzCL1203wMat5j_eh3M66Fpd-BGKoYxUMk-lRzju3pkjgquk9JdmNX32gVvQ` }

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
