import React, { Component } from 'react';

class searchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subreddit: '',
      posts: []
    };
  }

  onSubmit(subreddit) {
    this.setState({subreddit});
    this.props.onSearchRequest(subreddit);
  }

  render() {

    return (
      <div>
        <form className="form-inline"
          onSubmit={(event) => {
            event.preventDefault();
            this.onSubmit(event.target.children[0].value)
          }}>
            <input placeholder="subreddit" className="form-control" required />
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    );
  }
};

export default searchBar;