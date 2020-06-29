import React from 'react';

const IconText = ({ icon, text }) => {

    const Icon = icon;
    
    return (
        <div className="iconText">
            <Icon size={20}/>
            <span className="iconText__span">{text}</span>
        </div>
    );
};

export default IconText;