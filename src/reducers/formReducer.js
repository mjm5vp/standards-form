const INITIAL_STATE = {
  title: '',
  firstName: '',
  middleName: '',
  lastName: '',
  address1: '',
  address2: '',
  city: '',
  st: '',
  zip: ''
}

export default function(state = INITIAL_STATE, action) {
  console.log('reducer')
  switch (action.type) {
    case 'submit_form':
      const { title, firstName, middleName, lastName, dobMonth, dobDay, dobYear, address1, address2, city, st, zip } = action.payload
      console.log('submit_form reducer')
      return { ...state, title, firstName, middleName, lastName, dobMonth, dobDay, dobYear, address1, address2, city, st, zip };
    default:
      return state;
  }
  console.log("state: " + state)
}
