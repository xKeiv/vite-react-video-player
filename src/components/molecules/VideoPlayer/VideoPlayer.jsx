import React, { useRef } from 'react'

import "./VideoPlayer.css"

import video  from "../../../assets/video.mp4";
import mute from "../../../assets/mute.svg"
import unmute from "../../../assets/unmute.svg"
import play from "../../../assets/play.svg"
import pause from "../../../assets/pause.svg"

import useVideoPlayer from "../../hooks/useVideoPlayer.hook.jsx"
import VideoProgress from "../../atoms/VideoProgress/VideoProgress.jsx"

const VideoPlayer = () => {

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
    <div className="video-wrapper">
    <video
      src={video}
      ref={videoElement}
      onTimeUpdate={handleOnTimeUpdate}
    />
    <div className="controls">
    <VideoProgress handleVideoProgress={handleVideoProgress} progress={playerState.progress}/>
      <div className="actions">
        <button onClick={togglePlay}>
          {!playerState.isPlaying ? (
            <img src={play} alt="Play" />
          ) : (
            <img src={pause} alt="Pause" />
          )}
        </button>
      </div>
      {/* Progress BARR HERE */}
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
  )
}

export default VideoPlayer