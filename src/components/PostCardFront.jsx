import React from 'react';

const PostCardFront = (props) => {
    return (
        <div className="card__side card__side--front u-center-center-column">
            <div className="front__content u-center-center-column">
                <i>icon</i>
                <h1>Fran & Philippe</h1>
                <h2>24/10/2020</h2>
                <span>100d 20h 10min</span>                
            </div>
        </div>
    );
};

export default PostCardFront;