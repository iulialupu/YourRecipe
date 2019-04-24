import React from "react";
import { Field, reduxForm } from "redux-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { connect } from "react-redux";
import { login } from "../../actions/authActions";
import AuthFormField from "./AuthFormField";

class LoginForm extends React.Component {
  onSubmit = formValues => {
    this.props.login(formValues);
  };

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          name="email"
          type="email"
          component={AuthFormField}
          label="Email"
        />
        <Field
          name="password"
          type="password"
          component={AuthFormField}
          label="Password"
        />
        {/* {errors && errors.msg.login && (
          <strong className="auth-error-message">{errors.msg.login}</strong>
        )} */}
        <div>
          <Button
            type="submit"
            disabled={submitting}
            variant="dark"
            className="mt-4"
            block
          >
            Log In
          </Button>
        </div>
      </Form>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "This field is required!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "This field is required!";
  }

  return errors;
};

const LoginReduxForm = reduxForm({
  form: "loginForm",
  validate
})(LoginForm);

export default connect(
  null,
  { login }
)(LoginReduxForm);
