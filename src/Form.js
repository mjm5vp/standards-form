import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AWS from 'aws-sdk';

import { submitForm } from './actions';

AWS.config.update({
  region: "us-east-1",
  endpoint: 'https://dynamodb.us-east-1.amazonaws.com',
  // accessKeyId default can be used while using the downloadable version of DynamoDB.
  // For security reasons, do not store AWS Credentials in your files. Use Amazon Cognito instead.
  accessKeyId: "AKIAJHMEUE45BM6KJIUQ",
  // secretAccessKey default can be used while using the downloadable version of DynamoDB.
  // For security reasons, do not store AWS Credentials in your files. Use Amazon Cognito instead.
  secretAccessKey: "teuFqvNC43s+/3n/f4GJ5GyO5LHTA0PavK6WMHXX"
});

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
      address1: '',
      address2: '',
      city: '',
      st: ''
    }
  }

  createTable() {
      var params = {
          TableName : "PeopleTable",
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
              document.getElementById('textarea').innerHTML = "Unable to create table: " + "\n" + JSON.stringify(err, undefined, 2);
          } else {
              document.getElementById('textarea').innerHTML = "Created table: " + "\n" + JSON.stringify(data, undefined, 2);
          }
      });
  }

  createItem = () => {
      var params = {
          TableName :"PeopleTable",
          Item:{
              "firstName": this.state.firstName,
              "lastName": this.state.lastName,
          }
      };
      docClient.put(params, function(err, data) {
          if (err) {
              document.getElementById('textarea').innerHTML = "Unable to add item: " + "\n" + JSON.stringify(err, undefined, 2);
          } else {
              document.getElementById('textarea').innerHTML = "PutItem succeeded: " + "\n" + JSON.stringify(data, undefined, 2);
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
    const { title, firstName, middleName, lastName, address1, address2, city, st } = this.state
    // console.log(title)
    // console.log(firstName)
    // console.log(middleName)
    // console.log(lastName)
    // console.log(address1)
    // console.log(address2)
    // console.log(city)
    // console.log(st)
    this.createItem();
    this.props.submitForm({ title, firstName, middleName, lastName, address1, address2, city, st })
    this.props.history.push('/view')
  }

  render() {
    return (

      <div className='usa-grid'>
        <form className="usa-form" onSubmit={this.onSubmit}>
          <fieldset>
            <legend>Enter Information</legend>
            <label for="title" className="usa-input-optional">Title</label>
            <input value={this.state.title} className="usa-input-tiny" id="title" name="title" type="text" onChange={e => this.handleChange(e)}/>

            <label for="firstName">First name</label>
            <input value={this.state.firstName} id="first-name" name="firstName" type="text" required="" aria-required="true" onChange={e => this.handleChange(e)}/>

            <label for="middleName" className="usa-input-optional">Middle name</label>
            <input value={this.state.middleName} id="middle-name" name="middleName" type="text" onChange={e => this.handleChange(e)}/>

            <label for="lastName">Last name</label>
            <input value={this.state.lastName} id="last-name" name="lastName" type="text" required="" aria-required="true" onChange={e => this.handleChange(e)}/>

            <label for="address1">Street address 1</label>
            <input value={this.state.address1} id="address1" name="address1" type="text" onChange={e => this.handleChange(e)}/>

            <label for="address2" className="usa-input-optional">
              Street address 2</label>
            <input value={this.state.address2} id="address2" name="address2" type="text" onChange={e => this.handleChange(e)}/>

            <div>
              <div className="usa-input-grid usa-input-grid-medium">
                <label for="city">City</label>
                <input value={this.state.city} id="city" name="city" type="text" onChange={e => this.handleChange(e)}/>
              </div>

              <div className="usa-input-grid usa-input-grid-small">
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

            <button type="submit" classNameName='usa-button' onClick={this.onSubmit}>
              Submit
            </button>


          </fieldset>
        </form>
      </div>
    )
  }
}

export default connect(null, { submitForm })(Form);
