import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import PostList from './components/post-list';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subreddit: 'gaming',
      posts: []
    };

  }

  componentDidMount () {
    this.getPosts(this.state.subreddit);
  }

  getPosts(subreddit) {
    const sub = 'http://www.reddit.com/r/' + subreddit + '/top.json?limit=5'
    return $.get(sub, (resp) => {
      const posts = resp.data.children;
      console.log('(getPosts) posts:', posts);
      this.setState({ posts: posts, subreddit: subreddit });
      return posts;
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchRequest={(subreddit) => {this.getPosts(subreddit)}} />
        <h3>r/{this.state.subreddit}</h3>
        <PostList posts={this.state.posts} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('c'));