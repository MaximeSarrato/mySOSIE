import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';

class LoginForm extends Component {
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
    if (this.props.auth) {
      if (this.props.auth.error) {
        switch (this.props.auth.error) {
          case 'BAD_LOGIN_OR_PASSWORD':
            return (
              <p>Le nom d'utilisateur ou le mot de passe est incorrect.</p>
            );
          default:
            return null;
        }
      }
    }
  }

  onSubmit(values) {
    this.props.loginUser(values, this.props.history);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h2>Connexion</h2>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
            Connexion
          </button>
          <Link
            style={{ marginLeft: '10px', marginTop: '15px' }}
            className="btn btn-danger"
            to="/"
          >
            Retour au menu
          </Link>
        </form>
        <div className="text-center" style={{ marginTop: '100px' }}>
          <p className="text-center">Pas encore inscrit ?</p>
          <Link to="/signup" className="btn btn-primary btn-lg ">
            Créer mon compte
          </Link>
        </div>
      </div>
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

function mapStateToProps({ auth }) {
  return { auth };
}

export default reduxForm({
  form: 'loginForm',
  validate
})(connect(mapStateToProps, { loginUser })(LoginForm));
