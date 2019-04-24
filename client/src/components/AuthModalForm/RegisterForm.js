import React from "react";
import { Field, reduxForm } from "redux-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";

import { register } from "../../actions/authActions";
import AuthFormField from "./AuthFormField";

class RegisterForm extends React.Component {
  onSubmit = formValues => {
    this.props.register(formValues);
  };

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.onSubmit)}>
        <Field name="name" type="text" component={AuthFormField} label="Name" />
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
        <Field
          name="password2"
          type="password"
          component={AuthFormField}
          label="Repeat password"
        />
        <div>
          <Button
            type="submit"
            variant="dark"
            className="mt-4"
            block
            disabled={submitting}
          >
            Register
          </Button>
        </div>
      </Form>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = "This field is required!";
  }
  if (!values.email) {
    errors.email = "This field is required!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "This field is required!";
  } else if (values.password.length < 6) {
    errors.password = "The password must be at least 6 characters long!";
  }
  if (!values.password2) {
    errors.password2 = "This field is required!";
  } else if (values.password !== values.password2) {
    errors.password2 = "The passwords does not match";
  }

  return errors;
};

const RegisterReduxForm = reduxForm({
  form: "registerForm",
  validate
})(RegisterForm);

export default connect(
  null,
  { register }
)(RegisterReduxForm);
