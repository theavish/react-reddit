import React, { Component } from 'react';
import $ from 'jquery';

class PostDetailsBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      post: {}
    }
  }

  componentWillReceiveProps(newProps) {
    const newPost = newProps.post;
    this.setState({post: newPost});
    this.loadContent(newPost.url);
  }

  loadContent(externalUrl) {
    $.getJSON('http://whateverorigin.org/get?url=' + encodeURIComponent(externalUrl) + '&callback=?', (data) => {
      const doc = document.getElementById('site').contentWindow.document;
      doc.open();
      doc.write(data.contents);
      doc.close();
    });
  }

  buildBox() {
    const post = this.state.post;
    let box = null;
    if (post.is_self) {
      //build custom box for comments etc.
      box = (
        <div>
          self post
        </div>
      );
    } else {
      //build iframe to display remote data
      const height = '540px';
      box = (
        <iframe id="site" frameBorder="0px" height={height} width="100%"></iframe>        
      );
    }
    return box;
  }

  render() {
    return (
      <div className="col-md-8" id="post-details-box">
        {this.buildBox()}
      </div>
    );
  }
}

export default PostDetailsBox;