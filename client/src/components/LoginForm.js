import React from "react";
import { Field, reduxForm } from "redux-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class LoginForm extends React.Component {
  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control {...input} placeholder={label} type={type} />
      {touched && error && (
        <Form.Text className="error-message">{error}</Form.Text>
      )}
    </Form.Group>
  );

  onSubmit = () => {
    console.log("submit");
  };

  render() {
    const { error, handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.onSubmit)}>
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
        {error && <strong>{error}</strong>}
        <div>
          <Button type="submit" disabled={submitting}>
            Log In
          </Button>
          <Button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
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

export default reduxForm({
  form: "loginForm",
  validate
})(LoginForm);
