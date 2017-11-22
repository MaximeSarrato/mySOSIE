import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPromotion } from '../../actions';

class PromotionCreationForm extends Component {
  renderField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input type={field.type} {...field.input} />
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
          <Field
            label="Année de fin"
            name="finishingYear"
            type="text"
            className="datepicker"
            component={this.renderField}
          />

          <button
            type="submit"
            className="btn waves-effect waves-light red darken-1"
          >
            Créer
          </button>
          <Link
            style={{ marginLeft: '10px' }}
            className="btn btn-primary"
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
