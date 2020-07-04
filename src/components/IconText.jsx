import React from 'react';

const IconText = ({ icon, text, gMaps }) => {

    const Icon = icon;
    
    return (
        <div className="iconText">
            <Icon size={20}/>
            <a href={gMaps} className="iconText__span" target="_blank" rel="noopener noreferrer">{text}</a>
        </div>
    );
};

export default IconText;