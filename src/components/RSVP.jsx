import React from 'react';

const RSVP = (props) => {
    
    const rsvpLinker = () => {

        const mql = window.matchMedia("screen and (max-width: 60em),(orientation: portrait)");

        if(mql.matches === true) {
            return(
                <div className="stad__container" id={props.title}>
                <h2 className="stad__title">RSVP</h2>
                <h2 className="stad__subTitle">Are you in?</h2>
                <p>Wij kijken er alvast naar uit om deze dag met jullie te beleven!</p>
                <p>Klik binnenkort op volgende link om jullie aanwezigheid te bevestigen.</p>
                <a className="stad__link" 
                    //href="https://docs.google.com/forms/d/e/1FAIpQLSf_7GqN9IZZmv1KerA08kBamy-kQq2i4UM0_asgVzZ5Hxo2Uw/viewform?embedded=true"
                >
                        RSVP
                </a>         
                </div>
            );
            
        }
        else {
            return(
                <div className="stad__container" id={props.title}>
                    <h2 className="stad__title">RSVP</h2>
                    <h2 className="stad__subTitle">Are you in?</h2>
                    <p>Wij kijken er alvast naar uit om deze dag met jullie te beleven!</p>
                    <p>Klik binnenkort op volgende link om jullie aanwezigheid te bevestigen.</p>
                    <a className="stad__link" 
                    //href="https://docs.google.com/forms/d/e/1FAIpQLSf_7GqN9IZZmv1KerA08kBamy-kQq2i4UM0_asgVzZ5Hxo2Uw/viewform?embedded=true"
                    >
                            RSVP
                    </a>  
                    {/* <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSf_7GqN9IZZmv1KerA08kBamy-kQq2i4UM0_asgVzZ5Hxo2Uw/viewform?embedded=true" 
                    frameborder="0"
                    scrolling="auto"
                    loading="lazy"
                    title="Google Forms for RSVP" 
                    className="googleRSVP">
                    Loading…
                    </iframe>      */}
                </div>
            );
        }
    }

    return (
        <div>
            {rsvpLinker()}
        </div>
    );
};


export default RSVP;