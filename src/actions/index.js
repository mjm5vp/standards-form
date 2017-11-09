export function logIn({ username, password }) {
  return {
    type: 'log_in',
    payload: { username, password }
  }
}
