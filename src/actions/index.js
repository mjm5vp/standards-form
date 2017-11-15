export function logIn({ username, password }) {
  return {
    type: 'log_in',
    payload: { username, password }
  }
}

export function submitForm({ title, firstName, middleName, lastName, address1, address2, city, st }) {
  console.log('submitForm action')
  return {
    type: 'submit_form',
    payload: { title, firstName, middleName, lastName, address1, address2, city, st }
  }
}
