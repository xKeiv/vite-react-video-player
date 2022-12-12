import React, { useState } from 'react'
import './VideoProgress.css' 

const VideoProgress = (props) => {
    const {handleVideoProgress, progress} = props;

  return (
    <input
      type="range"
      min="0"
      max="100"
      value={progress}
      onChange={(e) => handleVideoProgress(e)}
      />
  )
}

export default VideoProgress