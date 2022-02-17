// Shows a form for a user to add imput
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';


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
          name="Subject"
          component="input"/>
          <Field
          placeholder="Email Body" 
          type="text"
          name="Body"
          component="input"/>
          <Field
          placeholder="Recipient List" 
          type="text"
          name="Email"
          component="input"/>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          <button type="submit">Submit</button>
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



export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
