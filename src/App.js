import React, { Component } from 'react';
import logo from './logo.svg';
// import './assets/css/App.css';
// import './assets/css/layout.css';
// import './assets/css/filteredmain.css';
import './assets/css/main.css';


import Mission from './Components/Mission/Mission.js'
import MeetTheTeam from './Components/Team/team'
import About from './Components/About/about';
import Solutions from './Components/Solutions/solutions';
import Partners from './Components/Partners/partners';
import TeamLayout from './Components/Team/TeamLayout';
import TestPar from './Components/Parallax/testparallax';
import SandboxPar from './Components/Parallax/sandbox';
import AppBar from './Components/AppBars/MatAppBar';
import Footer from './Components/Footer';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import BootNavBar from './Components/AppBars/BootBar';


import { Parallax } from 'react-parallax';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import theme from "./assets/theme"
// const theme = createMuiTheme();


const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
const insideStyles = { background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' };
// const insideStyles = { background: 'white', transform: 'translate(-50%,-50%)' };
const image1 = require('./assets/images/banner.jpg');
const image2 = require('./assets/images/gouser.jpg');
const image3 = require('./assets/images/team.jpg');
const image4 = require('./assets/images/gouser2.jpg');
const def = require('./assets/images/pic02.jpg');
//read the following for documentation on the Parallax Component
//https://github.com/RRutsche/react-parallax


class App extends Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    // this.state = { counter: 0 };
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function (to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollToBottom() {
    scroll.scrollToBottom();
  }

  scrollTo() {
    scroll.scrollTo(100);
  }

  scrollMore() {
    scroll.scrollMore(100);
  }

  handleSetActive(to) {
    console.log(to);
  }

  render() {
    const titleStyles = { fontFamily: 'sanserif', color: 'white', fontSize: "60pt" };
    const bodyStyles = { fontFamily: 'sanserif', color: 'black', fontSize: "22pt" };


    return (
      <div>
        <MuiThemeProvider theme={theme}>
        
        <AppBar handleSetActive={this.handleSetActive}/>

        {/* <Parallax
          bgImage={image1}
          strength={400}
          blur={2}>
          <div style={{ height: 700 }}>
            <div class="margin-2x">
              <h2>Remote Learning</h2>
              <br />
              <p>Made Easy</p>
            </div>
          </div>
        </Parallax> */}

{/* trying new styling inside the parallax */}
          <Parallax
            bgImage={image1}
            strength={400}
            blur={2}>
            <div style={{ height: 700 }}>
              <section class="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
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
          </Parallax>

        <About />

        <Element name="about" className="element">
        <Parallax bgImage={image2}
          strength={400}>
          <div style={{ height: 700 }}>
            <div class="div-right">
              <p class="margin-2x text-left">Solutions</p>
              <br />
            </div>
          </div>
        </Parallax>
        </Element>

        <Solutions />

        <Element name="solutions" className="element">
        <Parallax bgImage={image4}
          strength={400}>
          <div style={{ height: 700 }} class="margin-2x">
            <div style={titleStyles}>Solutions</div>
            <p style={bodyStyles}>
              Lorem ipsum dolor sit amet, sale repudiandae in mei,<br />
              vis ad suscipit moderatius. moderatius. Mundi primis <br />
              antiopam mel ea. Pro graecis commune cotidieque cu,<br />
              et diceret splendide pro. At nam dicta recusabo <br />
              maiestatis. Ancillae atomorum no nec.
            </p>
          </div>
        </Parallax>
        </Element>

        {/* <HomeDemo /> */}

        {/* <ChemDemo /> */}

        <Element name="partners" className="element">
        <Parallax bgImage={def}
          strength={400}>
          <div style={{ height: 700 }}>
            <div class="div-right">
              <p style={titleStyles} class="margin-2x text-left">Partners</p>
              <br />
              <p style={bodyStyles} class="margin-2x text-left">
                Lorem ipsum dolor sit amet, sale repudiandae in mei,<br />
                vis ad suscipit moderatius. moderatius. Mundi primis <br />
                antiopam mel ea. Pro graecis commune cotidieque cu,<br />
                et diceret splendide pro. At nam dicta recusabo <br />
                maiestatis. Ancillae atomorum no nec.
              </p>
            </div>
          </div>
        </Parallax>
        </Element>

          <Partners />

        <Element name="team" className="element">
        <Parallax bgImage={image3}
          strength={400}
          blur={0}>
          <div style={{ height: 700 }} class="margin-2x">
            <div style={titleStyles}>Meet The Team</div>
            <p style={bodyStyles}>
              Lorem ipsum dolor sit amet, sale repudiandae in mei,<br />
              vis ad suscipit moderatius. moderatius. Mundi primis <br />
              antiopam mel ea. Pro graecis commune cotidieque cu,<br />
              et diceret splendide pro. At nam dicta recusabo <br />
              maiestatis. Ancillae atomorum no nec.
            </p>
          </div>
        </Parallax>
        </Element>

        {/* <MeetTheTeam /> */}
          {/* <TeamLayout /> */}

        <Footer />
        </MuiThemeProvider>
      </div>

    );
  }
}

export default App;
