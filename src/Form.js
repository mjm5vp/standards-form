import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { submitForm } from './actions';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      firstName: '',
      middleName: '',
      lastName: '',
      address1: '',
      address2: '',
      city: '',
      st: ''
    }
  }

  handleChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)

    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log('submit')
    const { title, firstName, middleName, lastName, address1, address2, city, st } = this.state
    console.log(title)
    console.log(firstName)
    console.log(middleName)
    console.log(lastName)
    console.log(address1)
    console.log(address2)
    console.log(city)
    console.log(st)
    this.props.submitForm({ title, firstName, middleName, lastName, address1, address2, city, st })
    this.props.history.push('/view')
  }

  render() {
    return (
      <div>
        <form class="usa-form" onSubmit={this.onSubmit}>
          <fieldset>
            <legend>Enter Information</legend>
            <label for="title" class="usa-input-optional">Title</label>
            <input value={this.state.title} class="usa-input-tiny" id="title" name="title" type="text" onChange={e => this.handleChange(e)}/>

            <label for="firstName">First name</label>
            <input value={this.state.firstName} id="first-name" name="firstName" type="text" required="" aria-required="true" onChange={e => this.handleChange(e)}/>

            <label for="middleName" class="usa-input-optional">Middle name</label>
            <input value={this.state.middleName} id="middle-name" name="middleName" type="text" onChange={e => this.handleChange(e)}/>

            <label for="lastName">Last name</label>
            <input value={this.state.lastName} id="last-name" name="lastName" type="text" required="" aria-required="true" onChange={e => this.handleChange(e)}/>

            <label for="address1">Street address 1</label>
            <input value={this.state.address1} id="address1" name="address1" type="text" onChange={e => this.handleChange(e)}/>

            <label for="address2" class="usa-input-optional">
              Street address 2</label>
            <input value={this.state.address2} id="address2" name="address2" type="text" onChange={e => this.handleChange(e)}/>

            <div>
              <div class="usa-input-grid usa-input-grid-medium">
                <label for="city">City</label>
                <input value={this.state.city} id="city" name="city" type="text" onChange={e => this.handleChange(e)}/>
              </div>

              <div class="usa-input-grid usa-input-grid-small">
                <label for="state">State</label>
                <select value={this.state.state} id="st" name="st" onChange={e => this.handleChange(e)}>
                  <option value>- Select -</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                  <option value="AA">AA - Armed Forces Americas</option>
                  <option value="AE">AE - Armed Forces Africa</option>
                  <option value="AE">AE - Armed Forces Canada</option>
                  <option value="AE">AE - Armed Forces Europe</option>
                  <option value="AE">AE - Armed Forces Middle East</option>
                  <option value="AP">AP - Armed Forces Pacific</option>
                </select>
              </div>
            </div>

            <button type="submit" className='usa-button' onClick={this.onSubmit}>
              Submit
            </button>


          </fieldset>
        </form>
      </div>
    )
  }
}

export default connect(null, { submitForm })(Form);
