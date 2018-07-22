import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OurTeam from './ourTeam/OurTeam.js'

class App extends Component {
  render() {
    const name = 'Josh Perez';
    const element = <h1>Hello, {name}</h1>;
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
    return (
      <div>
        {/* {element}
        <Welcome name="Frank"/> */}
        <OurTeam/>
      </div>

      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>

    //  <body class="is-preload">
    //     <div id="wrapper" class="divided">
    //       <section class="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
    //         <div class="content">
    //           <img src="images/logo.png" alt="" style="padding-bottom:8px" />
    //           <h1 style="padding-bottom:8px">"Learning as an experience"</h1>
    //           <ul class="actions stacked">
    //             <li>
    //               <a id="button1" class="button big wide smooth-scroll-middle">Learn more</a>
    //             </li>
    //           </ul>
    //         </div>
    //         <div class="image">
    //           <img src="images/banner.jpg" alt="" />
    //         </div>
    //       </section>
    //     </div>
    //   </body>
    );
  }
}

export default App;
