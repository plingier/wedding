import React from 'react';
import BackLeft from './BackLeft';
import BackRight from './BackRight';
import NavigationButton from './NavigationButton';

const PostCardBack = (props) => {
    return (
        <div className="card__side card__side--back">
            <BackLeft 
                title="Say Hallelujah & Yes"
                date = "24 Oktober 2020"
                time = "14:00"
                address = "Sint-Pietersplein, 9000 Gent"
                href = "https://www.google.com/maps/place/Sint-Pietersabdij/@51.0424485,3.72335,17z/data=!4m13!1m7!3m6!1s0x47c37150b0f4c601:0xc78bf8eb1d6e094a!2sSint-Pietersplein,+9000+Gent!3b1!8m2!3d51.0424485!4d3.725544!3m4!1s0x47c37150b165dd81:0x6a023c4d7bdac0a8!8m2!3d51.0421385!4d3.7267464"
                text = "Wij verwerlkomen u graag in de Sint-Pieterskerk."
            />  
            <BackRight />
            <NavigationButton />
        </div> 
    );
};

export default PostCardBack;