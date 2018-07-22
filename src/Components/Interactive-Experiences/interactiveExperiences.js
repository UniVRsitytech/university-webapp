import React, { Component } from 'react';
import '../../assets/css/main.css';
import '../../assets/css/noscript.css';


class InteractiveExperiences extends Component {
    render() {
        return (
            <section class="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
                <div class="content">
                    <h2>Interactive Experiences</h2>
                    <p>Participate in interactive activities that put you at the core of your education. Experiences include titration labs,
					interacative electron models, 3D physics experiments and more.</p>
                    <ul class="actions stacked">
                        <li>
                            <a id="button3" class="button">Learn More</a>
                        </li>
                    </ul>
                </div>
                <div class="image">
                    <img src="../../assets/images/spotlight03.png" alt="" />
                    <img src={ require('../../assets/images/spotlight02.png') } styles={{paddingBottom: '8px'}} />
                </div>
            </section>
        );
    }
}

export default InteractiveExperiences;
