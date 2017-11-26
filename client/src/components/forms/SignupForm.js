import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createUser } from '../../actions';

class SignupForm extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          style={{ marginBottom: '15px' }}
          className="form-control"
          type={field.type}
          {...field.input}
        />
        <div className="text-danger">{touched ? error : ''}</div>
      </div>
    );
  }

  renderSubmitError() {
    if (this.props.sign) {
      if (this.props.sign.data.error) {
        switch (this.props.sign.data.error) {
          case 'USERNAME_ALREADY_EXIST':
            return (
              <p>
                Ce nom d'utilisateur existe déjà, veuillez en choisir un autre.
              </p>
            );
          default:
            return null;
        }
      }
    }
  }

  onSubmit(values) {
    this.props.createUser(values, this.props.history);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h2>Création de compte</h2>
        <div className="text-danger">{this.renderSubmitError()}</div>

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
        <button
          style={{ marginTop: '15px' }}
          type="submit"
          className="btn btn-success"
        >
          Valider
        </button>
        <Link
          style={{ marginLeft: '10px', marginTop: '15px' }}
          className="btn btn-danger"
          to="/login"
        >
          Retour
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.username) {
    errors.username = 'Saisissez votre login';
  }
  if (!values.password) {
    errors.password = 'Saisissez votre mot de passe';
  }

  return errors;
}

function mapStateToProps({ sign }) {
  return { sign };
}

export default reduxForm({
  form: 'signupForm',
  validate
})(connect(mapStateToProps, { createUser })(SignupForm));
