import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { logIn } from './actions'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }


  handleUsernameChange = (text) => {
    const username = text.target.value
    this.setState({ username })
    console.log(this.state.username)
  }

  handlePasswordChange = (text) => {
    const password = text.target.value
    this.setState({ password })
    console.log(this.state.password)
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log('submit')
    const { username, password } = this.state
    this.props.logIn({ username, password })
    this.props.history.push('/welcome')
  }


  render() {
    return (
      <form className="usa-form" onSubmit={this.onSubmit}>
        <fieldset>
          <legend className="usa-drop_text">Sign in</legend>
          <span>or <a href="javascript:void(0);">create an account</a></span>

          <label htmlFor="sign-in-username">Username or email address</label>
          <input
            id="sign-in-username"
            name="username"
            type="text"
            autoCapitalize="off"
            autoCorrect="off"
            value={this.state.username}
            onChange={text => this.handleUsernameChange(text)}
          />

          <label htmlFor="sign-in-password">Password</label>
          <input
            id="sign-in-password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={text => this.handlePasswordChange(text)}
          />
          <p className="usa-form-note">
            <a title="Show password" href="javascript:void(0);"
                className="usa-show_password"
                aria-controls="sign-in-password">
              Show password</a>
          </p>

          <Link to='/welcome' className='usa-button' type='submit' onClick={this.onSubmit}>
              Sign In
          </Link>

          <p><a href="javascript:void(0);" title="Forgot username">
            Forgot username?</a></p>
          <p><a href="javascript:void(0);" title="Forgot password">
            Forgot password?</a></p>

        </fieldset>
      </form>
    );
  }
}

export default connect(null,{ logIn })(Login);
