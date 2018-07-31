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
import { Parallax } from 'react-parallax';

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
  render() {
    //idk what this here is

    // const name = 'Josh Perez';
    // const element = <h1>Hello, {name}</h1>;
    // function Welcome(props) {
    //   return <h1>Hello, {props.name}</h1>;
    // }
    return (
      <div>

        <div>
          <AppBar />
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

        <VirtualRealityPlatform />

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
