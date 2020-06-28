import React from 'react';
import PostCardFront from './PostCardFront';
import PostCardBack from './PostCardBack';

function PostCard() {
  return (
    <div className="card">
        <PostCardFront />
        <PostCardBack />
    </div>
  );
}

export default PostCard;