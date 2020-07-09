import React from 'react';
import NavigationList from './NavigationList';
import PostStamp from './PostStamp';

const BackRight = ({ content, updateShow }) => {
    return (
        <div className="backRight u-padding-1">
            <PostStamp />
            <div>&nbsp;</div>
            <NavigationList content={content} updateShow={updateShow}/>
        </div>
    );
};

export default BackRight;