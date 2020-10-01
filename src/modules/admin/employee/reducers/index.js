import { ACTIONS } from "./../constants";


export default (state = { items: [], item: {}, page: 0, isLoading: false, searchTerm: "", hasMore: true, error: null }, action) => {
  const { payload, type } = action
  switch (type) {
    case ACTIONS.CLEAR_EMPLOYEE_FORM : {
      return { ...state, item: payload, isLoading: false, error: null }
    }

    case ACTIONS.FETCH_EMPLOYEES_INIT : {
      state.items = payload.page === 1 ? [] : state.items
      return { ...state, isLoading: true, hasMore: false, error: null }
    }
    case ACTIONS.FETCH_EMPLOYEES_SUCCEDED : {
      const { items, has_more: hasMore, page } = payload
      return { ...state, items: page === 1 ? items : [ ...state.items, ...items], page, hasMore: hasMore || false, isLoading: false, error: null }
    }
    case ACTIONS.FETCH_EMPLOYEES_FAILED : {
      return { ...state, items: [], isLoading: false, hasMore: false, page: 1, error: payload }
    }

    case ACTIONS.CREATE_EMPLOYEE_INIT : {
      return { ...state, isLoading: true, error: null }
    }
    case ACTIONS.CREATE_EMPLOYEE_SUCCEDED : {
      const { uid: param } = payload
      return { ...state, item: { param }, items: state.items.concat(payload), isLoading: false, error: null }
    }
    case ACTIONS.CREATE_EMPLOYEE_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.EDIT_EMPLOYEE_INIT : {
      return { ...state, isLoading: true, error: null }
    }
    case ACTIONS.EDIT_EMPLOYEE_SUCCEDED : {
      return { ...state, item: payload, items: state.items.map((item) => item.id === payload.id ? payload : item ), isLoading: false, error: null }
    }
    case ACTIONS.EDIT_EMPLOYEE_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.FETCH_EMPLOYEE_INIT : {
      return { ...state, isLoading: true, item: null, error: null }
    }
    case ACTIONS.FETCH_EMPLOYEE_SUCCEDED : {
      return { ...state, item: payload, isLoading: false, error: null }
    }
    case ACTIONS.FETCH_EMPLOYEE_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.FILTER_EMPLOYEES: {
      return { ...state, searchTerm: payload.searchTerm }
    }
    
    default: {
      return state
    }
  }
}
