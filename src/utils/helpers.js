import { ROLES } from './../constants'


export const hasRole = (role, permission) => (role & permission) === permission

export const isAdmin = (role) => hasRole(role, ROLES.ADMIN)

export const isModerator = (role) => hasRole(role, ROLES.MODERATOR)

export const isEmployee = (role) => hasRole(role, ROLES.EMPLOYEE) 
