import { createSelector } from 'reselect'


const getEmployees = state => state.employee.items
const getSearchTerm = state => state.employee.searchTerm


export const getFilteredEmployees = createSelector(
  [getEmployees, getSearchTerm],
  (employees, searchTerm) => employees.filter(employee =>
    (
      employee.name.match(new RegExp(searchTerm, 'i'))
    )
  )
)

