import React from 'react';
import PostCardFront from './PostCardFront';
import PostCardBack from './PostCardBack';



const PostCard = () => {
      return (
        <div className="card">
          <PostCardFront />
          <PostCardBack />
        </div>
      );
}

export default PostCard;