import React from 'react'
import './App.css';
import Navbar from "./components/organisms/Navbar.jsx"
import VideoPlayer from "./components/molecules/VideoPlayer/VideoPlayer.jsx"

const App = () => {
  return (
    <div>
      <Navbar />
      <VideoPlayer />
    </div>
  )
}

export default App;
