import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStudent } from '../../actions';

class StudentCreationForm extends Component {
  renderField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input type={field.type} {...field.input} />
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
          <button
            type="submit"
            className="btn waves-effect waves-light red darken-1"
          >
            Ajouter
          </button>
          <Link
            style={{ marginLeft: '10px' }}
            className="btn btn-primary"
            to="/"
          >
            Back to index
          </Link>
        </form>
      </div>
    );
  }
}
export default reduxForm({
  form: 'createStudentForm'
})(connect(null, { createStudent })(StudentCreationForm));
