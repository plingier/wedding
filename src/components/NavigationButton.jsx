import React from 'react';
import NavigationList from "./NavigationList";


const NavigationButton = (props) => {
    return (
        <div>
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"></input>
            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>
            
            <div className="navigation__nav u-center-center-column">
                <NavigationList />
            </div>
        </div>
    );
};

export default NavigationButton;