import React from 'react';

const Venue = (props) => {
    return (
        <div className="venue">
            <div className="stad__container" id={props.title}>
            <h2 className="stad__title">Feest</h2>
            <h3 className="stad__subTitle">
                Zaterdag 24 Oktober 2020
                <br></br>
                <strong>
                    <div className="venue__blocks">
                        Receptie
                        <br></br>
                        16u00
                    </div>
                    <div className="venue__blocks">
                        Diner
                        <br></br>
                        17u30
                    </div>
                    <div className="venue__blocks">
                        Dessert
                        <br></br>
                        20u30
                    </div>
                </strong>
            </h3>
            <p className="stad__address">
                <em>Hof ten Bosse</em>
                <br></br>
                Hof ten Bosse straat 123
                <br></br>
                9000 Heusden
            </p>
            <a className="stad__link" 
                href="https://www.google.com/maps/dir/Parking+Sint-Pietersplein+(P10),+Sint-Pietersplein,+Gent/Onze-Lieve-Vrouw+Sint-Pieterskerk,+Sint-Pietersplein,+Gent/@51.0420331,3.7266986,17z/data=!4m8!4m7!1m2!1m1!1s0x47c371575524e343:0x952be0a3326e6942!1m2!1m1!1s0x47c37150a5ee13b3:0x3f63a9657888f6ba!3e2">
                    Navigeer
            </a>
        </div>
        </div>
    );
};


export default Venue;