import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { createPost } from '../actions';
import _ from 'lodash';

const FIELDS = {
  title: {
    type: 'input',
    label: 'Title for post'
  },
  categories: {
    type: 'input',
    label: 'Enter some categories'
  },
  content: {
    type: 'textarea',
    label: 'Enter some content'
  },
};

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={className}>
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
    this.props.createPost(values, () => {
      // navigate automatically to root route
      this.props.history.push('/');
    });
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
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  _.each(FIELDS, (type, field) => {
    if (!values[field]) {
      errors[field] = `Enter a ${field}`
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  // same as validate: validate, ES6 syntax
  form: 'PostsNewForm'
})(
  connect(null,{ createPost })(PostsNew)
);
