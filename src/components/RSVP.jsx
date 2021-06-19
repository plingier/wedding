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
                    target= "_blank"
                    rel="noopener noreferrer"
                    href="https://form.jotform.com/211685706023048"
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
                        target= "_blank"
                        rel="noopener noreferrer"
                        href="https://form.jotform.com/211685706023048"
                    >           
                            RSVP
                    </a> 

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