export default function(state={}, action) {

  switch (action.type) {

    case 'log_in':
      let { username, password } = action.payload;
      console.log('username and password saved');
      return { ...state, username, password };
    case 'log_in_fail':
      return {};
    default:
      return state
  }
}
