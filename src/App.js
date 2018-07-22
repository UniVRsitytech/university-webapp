import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mission from './Components/Mission/Mission.js'
import MeetTheTeam from './Components/Meet-The-Team/MeetTheTeam.js'
import VirtualRealityPlatform from './Components/Virutal-Reality-Platform/virtualRealityPlatform';
import InteractiveExperiences from './Components/Interactive-Experiences/interactiveExperiences';

class App extends Component {
  render() {
    const name = 'Josh Perez';
    const element = <h1>Hello, {name}</h1>;
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
    return (
      <div>
        <Mission />
        <VirtualRealityPlatform />
        <InteractiveExperiences />
        <MeetTheTeam />

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
