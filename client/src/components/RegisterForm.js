import React from "react";
import { Field, reduxForm } from "redux-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { connect } from "react-redux";
import { register, login } from "../actions/authActions";

class RegisterForm extends React.Component {
  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <Form.Group className="mb-3">
      <Form.Label className="mb-1">{label}</Form.Label>
      <Form.Control {...input} placeholder={label} type={type} />
      {touched && error && (
        <Form.Text className="error-message">{error}</Form.Text>
      )}
      {console.log(error, touched)}
    </Form.Group>
  );

  onSubmit = formValues => {
    console.log("submit", formValues);
    this.props.register(formValues);
  };

  render() {
    const { error, handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          name="name"
          type="text"
          component={this.renderField}
          label="Name"
        />
        <Field
          name="email"
          type="email"
          component={this.renderField}
          label="Email"
        />
        <Field
          name="password"
          type="password"
          component={this.renderField}
          label="Password"
        />
        <Field
          name="password2"
          type="password"
          component={this.renderField}
          label="Repeat password"
        />
        {error && <strong>{error}</strong>}
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
        {console.log(error)}
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

const mapStateToProps = state => ({
  error: state.error
});

const RegisterReduxForm = reduxForm({
  form: "registerForm",
  validate
})(RegisterForm);

export default connect(
  mapStateToProps,
  { register, login }
)(RegisterReduxForm);
