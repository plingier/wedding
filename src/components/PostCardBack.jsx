import React, { Component } from 'react';
import BackRight from './BackRight';
import BackLeft from './BackLeft';
import NavigationButton from './NavigationButton';
import cardContent from '../cardContent';

class PostCardBack extends Component {
    constructor() {
        super();
        this.state = {
            content: []
        }
    }

        
    render() {
        const { content } = this.state;

        const listedContent = content.map(
            (cont, i) => {
            return (
                <BackLeft
                    key = {i}
                    title={cont.title}
                    date = {cont.date}
                    time = {cont.time}
                    address = {cont.address}
                    text = {cont.text}
                    gMaps = {cont.gMaps}
                />                   
            )}
        );

        return(
            <div className="card__side card__side--back">
                {listedContent}
                <BackRight />
                <NavigationButton />
            </div>
        )
    };

    componentDidMount() {
        this.setState({content: cardContent});
    }
};

export default PostCardBack;