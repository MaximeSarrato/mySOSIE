import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createUser } from '../../actions';

class SignupForm extends Component {
  renderField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input type={field.type} {...field.input} />
      </div>
    );
  }

  onSubmit(values) {
    this.props.createUser(values, this.props.history);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Username"
          name="username"
          type="text"
          component={this.renderField}
        />
        <Field
          label="Password"
          name="password"
          type="password"
          component={this.renderField}
        />
        <button type="submit" className="btn waves-effect waves-light">
          Submit
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signupForm'
})(connect(null, { createUser })(SignupForm));
