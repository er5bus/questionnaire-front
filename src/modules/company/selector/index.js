import { createSelector } from 'reselect'


const getCompanies = state => state.company.items
const getSearchTerm = state => state.company.searchTerm


export const getFilteredCompanies = createSelector(
  [getCompanies, getSearchTerm],
  (companies, searchTerm) => companies.filter(company =>
    (
      company.name.match(new RegExp(searchTerm, 'i')) ||
      company.description.match(new RegExp(searchTerm, 'i'))
    )
  )
)

