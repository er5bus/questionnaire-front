import { createSelector } from 'reselect'


const getUsers = state => state.user.items
const getSearchTerm = state => state.user.searchTerm


export const getFilteredUsers = createSelector(
  [getUsers, getSearchTerm],
  (companies, searchTerm) => companies.filter(user =>
    (
      user.name.match(new RegExp(searchTerm, 'i')) ||
      user.description.match(new RegExp(searchTerm, 'i'))
    )
  )
)

