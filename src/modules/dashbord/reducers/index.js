import { ACTIONS } from "./../constants"


export default (state = { isLoading: false, error: null }, action) => {
  const { payload, type } = action
  switch (type) {

    default: {
      return state
    }
  }
}
