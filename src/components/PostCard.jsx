import React from 'react';
import PostCardFront from './PostCardFront';
import PostCardBack from './PostCardBack';

function PostCard() {

  const isIE = /*@cc_on!@*/false || !!document.documentMode;

  const validateIE = () => {
    // Internet Explorer 6-11
    if(isIE===true) {
      return <p>Please do not use an old browser</p>;
    }
    else {
      return (
        <div className="card">
          <PostCardFront />
          <PostCardBack />
        </div>
      )    
    } 

  }

  return (validateIE());

}

export default PostCard;