import { createSelector } from 'reselect'


const getUsers = state => state.user.items
const getSearchTerm = state => state.user.searchTerm


export const getFilteredUsers = createSelector(
  [getUsers, getSearchTerm],
  (users, searchTerm) => users.filter(user =>
    (
      user.username.match(new RegExp(searchTerm, 'i'))
    )
  )
)

