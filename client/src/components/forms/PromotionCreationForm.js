import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPromotion } from '../../actions';
import SelectYear from './SelectYear';

class PromotionCreationForm extends Component {
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
    this.props.createPromotion(values, this.props.history);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h3>Créer une promotion</h3>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Nom"
            name="name"
            type="text"
            component={this.renderField}
          />
          <label>Année de fin</label>
          <Field name="finishingYear" component={SelectYear} />

          <button type="submit" className="btn btn-success">
            Créer
          </button>
          <Link
            style={{ marginLeft: '10px' }}
            className="btn btn-danger"
            to="/"
          >
            Retour au menu
          </Link>
        </form>
      </div>
    );
  }
}
export default reduxForm({
  form: 'createPromotionForm'
})(connect(null, { createPromotion })(PromotionCreationForm));
