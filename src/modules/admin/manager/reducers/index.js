import { ACTIONS } from "./../constants"


export default (state = { items: [], item: {}, page: 0, isLoading: false, searchTerm: "", hasMore: true, error: null }, action) => {
  const { payload, type } = action
  switch (type) {
    case ACTIONS.CLEAR_MANAGER_FORM : {
      return { ...state, item: payload, isLoading: false, error: null }
    }

    case ACTIONS.FETCH_MANAGERS_INIT : {
      state.items = payload.page === 1 ? [] : state.items
      return { ...state, isLoading: true, hasMore: false, error: null }
    }
    case ACTIONS.FETCH_MANAGERS_SUCCEDED : {
      const { items, has_more: hasMore, page } = payload
      return { ...state, items: page === 1 ? items : [ ...state.items, ...items], page, hasMore: hasMore || false, isLoading: false, error: null }
    }
    case ACTIONS.FETCH_MANAGERS_FAILED : {
      return { ...state, items: [], isLoading: false, hasMore: false, page: 1, error: payload }
    }

    case ACTIONS.CREATE_MANAGER_INIT : {
      return { ...state, isLoading: true, error: null }
    }
    case ACTIONS.CREATE_MANAGER_SUCCEDED : {
      const { uid: param } = payload
      return { ...state, item: { param }, items: state.items.concat(payload), isLoading: false, error: null }
    }
    case ACTIONS.CREATE_MANAGER_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.EDIT_MANAGER_INIT : {
      return { ...state, isLoading: true, error: null }
    }
    case ACTIONS.EDIT_MANAGER_SUCCEDED : {
      return { ...state, item: payload, items: state.items.map((item) => item.id === payload.id ? payload : item ), isLoading: false, error: null }
    }
    case ACTIONS.EDIT_MANAGER_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.FETCH_MANAGER_INIT : {
      return { ...state, isLoading: true, item: null, error: null }
    }
    case ACTIONS.FETCH_MANAGER_SUCCEDED : {
      return { ...state, item: payload, isLoading: false, error: null }
    }
    case ACTIONS.FETCH_MANAGER_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.FILTER_MANAGERS: {
      return { ...state, searchTerm: payload.searchTerm }
    }
    
    default: {
      return state
    }
  }
}
