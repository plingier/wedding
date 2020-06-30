import React from 'react';
import NavigationList from "./NavigationList";


const NavigationButton = (props) => {
    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"></input>
            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">
                &nbsp;
            </div>
            
            <nav className="navigation__nav">
                <NavigationList />
            </nav>
        </div>
    );
};

export default NavigationButton;