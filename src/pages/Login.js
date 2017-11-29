import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { logIn, createAccount } from '../actions'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Sign In',
      alternate: 'create an account',
      username: '',
      password: '',
      confirmPassword: ''
    }
  }

  onAlternate = () => {
    if (this.state.alternate === 'create an account') {
      this.setState({
        title: 'Create Account',
        alternate: 'sign in'
      })
    } else {
      this.setState({
        title: 'Sign In',
        alternate: 'create an account'
      })
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
    const { username, password, confirmPassword } = this.state

    if (this.state.title === 'Sign In') {
      this.props.logIn({ username, password })
    } else {
      this.props.createAccount({ username, password, confirmPassword})
    }

    this.props.history.push('/welcome')
  }

  renderConfirmPassword = () => {
    if (this.state.title === 'Create Account') {
      return (
        <div className=''>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            onChange={e => this.handleChange(e)}
          />
          {/* <p className="usa-form-note">
            <a title="Show password" href="javascript:void(0);"
                className="usa-show_password"
                aria-controls="sign-in-password">
              Show password</a>
          </p> */}
        </div>
      )
    }
  }

  renderValidatePassword = () => {
    if (this.state.title === 'Create Account') {
      return (
        <div className="usa-alert usa-alert-info">
          <div className="usa-alert-body">
            <h3 className="usa-alert-heading">Passwords must:</h3>
          </div>
          <ul className="usa-checklist" id="validate-code">
            <li data-validator="uppercase">Have at least 1 uppercase character</li>
            <li data-validator="numerical">Have at least 1 numerical character</li>
          </ul>
        </div>
      )
    }
  }

  render() {
    const showPassword = this.state.title === 'Sign In'
      ? "sign-in-password"
      : "sign-in-password confirm-password"

    return (
      <div className='usa-grid'>
        <form className="usa-form" onSubmit={this.onSubmit}>
          <fieldset>
            <legend className="usa-drop_text">{this.state.title}</legend>
            <span>or <a href="javascript:void(0);" onClick={() => this.onAlternate()}>
              {this.state.alternate}
            </a></span>

            {this.renderValidatePassword()}

            <label htmlFor="sign-in-username">Username or email address</label>
            <input
              id="sign-in-username"
              name="username"
              type="text"
              autoCapitalize="off"
              autoCorrect="off"
              value={this.state.username}
              onChange={e => this.handleChange(e)}
              aria-describedby="validate-code"
              data-validate-uppercase="[A-Z]"
              data-validate-numerical="\d"
              data-validation-element="#validate-code"
            />

            <label htmlFor="sign-in-password">Password</label>
            <input
              id="sign-in-password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
            />

            {this.renderConfirmPassword()}

            <p className="usa-form-note">
              <a title="Show password" href="javascript:void(0);"
                  className="usa-show_password"
                  aria-controls={showPassword}
                  >
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
      </div>
    );
  }
}

export default connect(null,{ logIn, createAccount })(Login);
