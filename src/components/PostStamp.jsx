import React from 'react';
import logo from '../images/front2.png';


const PostStamp = (props) => {
    return (
        <div className="postStampContainer">
            <img 
                src={logo}
                className="postStamp"
                width="250rem"
                height="140rem"
                alt="Poststamp"
            >
            </img>
        </div>

        
    );

}


export default PostStamp;