import React, { Component } from 'react';
import {
    Player, ControlBar, ReplayControl,
    ForwardControl, CurrentTimeDisplay,
    TimeDivider, PlaybackRateMenuButton, VolumeMenuButton
} from 'video-react';
import '../../assets/css/video.css';
import YouTube from 'react-youtube';

const opts = {
    height: '1000',
    width: '1280',
    playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
    }
};

class Solutions extends Component {
    render() {
        return (
            //     <Player
            //     poster="/assets/poster.png"
            //   >
            //     <source src="https://www.youtube.com/watch?v=4PQ0JtkicV8" />

            //     <ControlBar>
            //       <ReplayControl seconds={10} order={1.1} />
            //       <ForwardControl seconds={30} order={1.2} />
            //       <CurrentTimeDisplay order={4.1} />
            //       <TimeDivider order={4.2} />
            //       <PlaybackRateMenuButton
            //         rates={[5, 2, 1, 0.5, 0.1]}
            //         order={7.1}
            //       />
            //       <VolumeMenuButton disabled />
            //     </ControlBar>
            //   </Player>
            <div>
            <div class="center-video">
                <YouTube
                    videoId="4PQ0JtkicV8"
                    opts={opts}
                    onReady={this._onReady}
                />
            </div>
            <div class="center-video">
                <YouTube
                    videoId="7KY7j8ACd30"
                    opts={opts}
                    onReady={this._onReady}
                />
            </div>
            </div>
        );
    }
}

export default Solutions;
