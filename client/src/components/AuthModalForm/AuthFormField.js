import React from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";

import { clearErrors } from "../../actions/errorActions";

function AuthFormField({
  input,
  label,
  type,
  meta: { touched, error },
  msg,
  clearErrors
}) {
  return (
    <Form.Group className="mb-3">
      <Form.Label className="mb-1">{label}</Form.Label>
      <Form.Control
        {...input}
        placeholder={label}
        type={type}
        onFocus={clearErrors}
      />
      {touched && error && (
        <Form.Text className="error-message">{error}</Form.Text>
      )}
      {msg && msg.field === label ? (
        <Form.Text className="error-message">{msg.msg}</Form.Text>
      ) : null}
    </Form.Group>
  );
}

const mapStateToProps = state => ({
  msg: state.error.msg
});

export default connect(
  mapStateToProps,
  { clearErrors }
)(AuthFormField);
