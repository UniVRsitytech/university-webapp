import React, { Component } from 'react';
import {
    Player, ControlBar, ReplayControl,
    ForwardControl, CurrentTimeDisplay,
    TimeDivider, PlaybackRateMenuButton, VolumeMenuButton
} from 'video-react';
import '../../assets/css/video.css';
import '../../assets/css/layout.css';
import '../../assets/css/App.css';

import YouTube from 'react-youtube';
import BioCardAuto from './../Team/BioCardAuto';

const opts = {
    height: '700',
    width: '900',
    playerVars: {
        autoplay: 0
    }
};

class Solutions extends Component {
    render() {
        return (
            <div class="skygradientcontent">
                <section class="spotlight style1">
                    <div class="content">
                        <h2>Interactive Tools</h2>
                        <br />
                        <h5>Whiteboard</h5>
                        <p>Our Solution will allow different users to connect to each other and draw together on the virtual whiteboard
                            in real time. The virtual whiteboard will facilitate learning by using the perks of real life human interaction
                            and applying to a virtual environment for those unable to meet in real life
                </p>
                        <h5>Mobile Application</h5>
                        <p>
                            In addition to the VR application, we will have a mobile app for IOS and Android to allow users to send problems
                            to their session immediately. The application will send images, videos, pdfs, and other forms of media to the
                            current session and store it.
                </p>
                        <h5>Session Recording</h5>
                        <p>
                            During a session, a user will be able to opt in to session recording. If a user opts in for session recording,
                            that learning session will be saved across all platforms (Mobile, Web, Oculus) for the user to playback and
                            review what they had learned.
                </p>
                    </div>
                </section>

                <div class="center">
                    <YouTube
                        videoId="4PQ0JtkicV8"
                        opts={opts}
                    />
                </div>

                <section class="spotlight style1">
                    <div class="content">
                        <h2>Engaging Experiences</h2>
                        <br />
                        <p>
                            In addition to the Interactive tools, UniVRsity will provide various engaging virtual experiences
                </p>
                        <h5>Chemistry Laboratory</h5>
                    </div>
                </section>

                <div class="center">
                    <YouTube
                        videoId="7KY7j8ACd30"
                        opts={opts}
                    // onReady={this._onReady}
                    />
                </div>

                <section class="spotlight style1">
                    <div class="content">
                        <p>
                        There will be many more to come!
                </p>
                    </div>
                </section>
            </div>
        );
    }
}

export default Solutions;
