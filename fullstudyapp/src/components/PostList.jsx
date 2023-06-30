import React from 'react';
import PostItem from './PostItem';

export default function PostList({ posts, title, removePost }) {

  if (!posts.length) {
    return (
      <h1 style={{ textAlign: 'center'}}>No posts</h1>
    )
  }
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          key={post.id}
          number={index + 1}
          post={post}
          removePost={removePost}
        />
      ))}
    </div>

  )
}
