import React, { Component } from 'react';
import '../../assets/css/main.css';
import '../../assets/css/noscript.css';
import ShowInteractiveExperiences from './Show-Interactive-Experiences/showInteractiveExperiences';

class InteractiveExperiences extends Component {
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
                <section class="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
                    <div class="content">
                        <h2>Interactive Experiences</h2>
                        <p>Participate in interactive activities that put you at the core of your education. Experiences include titration labs,
                        interacative electron models, 3D physics experiments and more.</p>
                        <ul class="actions stacked">
                            <li>
                            <button class="button" onClick={this.toggleOpened}>Learn More</button>
                            </li>
                        </ul>
                    </div>
                    <div class="image">
                        <img src="../../assets/images/spotlight03.png" alt="" />
                        <img src={ require('../../assets/images/spotlight02.png') } styles={{paddingBottom: '8px'}} />
                    </div>
                </section>
                <ShowInteractiveExperiences toggleComp={this.state.isOpened}/>
            </div>
        );
    }
}

export default InteractiveExperiences;
