import React from 'react';
import Countdown from './Countdown';
import {RiHeartsLine} from "react-icons/ri";


const PostCardFront = (props) => {

    return (
        <div className="card__side card__side--front u-center-center-column">
            <div className="front__content u-center-center-column">
                <RiHeartsLine size={30}/>
                <h1>Fran & Philippe</h1>
                <h2>09/10/2021</h2>
                <Countdown date={`2021-10-09T14:00:00`}/>
                <button className="front__cta">Meer info</button>          
            </div>
        </div>
    );
};

export default PostCardFront;