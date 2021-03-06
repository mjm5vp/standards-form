import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AWS from 'aws-sdk';

import { submitForm } from '../actions';
import { accessKeyId, secretAccessKey } from '../.aws/credentials';


AWS.config.update({
  region: "us-east-1",
  endpoint: 'https://dynamodb.us-east-1.amazonaws.com',
  // accessKeyId default can be used while using the downloadable version of DynamoDB.
  // For security reasons, do not store AWS Credentials in your files. Use Amazon Cognito instead.
  accessKeyId: accessKeyId,
  // secretAccessKey default can be used while using the downloadable version of DynamoDB.
  // For security reasons, do not store AWS Credentials in your files. Use Amazon Cognito instead.
  secretAccessKey: secretAccessKey
});

// AWS.config.credentials = new AWS.CognitoIdentityCredentials({
// IdentityPoolId: "us-east-1:a6daaf57-5a40-46f2-8acc-ac2ecb1c9569",
// RoleArn: "arn:aws:iam::123456789012:role/Cognito_DynamoPoolUnauth"
// });

const dynamodb = new AWS.DynamoDB();
const docClient = new AWS.DynamoDB.DocumentClient();


class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      firstName: '',
      middleName: '',
      lastName: '',
      dobMonth: '',
      dobDay: '',
      dobYear: '',
      address1: '',
      address2: '',
      city: '',
      st: ''
    }
  }

  createTable() {
      var params = {
          TableName : "Vertical-Apps-2",
          KeySchema: [
              { AttributeName: "firstName", KeyType: "HASH"},
              { AttributeName: "lastName", KeyType: "RANGE" }
          ],
          AttributeDefinitions: [
              { AttributeName: "firstName", AttributeType: "N" },
              { AttributeName: "lastName", AttributeType: "S" }
          ],
          ProvisionedThroughput: {
              ReadCapacityUnits: 5,
              WriteCapacityUnits: 5
          }
      };

      dynamodb.createTable(params, function(err, data) {
          if (err) {
              console.log("Unable to create table: " + "\n" + JSON.stringify(err, undefined, 2));
          } else {
              console.log("Created table: " + "\n" + JSON.stringify(data, undefined, 2));
          }
      });
  }

  createItem = () => {
    const { title, firstName, middleName, lastName, dobMonth, dobDay, dobYear, address1, address2, city, st, zip } = this.state

    const opTitle = title === '' ? ' ' : title
    const opMiddleName = middleName === '' ? ' ' : middleName
    const opAddress2 = address2 === '' ? ' ' : address2

    const primaryKey = firstName + lastName + dobMonth + dobDay + dobYear
    console.log(`primaryKey: ${primaryKey}`)

      var params = {
          TableName :"Vertical-Apps-2",
          Item:{
              primaryKey,
              opTitle,
              firstName,
              opMiddleName,
              lastName,
              dobMonth,
              dobDay,
              dobYear,
              address1,
              opAddress2,
              city,
              st,
              zip
          }
      };
      docClient.put(params, function(err, data) {
          if (err) {
              console.log("Unable to add item: " + "\n" + JSON.stringify(err, undefined, 2));
          } else {
              console.log("PutItem succeeded: " + "\n" + JSON.stringify(data, undefined, 2));
          }
      });
  }

  handleChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)

    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log('submit')
    const { title, firstName, middleName, lastName, dobMonth, dobDay, dobYear, address1, address2, city, st, zip } = this.state

    if ( firstName && lastName && dobMonth && dobDay && dobYear && address1 && city && st && zip) {
      this.createItem();
      this.props.submitForm({ title, firstName, middleName, lastName, dobMonth, dobDay, dobYear, address1, address2, city, st, zip })
      this.props.history.push('/view')
    } else {
      console.log('data missing')
    }

  }

  render() {
    return (

      <div className='usa-grid'>
        <form className="usa-form" onSubmit={this.onSubmit}>
          <fieldset>
            <legend>Enter Information</legend>
            <label htmlFor="title" className="usa-input-optional">Title</label>
            <input value={this.state.title} className="usa-input-tiny" id="title" name="title" type="text" onChange={e => this.handleChange(e)}/>

            <label htmlFor="firstName">First name</label>
            <input value={this.state.firstName} id="first-name" name="firstName" type="text" required="" aria-required="true" onChange={e => this.handleChange(e)}/>

            <label htmlFor="middleName" className="usa-input-optional">Middle name</label>
            <input value={this.state.middleName} id="middle-name" name="middleName" type="text" onChange={e => this.handleChange(e)}/>

            <label htmlFor="lastName">Last name</label>
            <input value={this.state.lastName} id="last-name" name="lastName" type="text" required="" aria-required="true" onChange={e => this.handleChange(e)}/>

            <label htmlFor='date_of_birth_1'>Date of birth</label>
            <div className="usa-date-of-birth dob-div">
              <div className="usa-form-group usa-form-group-month">
                <label htmlFor="date_of_birth_1">Month</label>
                <input className="usa-input-inline" aria-describedby="dobHint" id="date_of_birth_1" name="dobMonth" type="number" min="1" max="12" value={this.state.dobMonth} onChange={e => this.handleChange(e)}/>
              </div>
              <div className="usa-form-group usa-form-group-day">
                <label htmlFor="date_of_birth_2">Day</label>
                <input className="usa-input-inline" aria-describedby="dobHint" id="date_of_birth_2" name="dobDay" type="number" min="1" max="31" value={this.state.dobDay} onChange={e => this.handleChange(e)}/>
              </div>
              <div className="usa-form-group usa-form-group-year">
                <label htmlFor="date_of_birth_3">Year</label>
                <input className="usa-input-inline" aria-describedby="dobHint" id="date_of_birth_3" name="dobYear" type="number" min="1900" max="2000" value={this.state.dobYear} onChange={e => this.handleChange(e)}/>
              </div>
            </div>

            <label className='usa-input address-label' htmlFor="address1">Street address 1</label>
            <input value={this.state.address1} id="address1" name="address1" type="text" onChange={e => this.handleChange(e)}/>

            <label htmlFor="address2" className="usa-input-optional">
              Street address 2</label>
            <input value={this.state.address2} id="address2" name="address2" type="text" onChange={e => this.handleChange(e)}/>

            <div>
              <div className="usa-input-grid usa-input-grid-medium">
                <label htmlFor="city">City</label>
                <input value={this.state.city} id="city" name="city" type="text" onChange={e => this.handleChange(e)}/>
              </div>

              <div className="usa-input-grid usa-input-grid-small">
                <label htmlFor="st">State</label>
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

              <button type="submit" className='usa-button' onClick={this.onSubmit}>
                Submit
              </button>

              <div className="usa-input-grid usa-input-grid-small">
                <label htmlFor="zip">Zip</label>
                <input value={this.state.zip} id="zip" name="zip" type="text" onChange={e => this.handleChange(e)}/>
              </div>

            </div>

          </fieldset>
        </form>
      </div>
    )
  }
}

export default connect(null, { submitForm })(Form);
