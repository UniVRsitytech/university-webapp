import React, { Component } from 'react';
// import '../../assets/css/main.css';
// import '../../assets/css/noscript.css';
import "../../assets/css/App.css"

class Mission extends Component {
    render() {
        return (
            <div id="wrapper" class="divided">
                <section class="banner fullscreen skygradient">
                {/* <section class="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in"> */}
                <div class="content">
                  <h2>About</h2>
                  <p>Participate in interactive activities that put you at the core of your education. Experiences include titration labs,
                        interacative electron models, 3D physics experiments and more.</p>
                  <ul class="actions stacked">
                    <li>
                      <button class="button">Learn More</button>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
        );
    }
}

export default Mission;
