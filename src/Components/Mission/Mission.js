import React, { Component } from 'react';
import '../../assets/css/main.css';
import '../../assets/css/noscript.css';
import ShowMission from './Show-Mission/showMission';

class Mission extends Component {
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
            <div id="wrapper" class="divided">
                <section class="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
                    <div class="content">
                        {/* <img src="../images/logo.png" alt="" styles={{paddingBottom: '8px'}} /> */}
                        <img src={ require('../../assets/images/logo.png') } styles={{paddingBottom: '8px'}} />
                        <h1 styles={{paddingBottom:'8px'}}>"Learning as an experience"</h1>
                        <ul class="actions stacked">
                            <li>
                                <button class="button" onClick={this.toggleOpened}>Learn More</button>
                            </li>
                        </ul>
                    </div>
                    <div class="image">
                        {/* <img src="../images/banner.jpg" alt="" /> */}
                        <img src={ require('../../assets/images/banner.jpg') } />
                    </div>
                </section>
                <ShowMission toggleComp={this.state.isOpened}/>
            </div>
        );
    }
}

export default Mission;
