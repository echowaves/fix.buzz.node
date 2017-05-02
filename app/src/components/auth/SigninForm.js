import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import * as actions from '../../actions'

class SigninForm extends Component {

  handleFormSubmit = (values) => {
    actions.signinUser(values)
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset className="form-group">
          <label>Email:</label>
          <Field name="email" component="input" type="email" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <Field name="password" component="input" type="password"  className="form-control" />
        </fieldset>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    )
  }

}


SigninForm = reduxForm({
  form: 'SigninForm'
})(SigninForm)


export default SigninForm
