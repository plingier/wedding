import React from 'react';

const IconText = ({ icon, text, href }) => {

    const Icon = icon;
    
    return (
        <div className="iconText">
            <Icon size={20}/>
            <a href={href} className="iconText__span" target="_blank">{text}</a>
        </div>
    );
};

export default IconText;