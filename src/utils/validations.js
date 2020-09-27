export const required = value => value && value !== " " ? undefined : 'Champs Obligatoire'

export const maxLength = max => value =>
  value && value.length > max ? `Doit contenir ${max} caractères ou moins` : undefined

export const minLength = min => value =>
  value && value.length < min ? `Doit contenir ${min} caractères ou plus` : undefined

export const number = value =>
  value && isNaN(Number(value)) ? 'Doit être un nombre' : undefined

export const minValue = min => value =>
  value && value < min ? `Doit être au moins ${min}` : undefined

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined

export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined
