import React, { Component } from 'react';
import '../../assets/css/main.css';
import '../../assets/css/noscript.css';
import ShowVRPlatform from './Show-Virtual-Reality-Platform/showVRPlatform';

class VirtualRealityPlatform extends Component {
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
                <section class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" id="first">
                    <div class="content">
                        <h2>Virtual Reality Platform</h2>
                        <p>UniVRsity offers a virtual reality platform that provides an engaging experience not commonly found in other online educational
                            services
                    </p>
                        <ul class="actions stacked">
                            <li>
                                <button class="button" onClick={this.toggleOpened}>Learn More</button>
                            </li>
                        </ul>
                    </div>
                    <div class="image">
                        <img src={ require('../../assets/images/spotlight01.png') } styles={{paddingBottom: '8px'}} />
                    </div>
                </section>
                <ShowVRPlatform toggleComp={this.state.isOpened}/>
            </div>
        );
    }
}

export default VirtualRealityPlatform;
