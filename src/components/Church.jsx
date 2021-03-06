import React from 'react';

const Church = (props) => {
    return (
        <div className="stad__container" id={props.title}>
            <h2 className="stad__title">Kerkelijke trouw</h2>
            <h2 className="stad__subTitle">Sing Hallelujah!</h2>
            <h3 className="stad__date">
                Zaterdag 9 Oktober 2021
                <br></br>
                <strong>14u00</strong>
            </h3>
            <p className="stad__address">
                <em>Sint-Pieterskerk</em>
                <br></br>
                Sint-Pietersplein
                <br></br>
                9000 Gent
            </p>
            <a className="stad__link" 
                target= "_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/dir/Parking+Sint-Pietersplein+(P10),+Sint-Pietersplein,+Gent/Onze-Lieve-Vrouw+Sint-Pieterskerk,+Sint-Pietersplein,+Gent/@51.0420331,3.7266986,17z/data=!4m8!4m7!1m2!1m1!1s0x47c371575524e343:0x952be0a3326e6942!1m2!1m1!1s0x47c37150a5ee13b3:0x3f63a9657888f6ba!3e2">
                    Navigeer
            </a>
        </div>
    );
};


export default Church;