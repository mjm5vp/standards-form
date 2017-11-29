import React, { Component } from 'react';
import { connect } from 'react-redux';


class View extends Component {
  render() {
    const { title, firstName, middleName, lastName, dobMonth, dobDay, dobYear, address1, address2, city, st, zip } = this.props


    return (
      <div className='usa-grid view-div'>
        <p>Name: {title} {firstName} {lastName}</p>
        <p>DOB: {dobMonth} / {dobDay} / {dobYear}</p>
        <p>Address: {address1} {address2}</p>
        <p>City: {city}</p>
        <p>State: {st}</p>
        <p>Zip: {zip}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { title, firstName, middleName, lastName, dobMonth, dobDay, dobYear, address1, address2, city, st, zip } = state.form

  return { title, firstName, middleName, lastName, dobMonth, dobDay, dobYear, address1, address2, city, st, zip }

}

export default connect(mapStateToProps,{})(View)
