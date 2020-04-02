import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui purple message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const errorMessage = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={errorMessage}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    console.log("streamform =>", this.props);

    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter the title of your stream"
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Describe what your stream is about"
        />
        <button className="ui button purple">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must have a title!";
  }

  if (!formValues.description) {
    errors.description = "You must have a description!";
  }

  return errors;
};

export default reduxForm({ form: "streamForm", validate })(StreamForm);
