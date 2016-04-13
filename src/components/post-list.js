import React from 'react';
import PostListItem from './post-list-item';

const PostList = (props) => {
  console.log('(PostList) props:', props);
  
  const postItems = props.posts.map((post) => {
    console.log('(PostList) post:', post)
    return (
      <PostListItem
      key={post.data.id}
      post={post} />
    );
  });

  return (
    <ul>
      {postItems}
    </ul>
  );
};

export default PostListItem;