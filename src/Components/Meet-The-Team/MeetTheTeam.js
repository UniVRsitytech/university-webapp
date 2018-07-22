import React, { Component } from 'react';
import '../../assets/css/main.css';
import '../../assets/css/noscript.css';


class MeetTheTeam extends Component {
    render() {
        return (
            //     <button className="square" onClick={() => alert('click')}>
            //     {this.props.value}
            //   </button>
            <section class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
            <div class="content">
                <h2>Social Connection</h2>
                <p>UniVRsity values the power of social connectivy and focuses on aplications connecting students to peers, tutors, and
                    teachers to aid them in their educational endeavors.</p>
                <ul class="actions stacked">
                    <li>
                        <a id="button4" class="button">Learn More</a>
                    </li>
                </ul>
            </div>
            <div class="image">
            <img src={ require('../../assets/images/spotlight03.png') } styles={{paddingBottom: '8px'}} />
            </div>
            </section>
        );
    }
}

export default MeetTheTeam;
