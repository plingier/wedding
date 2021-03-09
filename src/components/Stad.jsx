import React from 'react';

const Stad = (props) => {
    return (
        <div className="stad__container" id={props.title}>
            <h2 className="stad__title">Burgerlijke trouw</h2>
            <h2 className="stad__subTitle">I do! ... Do you?</h2>
            <h3 className="stad__date">
                Vrijdag 23 Oktober 2020
                <br></br>
                <strong>9u45</strong>
            </h3>
            <p className="stad__address">
                <em>Stadhuis Gent</em>
                <br></br>
                Botermarkt 1
                <br></br>
                9000 Gent
            </p>
            <a className="stad__link" 
                target= "_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/dir/Parking+Sint-Michiels+(P7)/Stadhuis+Gent,+Botermarkt,+Gent/@51.0562765,3.7204698,16z/data=!4m14!4m13!1m5!1m1!1s0x47c371416ebd5a63:0x5bfa68b023a0da43!2m2!1d3.7195799!2d51.0529697!1m5!1m1!1s0x47c371464ea5eafb:0x1ef8658035adcc4f!2m2!1d3.7252713!2d51.0544739!3e2">
                    Navigeer
            </a>
        </div>
    );
};


export default Stad;