import { createSelector } from 'reselect'


const getInvitations = state => state.inviteManager.items
const getSearchTerm = state => state.inviteManager.searchTerm


export const getFilteredInvitations = createSelector(
  [getInvitations, getSearchTerm],
  (invitations, searchTerm) => invitations.filter(invitation =>
    (
      invitation.fullName.match(new RegExp(searchTerm, 'i')) ||
      invitation.email.match(new RegExp(searchTerm, 'i'))
    )
  )
)

