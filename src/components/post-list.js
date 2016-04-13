import React, {Component} from 'react';
import PostListItem from './post-list-item';

export default class PostList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      subreddit: props.subreddit
    }

  }
  
  postItems () {
    if (this.state && this.state.posts) {
      return this.state.posts.map((post) => {
        return (
          <PostListItem
            key={post.data.id}
            post={post} />
        );
      });
    } else {
      return null;
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps);
  }

  render () {
    return (
      <div>
        <strong>r/{this.state.subreddit}</strong>
        <ul>
          {this.postItems()}
        </ul>
      </div>
    );
  }
};

