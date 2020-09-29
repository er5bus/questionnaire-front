import { createSelector } from 'reselect'


const getDepartments = state => state.department.items
const getSearchTerm = state => state.department.searchTerm


export const getFilteredDepartments = createSelector(
  [getDepartments, getSearchTerm],
  (departments, searchTerm) => departments.filter(department =>
    (
      department.name.match(new RegExp(searchTerm, 'i'))
    )
  )
)

