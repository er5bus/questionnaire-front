import { ACTIONS } from "./../constants"


export default (state = { items: [], item: {}, page: 0, isLoading: false, searchTerm: "", hasMore: true, error: null }, action) => {
  const { payload, type } = action
  switch (type) {
    case ACTIONS.CLEAR_INVITATION_FORM : {
      return { ...state, item: payload, isLoading: false, error: null }
    }
    case ACTIONS.CREATE_INVITATION_INIT : {
      return { ...state, isLoading: true, error: null }
    }
    case ACTIONS.CREATE_INVITATION_SUCCEDED : {
      const { uid: param } = payload
      return { ...state, item: { param }, items: state.items.concat(payload), isLoading: false, error: null }
    }
    case ACTIONS.CREATE_INVITATION_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.EDIT_INVITATION_INIT : {
      return { ...state, isLoading: true, error: null }
    }
    case ACTIONS.EDIT_INVITATION_SUCCEDED : {
      return { ...state, item: payload, items: state.items.map((item) => item.id === payload.id ? payload : item ), isLoading: false, error: null }
    }
    case ACTIONS.EDIT_INVITATION_FAILED : {
      return { ...state, error: payload, isLoading: false }
    }

    case ACTIONS.FETCH_ALL_NODES_INIT: {
      return { ...state, isLoading: true, scores: [] }
    }
    case ACTIONS.FETCH_ALL_NODES_SUCCEDED: {
      const nodes = payload.items.filter((item) => item.type === "ContentNode")
      return { ...state, nodes, isLoading: false  }
    }
    case ACTIONS.FETCH_ALL_NODES_FAILED: {
      return { ...state, isLoading: false, error: null }
    }

    case ACTIONS.FETCH_INVITATIONS_INIT : {
      state.items = payload.page === 1 ? [] : state.items
      return { ...state, isLoading: true, hasMore: false, error: null }
    }
    case ACTIONS.FETCH_INVITATIONS_SUCCEDED : {
      const { items, has_more: hasMore, page } = payload
      return { ...state, items: page === 1 ? items : [ ...state.items, ...items], page, hasMore, isLoading: false, error: null }
    }
    case ACTIONS.FETCH_INVITATIONS_FAILED : {
      return { ...state, isLoading: false, hasMore: false, page: 1, error: payload }
    }

    case ACTIONS.FETCH_INVITATION_INIT : {
      return { ...state, isLoading: true, item: null, error: null }
    }
    case ACTIONS.FETCH_INVITATION_SUCCEDED : {
      return { ...state, item: payload, isLoading: false, error: null }
    }
    case ACTIONS.FETCH_INVITATION_FAILED : {
      return { ...state, isLoading: false, error: payload }
    }

    case ACTIONS.DELETE_INVITATION_INIT : {
      return { ...state, isLoading: true, error: null }
    }
    case ACTIONS.DELETE_INVITATION_SUCCEDED : {
      return { ...state, items: state.items.filter( item => item.id !== payload.id ), isLoading: false, error: null }
    }
    case ACTIONS.DELETE_INVITATION_FAILED : {
      return { ...state, isLoading: false, error: null }
    }

    case ACTIONS.FILTER_INVITATIONS: {
      return { ...state, searchTerm: payload.searchTerm }
    }
    
    default: {
      return state
    }
  }
}
