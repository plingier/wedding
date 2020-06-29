import React from 'react';
import logo from '../images/hero-small.jpg';


const PostStamp = (props) => {
    return (
        <div className="postStampContainer">
            <img 
                src={logo}
                className="postStamp"
                width="250rem"
                height="140rem"
            >
            </img>
        </div>

        
    );

}


export default PostStamp;