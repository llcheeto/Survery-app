// Shows a form for a user to add imput
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';


class SurveyForm extends Component {
   render() {
    return (
      <div>
         <Field
          placeholder="Survey Title" 
          type="text"
          name="title"
          component="input"/>
          <Field
          placeholder="Subject Line" 
          type="text"
          name="subject"
          component="input"/>
          <Field
          placeholder="Email Body" 
          type="text"
          name="body"
          component="input"/>
          <Field
          placeholder="Recipient List" 
          type="text"
          name="emails"
          component="input"/>
        <form onSubmit={this.props.handleSubmit(() => this.props.onSurveySubmit())}>
          <Link to ="/surveys" className="red btn-flat left white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

/* class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field component={SurveyField} type="text" label={label} name={name} />
      );
    });
  }
*/

function validate (values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || '');

  
  if (!values.title) {
    errors.title = 'You must provide a title';
  }
  if (!values.subject) {
    errors.subject = 'You must provide a subject';
  }
  if (!values) {
    errors.body = 'You must provide a body';
  }
  if (!values) {
    errors.emails = 'You must provide a body';
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);
