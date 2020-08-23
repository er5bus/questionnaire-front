import { createSelector } from 'reselect'


const getManagers = state => state.manager.items
const getSearchTerm = state => state.manager.searchTerm


export const getFilteredManagers = createSelector(
  [getManagers, getSearchTerm],
  (managers, searchTerm) => managers.filter(manager =>
    (
      manager.email.match(new RegExp(searchTerm, 'i'))
    )
  )
)

