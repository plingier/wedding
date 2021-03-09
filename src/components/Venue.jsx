import React from 'react';

const Venue = (props) => {
    return (
        <div className="venue">
            <div className="stad__container" id={props.title}>
                <h2 className="stad__title">Avondfeest</h2>
                <h2 className="stad__subTitle">Let's eat! Let's dance!</h2>
                <h3 className="stad__date">
                    Zaterdag 9 Oktober 2021
                    <br></br>
                    <strong>
                        <div className="venue__blocks">
                            Receptie
                            <br></br>
                            17u30
                        </div>
                        <div className="venue__blocks">
                            Diner
                            <br></br>
                            19u00
                        </div>
                        <div className="venue__blocks">
                            Dessert
                            <br></br>
                            21u00
                        </div>
                    </strong>
                </h3>
                <p className="stad__address">
                    <em>Hof ten Bosse</em>
                    <br></br>
                    Ten Bosse 14
                    <br></br>
                    9070 Destelbergen
                    <br></br>
                    <br></br>
                    <em>(Shuttle vanaf Laarnebaan 105)</em>
                </p>
                <a className="stad__link"
                    target= "_blank"
                    rel="noopener noreferrer" 
                    href="https://goo.gl/maps/cNG2TiF2thUSZVDD6">
                        Navigeer
                </a>
            </div>
        </div>
    );
};


export default Venue;