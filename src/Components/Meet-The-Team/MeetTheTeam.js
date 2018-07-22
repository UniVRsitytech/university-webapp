import React, { Component } from 'react';
import '../../assets/css/main.css';
import '../../assets/css/noscript.css';
import ShowTheTeam from './Show-The-Team/showTheTeam';


class MeetTheTeam extends Component {
    constructor() {
        super();
        this.state = {
            isOpened : false,
        };
        this.toggleOpened = this.toggleOpened.bind(this);   
    }
    toggleOpened() {
        this.setState({
            isOpened : !this.state.isOpened
        })
        console.log(this.state.isOpened);
    }

    render() { 
        return (
        <div>
            <section class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
            <div class="content">
                <h2>Social Connection</h2>
                <p>UniVRsity values the power of social connectivy and focuses on aplications connecting students to peers, tutors, and
                    teachers to aid them in their educational endeavors.</p>
                <ul class="actions stacked">
                    <li>
                        {/* <a id="button4" class="button" onClick>Learn More</a> */}
                        <button class="button" onClick={this.toggleOpened}>Learn More</button>
                    </li>
                </ul>
            </div>
            <div class="image">
            <img src={ require('../../assets/images/spotlight03.png') } styles={{paddingBottom: '8px'}} />
            </div>
            </section>
            <ShowTheTeam toggleComp={this.state.isOpened}/>
        </div>
          
        );
    }
}

export default MeetTheTeam;
