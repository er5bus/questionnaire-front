export const required = value => value && value !== " " ? undefined : 'Ce champ est requis'

export const maxLength = max => value =>
  value && value.length > max ? `Doit contenir au maximum ${max} caractères` : undefined

export const minLength = min => value =>
  value && value.length < min ? `Doit contenir au moins ${min} caractères` : undefined

export const number = value =>
  value && isNaN(Number(value)) ? 'Doit être un nombre' : undefined

export const minValue = min => value =>
  value && value < min ? `Doit être d'au moins ${min}` : undefined

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Adresse e-mail invalide'
    : undefined

export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Seuls les caractères alphanumériques'
    : undefined

export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Numéro de téléphone non valide, doit comporter 10 chiffres'
    : undefined
