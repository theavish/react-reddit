import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PostListItem from './post-list-item';

export default class PostList extends Component {
  
  postItems () {
    if (this.state && this.state.posts) {
      return this.state.posts.map((post) => {
        return (
          <PostListItem
            key={post.data.id}
            post={post} />
        );
      });
    } else return null;
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps);
  }

  render () {
    return (
      <ul>
        {this.postItems()}
      </ul>
    );
  }
};

