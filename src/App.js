import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mission from './Components/Mission/Mission.js'
import MeetTheTeam from './Components/Meet-The-Team/MeetTheTeam.js'
import VirtualRealityPlatform from './Components/Virutal-Reality-Platform/virtualRealityPlatform';
import InteractiveExperiences from './Components/Interactive-Experiences/interactiveExperiences';
import TeamLayout from './Components/Meet-The-Team/TeamLayout'
import TestPar from './Components/Parallax/testparallax'
import SandboxPar from './Components/Parallax/sandbox'
import AppBar from './Components/ScrollAppBar'
import Footer from './Components/Footer'
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
const image1 = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image2 = "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image3 = "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";

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

    return (
      <div>

        <div>
          <AppBar />
          <Link activeClass="active" to="test" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
            <Button>
              Scroll Down
            </Button>
          </Link>
        </div>

        <Parallax bgImage={image1}
          strength={500}>
          <div style={{ height: 500 }}>
            <div style={insideStyles}>HTML inside the parallax</div>
          </div>
        </Parallax>

        <Mission />

        <Parallax bgImage={image1}
          strength={500}>
          <div style={{ height: 500 }}>
            <div style={insideStyles}>HTML inside the parallax</div>
          </div>
        </Parallax>

        <Element name="test" className="element">
          <VirtualRealityPlatform />
        </Element>
        <Parallax bgImage={image1}
          strength={500}>
          <div style={{ height: 500 }}>
            <div style={insideStyles}>HTML inside the parallax</div>
          </div>
        </Parallax>
        <InteractiveExperiences />

        <Parallax bgImage={image1}
          strength={500}>
          <div style={{ height: 500 }}>
            <div style={insideStyles}>HTML inside the parallax</div>
          </div>
        </Parallax>

        <MeetTheTeam />

        <Parallax bgImage={image1}
          strength={500}>
          <div style={{ height: 500 }}>
            <div style={insideStyles}>HTML inside the parallax</div>
          </div>
        </Parallax>

        <TeamLayout />

        <Footer />
      </div>

    );
  }
}

export default App;
