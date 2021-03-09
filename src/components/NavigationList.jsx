import React from 'react';
import {FaChurch} from "react-icons/fa";
import {GoLaw} from "react-icons/go";
import {GiGlassCelebration} from "react-icons/gi";
import {FiMusic} from "react-icons/fi";
import {BsCalendar} from "react-icons/bs";

const NavigationList = ({ content, updateButtonChecked, updateShow }) => {

    const hyperOnClickHandler = (i) => {
        if(window.matchMedia("(max-width: 60em),(orientation: portrait)").matches === true) {
            updateButtonChecked();
        }
        else {
            updateShow(i);
        }
    };


    const iconManager = (i) => {
        let icn = "";
        let components = {
            burg: GoLaw,
            kerk: FaChurch,
            venue: GiGlassCelebration,
            agenda: BsCalendar,
            feest: FiMusic,
        }
        switch(i) {
            case 0: 
                icn = components.burg;
                break;
            case 1:
                icn = components.kerk;
                break;
            case 2: 
                icn = components.venue;
                break;
            case 3:
                icn = components.feest;
                break;
            case 4:
                icn = components.agenda;
                break;
            default:
                icn = components.kerk;
                break;
        }
        let NavListIcon = icn;
        return <NavListIcon />;
    }

    const navContent = content.map((cont, i) => {

        return (
            <li className="navigation__item" key={i} onClick={(e) => hyperOnClickHandler(i)}>
                <a href={["#" + cont.title]} className="navigation__hyper" >
                    <div className="navigation__item__icon">
                        <div className="navigation__item__icon__text">
                            {iconManager(i)}
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


