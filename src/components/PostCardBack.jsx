import React from 'react';
import BackLeft from './BackLeft';
import BackRight from './BackRight';
import Navigation from './Navigation';

const PostCardBack = (props) => {
    return (
        <div className="card__side card__side--back">
            <BackLeft 
                title="Say Hallelujah & Yes"
                date = "24 Oktober 2020"
                time = "14:00"
                address = "Sint-Pietersplein, 9000 Gent"
                text = "Wij verwerlkomen u graag in de Sint-Pieterskerk."
            />  
            <BackRight />
            <Navigation />
        </div> 
    );
};

export default PostCardBack;