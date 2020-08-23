import { createSelector } from 'reselect'


const getInvitations = state => state.inviteEmployee.items
const getSearchTerm = state => state.inviteEmployee.searchTerm


export const getFilteredInvitations = createSelector(
  [getInvitations, getSearchTerm],
  (invitations, searchTerm) => invitations.filter(invitation =>
    (
      invitation.subject.match(new RegExp(searchTerm, 'i'))
    )
  )
)

