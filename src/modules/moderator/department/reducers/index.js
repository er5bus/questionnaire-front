import { ACTIONS } from './../constants'


export default (state = { items: [], item: {}, page: 0, isLoading: false, searchTerm: "", hasMore: true, error: null }, action) => {
  const { payload, type } = action
  switch (type) {
    case ACTIONS.CLEAR_DEPARTMENT_FORM : {
      return { ...state, item: payload, isLoading: false, error: null }
    }

    case ACTIONS.FETCH_DEPARTMENTS_INIT : {
      state.items = payload.page === 1 ? [] : state.items
      return { ...state, isLoading: true, hasMore: false, error: null }
    }
    case ACTIONS.FETCH_DEPARTMENTS_SUCCEDED : {
      const { items, has_more: hasMore = false, page } = payload
      return { ...state, items: page === 1 ? items : [ ...state.items, ...items], page, hasMore, isLoading: false, error: null }
    }
    case ACTIONS.FETCH_DEPARTMENTS_FAILED : {
      return { ...state, isLoading: false, hasMore: false, page: 1, error: payload }
    }

    case ACTIONS.CREATE_DEPARTMENT_INIT : {
      return { ...state, isLoading: true, error: null }
    }
    case ACTIONS.CREATE_DEPARTMENT_SUCCEDED : {
      const { uid: param } = payload
      return { ...state, item: { param }, items: state.items.concat(payload), isLoading: false, error: null }
    }
    case ACTIONS.CREATE_DEPARTMENT_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.EDIT_DEPARTMENT_INIT : {
      return { ...state, isLoading: true, error: null }
    }
    case ACTIONS.EDIT_DEPARTMENT_SUCCEDED : {
      return { ...state, item: payload, items: state.items.map((item) => item.id === payload.id ? payload : item ), isLoading: false, error: null }
    }
    case ACTIONS.EDIT_DEPARTMENT_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.FETCH_DEPARTMENT_INIT : {
      return { ...state, isLoading: true, item: null, error: null }
    }
    case ACTIONS.FETCH_DEPARTMENT_SUCCEDED : {
      return { ...state, item: payload, isLoading: false, error: null }
    }
    case ACTIONS.FETCH_DEPARTMENT_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.FILTER_DEPARTMENTS: {
      return { ...state, searchTerm: payload.searchTerm }
    }

    case ACTIONS.DELETE_DEPARTMENT_INIT : {
      return { ...state, isLoading: true, error: null }
    }
    case ACTIONS.DELETE_DEPARTMENT_SUCCEDED : {
      return { ...state, items: state.items.filter( item => item.id !== payload.id ), isLoading: false, error: null }
    }
    case ACTIONS.DELETE_DEPARTMENT_FAILED : {
      return { ...state, isLoading: false, error: null }
    }
    
    default: {
      return state
    }
  }
}
