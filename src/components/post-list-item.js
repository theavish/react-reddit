import React, {Component} from 'react';

export default class PostListItem extends Component {

  render () {
    return (
      <li>{this.props.post.data.title}</li>
    );
  }
}

export default PostListItem;