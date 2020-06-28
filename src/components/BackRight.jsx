import React from 'react';
import NavigationList from './NavigationList';
import PostStamp from './PostStamp';

const BackRight = (props) => {
    return (
        <div className="backRight u-padding-3">
            <PostStamp />
            <NavigationList />
        </div>
    );
};

export default BackRight;