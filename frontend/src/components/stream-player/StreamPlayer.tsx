import YouTube from 'react-youtube';
import React, { Component } from 'react';
import './StreamPlayer.css';

class StreamPlayer extends Component {
    _onReady: any;

    render() {
        const opts = {
            height: '675',
            width: '1200',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        return (
            <div className="stream-container">
                <YouTube
                    containerClassName="stream-player"
                    videoId="c7SoIr0I2Qg"
                    opts={opts}
                    onReady={this._onReady}
                />
            </div>
        );
    }
}

export default StreamPlayer;