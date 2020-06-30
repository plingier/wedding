import React, { Component } from 'react';
import Countdown from './Countdown';

const PostCardFront = (props) => {
    return (
        <div className="card__side card__side--front u-center-center-column">
            <div className="front__content u-center-center-column">
                <i>icon</i>
                <h1>Fran & Philippe</h1>
                <h2>24/10/2020</h2>
                <Countdown date={`2020-10-24T00:00:00`}/>               
            </div>
        </div>
    );
};

export default PostCardFront;