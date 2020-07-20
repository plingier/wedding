import React from 'react';

const RSVP = (props) => {
    return (
        <div className="stad__container" id={props.title}>
            <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSf_7GqN9IZZmv1KerA08kBamy-kQq2i4UM0_asgVzZ5Hxo2Uw/viewform?embedded=true" 
                frameborder="0"
                scrolling="auto"
                loading="lazy"
                title="Google Forms for RSVP" 
                className="googleRSVP">
                    Loading…
            </iframe>     
        </div>
    );
};


export default RSVP;