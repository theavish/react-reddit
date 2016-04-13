import React, { Component } from 'react';

class searchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      subreddit: ''
    };
  }

  onSubmit(subreddit) {
    this.setState({subreddit});
    this.props.onSearchRequest(subreddit);
  }

  render() {
    return (
      <form className="form-inline"
        onSubmit={(event) => {
          event.preventDefault();
          this.onSubmit(event.target.children[0].value)
        }}>
          <input placeholder="subreddit" className="form-control" />
          <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    );
  }
};

export default searchBar;