import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className="form-group has-danger">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render () {
    const { handleSubmit } = this.props;

    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/">
            Back to posts lists
          </Link>
        </div>
        <h2>Create a post</h2>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Content"
            name="content"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  if(!values.title) {
    errors.title = "Enter a title!"
  }
  if(!values.categories) {
    errors.categories = "Enter a category!"
  }
  if(!values.content) {
    errors.content = "Enter some content please!"
  }
  return errors;
}

export default reduxForm({
  validate,
  // same as validate: validate, ES6 syntax
  form: 'PostsNewForm'
})(PostsNew);
