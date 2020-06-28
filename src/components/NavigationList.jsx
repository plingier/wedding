import React from 'react';
import {FaChurch} from "react-icons/fa";


const NavigationList = (props) => {
    return (
        <nav className="navigation__flex">
            <ul className="navigation__list">
                <li className="navigation__item u-center-center-row">
                    <button className="navigation__item__button">
                        <FaChurch size={30}/>
                    </button>
                    <span className="navigation__item__span">Welcome</span>
                </li>
                <li className="navigation__item u-center-center-row">
                    <button className="navigation__item__button">
                        <FaChurch size={30}/>
                    </button>
                    <span className="navigation__item__span">Welcome</span>
                </li>
                <li className="navigation__item u-center-center-row">
                    <button className="navigation__item__button">
                        <FaChurch size={30}/>
                    </button>
                    <span className="navigation__item__span">Welcome</span>
                </li>
                <li className="navigation__item u-center-center-row">
                    <button className="navigation__item__button">
                        <FaChurch size={30}/>
                    </button>
                    <span className="navigation__item__span">Welcome</span>
                </li>
                <li className="navigation__item u-center-center-row">
                    <button className="navigation__item__button">
                        <FaChurch size={30}/>
                    </button>
                    <span className="navigation__item__span">Welcome</span>
                </li>
            </ul> 
        </nav>
        
    );
};

export default NavigationList;


