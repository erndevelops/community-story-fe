import React, { Component } from "react";
import { Field, reduxForm, focus } from "redux-form";
import Input from "./Input";
import { login } from "../actions/auth";
import { required, nonEmpty } from "../validators";

export class SignInForm extends Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
  }
  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <div className="flex-wrap">
        <fieldset>
          <form
            className="login-form"
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
          >
            {error}
            <Field
              component={Input}
              name="username"
              type="text"
              placeholder="username"
              validate={[required, nonEmpty]}
            />
            <Field
              component={Input}
              name="password"
              type="password"
              placeholder="password"
              validate={[required, nonEmpty]}
            />
            <button
              disabled={this.props.pristine || this.props.submitting}
              className="login-btn">
              Sign
            </button>
          </form>
        </fieldset>

        <div className="test-account">
          <p className="test-text">Username: user123</p>

          <p className="test-text">Password: password1</p>
          <p className="reg-text">
            Not Registered? <a href="/register">Sign Up</a>
          </p>
        </div>
      </div>
    );
  }
}
export default reduxForm({
  form: "login",
  onSubmitFail: (errors, dispatch) => dispatch(focus("login", "username"))
})(SignInForm);
