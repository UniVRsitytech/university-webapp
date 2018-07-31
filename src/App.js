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

import { render } from "react-dom";
import { create } from "jss";
import JssProvider from "react-jss/lib/JssProvider";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";

const styleNode = document.createComment("insertion-point-jss");
document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = "insertion-point-jss";

class App extends Component {
  render() {
    const name = 'Josh Perez';
    const element = <h1>Hello, {name}</h1>;
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
    return (
      // <JssProvider jss={jss} generateClassName={generateClassName}>
      <div>
        <Mission />
        <VirtualRealityPlatform />
        <InteractiveExperiences />
        <MeetTheTeam />
        <TeamLayout />
        <TestPar />
        <SandboxPar />

        <footer class="wrapper style1 align-center">
          <div class="inner">
            <ul class="icons">
              <li>
                <a href="#" class="icon style2 fa-twitter">
                  <span class="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" class="icon style2 fa-facebook">
                  <span class="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" class="icon style2 fa-instagram">
                  <span class="label">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" class="icon style2 fa-linkedin">
                  <span class="label">LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="#" class="icon style2 fa-envelope">
                  <span class="label">Email</span>
                </a>
              </li>
            </ul>
            <p>UniVRsity Technologies 2018.</p>
          </div>
        </footer>
      </div>
      
    );
  }
}

export default App;
