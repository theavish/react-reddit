import React, {Component} from 'react';
import PostListItem from './post-list-item';

export default class PostList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }

  }
  
  postItems() {
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

  render() {
    return (
      <div className="col-md-4">
        <div className="list-group">{this.postItems()}</div>
        <center><a href="#">See More...</a></center>
      </div>
    );
  }
};

