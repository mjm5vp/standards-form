import React, { Component } from 'react';
import { connect } from 'react-redux';


class View extends Component {
  render() {
    const { title, firstName, middleName, lastName, address1, address2, city, st } = this.props


    return (
      <div className='usa-grid view-div'>
        <p>Name: {title} {firstName} {lastName}</p>
        <p>Address: {address1} {address2}</p>
        <p>City: {city}</p>
        <p>State: {st}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { title, firstName, middleName, lastName, address1, address2, city, st } = state.form

  return { title, firstName, middleName, lastName, address1, address2, city, st }

}

export default connect(mapStateToProps,{})(View)
