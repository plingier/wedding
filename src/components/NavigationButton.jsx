import React, { Component } from 'react';
import NavigationList from "./NavigationList";


class NavigationButton extends Component {

    constructor() {
        super();

        this.state = {
            buttonChecked: false,
        };
    }


    updateButtonChecked = () => {
        this.state.buttonChecked === true ?
        this.setState({buttonChecked : false}) :
        this.setState({buttonChecked : true});
    };


    render() {

        const { content } = this.props;

        return (
            <div className="navigation">
                <input type="checkbox" 
                    className="navigation__checkbox" 
                    id="navi-toggle" 
                    checked={this.state.buttonChecked}
                    onChange={this.updateButtonChecked}></input>
                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>

                <div className="navigation__background">
                    &nbsp;
                </div>
                
                <nav className="navigation__nav">
                    <NavigationList content={content} updateButtonChecked={this.updateButtonChecked}/>
                </nav>
            </div>
        );
    }
};

export default NavigationButton;