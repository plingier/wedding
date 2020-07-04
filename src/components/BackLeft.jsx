import React from 'react';
import IconText from './IconText';
import {GoCalendar} from "react-icons/go";
import {GoLocation} from "react-icons/go";
import {AiOutlineClockCircle} from "react-icons/ai";

const BackLeft = ({ title, date, time, address, text, gMaps }) => {

    return (
        <div className="backLeft u-padding-">
            <div className="backLeft__TitleContainer" id={title}>
                <h1>{title}</h1>
            </div>
            <div className="u-center-center-column">
                <div className="backLeft__IconContainer">
                    <IconText icon={GoCalendar} text={date}/>
                    <IconText icon={AiOutlineClockCircle} text={time}/>
                    <IconText icon={GoLocation} text={address} gMaps={gMaps}/>
                </div>
            </div>
            <article>
                {text}
            </article>
           
        </div>
        
    );
};

export default BackLeft;