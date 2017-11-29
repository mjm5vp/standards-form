export function logIn({ username, password }) {
  return {
    type: 'log_in',
    payload: { username, password }
  }
}

export function createAccount({ username, password, confirmPassword }) {
  if (password === confirmPassword) {
    console.log('passwords match')
    return {
      type: 'log_in',
      payload: { username, password }
    }
  } else {
    console.log('passwords do not match')
    return { type: 'log_in_fail'}
  }


}

export function submitForm({ title, firstName, middleName, lastName, dobMonth, dobDay, dobYear, address1, address2, city, st, zip }) {
  console.log('submitForm action')
  return {
    type: 'submit_form',
    payload: { title, firstName, middleName, lastName, dobMonth, dobDay, dobYear, address1, address2, city, st, zip }
  }
}
