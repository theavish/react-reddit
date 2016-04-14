import React, {Component} from 'react';

export default class PostListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: this.props.post.data
    }
  }

  render () {
    const post = this.state.post;
    post.comments = 'http://reddit.com' + post.permalink;

    if (post.thumbnail === 'self') {
      post.thumbnail = 'http://i.imgur.com/1a7hzx7.png';
    } else if (post.thumbnail === 'nsfw') {
      post.thumbnail = 'http://i.imgur.com/BkVs3Ac.png';
    }

    return (
      <div onClick={(e) => this.props.onPostSelect(post)} className="list-group-item">
        <div className="media-left">
          <img className="media-object" src={post.thumbnail} height="64px" width="64px" />
        </div>
        <div className="media-body">
          <h5 className="media-heading">
            <a className="media" href={post.url}>{post.title}</a>
          </h5>
          <a href={post.comments}>comments</a>
          <small> | {post.author}</small>
        </div>
      </div>
    );
  }
}

export default PostListItem;