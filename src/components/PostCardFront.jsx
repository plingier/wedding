import React from 'react';
import Countdown from './Countdown';

const PostCardFront = (props) => {

    return (
        <div className="card__side card__side--front u-center-center-column">
            <div className="front__content u-center-center-column">
                <i>icon</i>
                <h1>Fran & Philippe</h1>
                <h2>24/10/2020</h2>
                <Countdown date={`2020-10-23T09:45:00`}/>
                <button className="front__cta">Meer info</button>          
            </div>
        </div>
    );
};

export default PostCardFront;