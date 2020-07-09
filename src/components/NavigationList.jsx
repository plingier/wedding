import React from 'react';
import {FaChurch} from "react-icons/fa";


const NavigationList = ({ content, updateButtonChecked, updateShow }) => {

    const hyperOnClickHandler = (i) => {
        if(window.matchMedia("(max-width: 60em),(orientation: portrait)").matches === true) {
            updateButtonChecked();
        }
        else {
            updateShow(i);
        }
    };

    const navContent = content.map( (cont, i) => {

        return (
            <li className="navigation__item" key={i} onClick={(e) => hyperOnClickHandler(i)}>
                <a href={["#" + cont.title]} className="navigation__hyper" >
                    <div className="navigation__item__icon">
                        <div className="navigation__item__icon__text">
                            <FaChurch size={30}/>
                        </div>
                    </div>
                    <span className="navigation__item__span">{cont.title}</span>
                </a>
            </li>
        )
    });

    return (
        <ul className="navigation__list">
            {navContent}
        </ul>        
    );
};

export default NavigationList;


