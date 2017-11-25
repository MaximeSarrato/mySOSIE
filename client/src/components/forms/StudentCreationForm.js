import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStudent } from '../../actions';

class StudentCreationForm extends Component {
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

  onSubmit(values) {
    this.props.createStudent(values, this.props.history);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h3>Ajout d'un étudiant</h3>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Nom"
            name="lastname"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Prénom"
            name="firstname"
            type="text"
            component={this.renderField}
          />

          <Field
            label="Nom de la promotion"
            name="promotionName"
            type="text"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-success">
            Ajouter
          </button>
          <Link
            style={{ marginLeft: '10px' }}
            className="btn btn-danger"
            to="/"
          >
            Retour
          </Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.lastname) {
    errors.lastname = 'Saisissez un nom';
  }
  if (!values.firstname) {
    errors.firstname = 'Saisissez un prénom';
  }
  if (!values.promotionName) {
    errors.promotionName = "Saisissez le nom d'une promotion";
  }

  return errors;
}

export default reduxForm({
  form: 'createStudentForm',
  validate
})(connect(null, { createStudent })(StudentCreationForm));
