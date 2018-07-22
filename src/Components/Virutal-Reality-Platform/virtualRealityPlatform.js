import React, { Component } from 'react';
import '../../assets/css/main.css';
import '../../assets/css/noscript.css';


class VirtualRealityPlatform extends Component {
    render() {
        return (
            <section class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" id="first">
                <div class="content">
                    <h2>Virtual Reality Platform</h2>
                    <p>UniVRsity offers a virtual reality platform that provides an engaging experience not commonly found in other online educational
                        services
				</p>
                    <ul class="actions stacked">
                        <li>
                            <a id="button2" class="button">Learn More</a>
                        </li>
                    </ul>
                </div>
                <div class="image">
                    <img src={ require('../../assets/images/spotlight01.png') } styles={{paddingBottom: '8px'}} />
                </div>
            </section>
        );
    }
}

export default VirtualRealityPlatform;
