import React, { useRef } from 'react'
import './App.css';
import Navbar from "./components/organisms/Navbar.jsx"

import video from "./assets/video.mp4";
import mute from "./assets/mute.svg"
import unmute from "./assets/unmute.svg"
import play from "./assets/play.svg"
import pause from "./assets/pause.svg"
import useVideoPlayer from "./components/organisms/VideoPlayer.jsx"

const App = () => {
  const videoElement = useRef(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement)

  return (
    <div className="container">
      <div className="video-wrapper">
        <video
          src={video}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        />
        <div className="controls">
          <div className="actions">
            <button onClick={togglePlay}>
              {!playerState.isPlaying ? (
                <img src={play} alt="Play" />
              ) : (
                <img src={pause} alt="Pause" />
              )}
            </button>
          </div>
          <input
          type="range"
          min="0"
          max="100"
          value={playerState.progress}
          onChange={(e) => handleVideoProgress(e)}
          />
          <select
            className="velocity"
            value={playerState.speed}
            onChange={(e) => handleVideoSpeed(e)}
          >
            <option value="0.50">0.50x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="2">2x</option>
          </select>
          <button onClick={toggleMute}>
            {!playerState.isMuted ? (
              <img src={unmute} alt="Unmute" />
            ) : (
              <img src={mute} alt="Mute" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App;
