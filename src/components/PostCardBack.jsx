import React, { Component } from 'react';
import BackRight from './BackRight';
import NavigationButton from './NavigationButton';
import cardContent from '../cardContent';
import Stad from './Stad';
import Church from './Church';
import Venue from './Venue';
import Party from './Party';
import RSVP from './RSVP';



class PostCardBack extends Component {
    constructor() {
        super();
        this.state = {
            content: []
        }
    }

    // for large screens, if a navigation item is clicked, the rest disappears
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

        const Components = {
            stad: Stad,
            church: Church,
            venue: Venue,
            party: Party,
            rsvp: RSVP
        };

        let listedContent={};
        // if small device, show all BackLeft
        if(matchMedia("(max-width: 60em),(orientation: portrait)").matches === true) {
            listedContent = content.map((cont) => {
                return React.createElement(Components[cont.leftContent], {
                    key: cont.id,
                    title: cont.title
                });
            });
        }

        // if large device, show only the one where state.content.show = true
        else {
            const listedContent2 = content.filter(
                (cont => {
                    return cont.show === true;
                })  
            );
            
            listedContent = listedContent2.map(
                (cont) => {
                    return React.createElement(Components[cont.leftContent], {
                        key: cont.id,
                    });
                });
        }


        listedContent = listedContent.map((cont,i) => {
            return(
                <div className="backLeft2"> 
                    {cont}    
                    <div className={`backLeft2__parallax backLeft2__parallax--${i}`}></div> 
                </div>)
        });


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

        const mql = window.matchMedia("screen and (max-width: 60em),(orientation: portrait)");

        mql.addListener(() => {
            console.log("event");
            this.forceUpdate();
        });
    }
};

export default PostCardBack;