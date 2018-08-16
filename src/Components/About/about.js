import React, { Component } from 'react';
// import '../../assets/css/main.css';
// import '../../assets/css/noscript.css';
import "../../assets/css/App.css"
import "../../assets/css/layout.css"

class About extends Component {
    render() {
        return (
            <div>
                <section class="spotlight style1 skygradient">
                    <div class="content">
                        <h2>About Us</h2>
                        When students and tutors are forced to choose between in-person vs online tutoring they have to choose between cost vs. value.
                        But through Virtual Reality, tutoring will be both affordable and engaging. <br />
                        <br />
                        We at UniVRsity are developing the first VR tutoring application where students and
                        tutors can meet in a common room and engage in content using our interactive tools and experiences.<br />
                        <br />
                        <h2>Time Line</h2>
                        <br/>
                        <img src={require('./../../assets/images/timeline.png')} class="timeline center" />
                    </div>
                </section>
            </div>
        );
    }
}

export default About;
