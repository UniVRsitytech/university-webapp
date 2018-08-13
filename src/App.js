import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/css/App.css';
import './assets/css/layout.css';
import Mission from './Components/Mission/Mission.js'
import MeetTheTeam from './Components/Team/team'
import About from './Components/About/about';
import Solutions from './Components/Solutions/solutions';
import Partners from './Components/Partners/partners';
import TeamLayout from './Components/Team/TeamLayout';
import TestPar from './Components/Parallax/testparallax';
import SandboxPar from './Components/Parallax/sandbox';
import AppBar from './Components/AppBars/ScrollAppBar';
import Footer from './Components/Footer';
import Button from '@material-ui/core/Button';

import { Parallax } from 'react-parallax';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

//ignore, this is stuff I'm playing with for Material-UI override
// import { render } from "react-dom";
// import { create } from "jss";
// import JssProvider from "react-jss/lib/JssProvider";
// import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";

// const styleNode = document.createComment("insertion-point-jss");
// document.head.insertBefore(styleNode, document.head.firstChild);

// const generateClassName = createGenerateClassName();
// const jss = create(jssPreset());
// jss.options.insertionPoint = "insertion-point-jss";

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
    const bodyStyles = { fontFamily: 'sanserif', color: 'white', fontSize: "22pt" };


    return (
      <div>
        <link rel="stylesheet" href="https://video-react.github.io/assets/video-react.css" />
        <AppBar />
        <div>
          <Link activeClass="active" to="test" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
            <Button>
              Scroll Down
            </Button>
          </Link>
        </div>

        <Parallax
          bgImage={image1}
          strength={400}
          blur={2}>
          <div style={{ height: 700 }}>
            <div style={titleStyles} class="margin-2x">
              Remote Learning
              <br />
              Made Easy
            </div>
          </div>
        </Parallax>

        <Mission />

        <Parallax bgImage={image2}
          strength={400}>
          <div style={{ height: 700 }}>
            <div class="div-right">
              <p style={titleStyles} class="margin-2x text-left">About</p>
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

        <About />

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

        <Solutions />

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

        <Element name="test" className="element">
          <Partners />
        </Element>

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

        <MeetTheTeam />
        <TeamLayout />

        <Footer />
      </div>

    );
  }
}

export default App;
