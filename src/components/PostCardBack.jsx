import React from 'react';
import BackLeft from './BackLeft';
import BackRight from './BackRight';
import Navigation from './Navigation';

const PostCardBack = (props) => {
    return (
        <div className="card__side card__side--back">
            <BackLeft />
            <BackRight />
            <Navigation />
        </div> 
    );
};

export default PostCardBack;