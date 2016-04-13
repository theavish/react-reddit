import React from 'react';

const PostListItem = (props) => {
  console.log('(PostListItem) props:', props)
  console.log('(PostListItem) post:', props.post)
  return (
    <li>post{props.post}</li>
  );
}

export default PostListItem;