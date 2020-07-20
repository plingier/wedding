import React from 'react';

const Party = (props) => {
    return (
        <div className="stad__container" id={props.title}>
            <h2 className="stad__title">Party</h2>
            Wij rekenen ook op jullie om ons feest vorm te geven.
            <br></br>
            Vul deze lijst aan met jullie verzoekjes.
            <br></br>
            <iframe 
                src="https://open.spotify.com/embed/playlist/4ngwgJasrc2zgrYDy83exv"  
                frameBorder="0" 
                allowtransparency="true" 
                allow="encrypted-media"
                loading="lazy"
                title="Spotify playlist"
                className="playlist">
            </iframe>
        </div>
    );
};


export default Party;