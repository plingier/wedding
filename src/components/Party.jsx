import React from 'react';

const Party = (props) => {
    return (
        <div className="stad__container" id={props.title}>
            <h2 className="stad__title">Muziekdoos</h2>
            <h2 className="stad__subTitle">Possibly stirred, definitely shakin'</h2>
            <br></br>
            <p>Goeie dansplaatjes? Voeg ze toe aan deze lijst (klik op het spotify logo en open via de app)!</p>
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