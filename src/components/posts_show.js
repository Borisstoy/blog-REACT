import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  render () {
    return (
      <div>
        Posts Show!
      </div>
    );
  };
}


export default PostsShow;
