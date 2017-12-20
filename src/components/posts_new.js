import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  render () {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/">
            Back to posts lists
          </Link>
        </div>
        <h2>Create a post</h2>
       <form>
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
