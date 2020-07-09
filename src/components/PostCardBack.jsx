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


    updateShow = (index) => {
        const content2 = this.state.content.map((cont, i) => {
            if(i===index) {
                return {...cont, show: true}
            }
            else {
                return {...cont, show: false}
            }
        });
        this.setState({content: content2})
    };
        

    render() {
        const { content} = this.state;

        let listedContent={};
        // if small device, show all BackLeft
        if(matchMedia("(max-width: 60em),(orientation: portrait)").matches === true) {
            listedContent = content.map(
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
        }
        // if large device, show only the one where state.content.show = true
        else {
            const listedContent2 = content.filter(
                (cont => {
                    return cont.show === true;
                })  
            );
            
            listedContent = listedContent2.map(
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

            
        }

        

        return(
            <div className="card__side card__side--back">
                {listedContent}
                <BackRight content={content} updateShow={this.updateShow}/>
                <NavigationButton content={content} />
            </div>
        )
    };

    componentDidMount() {

        const cardContent2 = cardContent.map(
            (cont, i) => {
                if(i===0) {
                    return {...cont, show: true};
                }
                else {
                    return {...cont, show: false};
                }
            }
        );

        this.setState({content: cardContent2});

        const mql = window.matchMedia("(max-width: 60em),(orientation: portrait)");

        mql.addEventListener("change", () => {
            this.forceUpdate();
        });
    }
};

export default PostCardBack;