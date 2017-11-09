export default function(state={}, action) {
  switch (action.type) {
    case 'log_in':
      const { username, password } = action.payload
      console.log('username and password saved')
      return { ...state, username, password }
    default:
      return state
  }
}
