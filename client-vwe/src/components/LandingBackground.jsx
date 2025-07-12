import React from 'react'
import Aurora from './Aurora'
import Threads from './Threads'
import "../styles/LandingStyles.css"

function LandingBackground() {
  return (
      <div className="h-full bg-gray-900 absolute w-screen">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={1}
          amplitude={1.0}
          speed={0.5}
          className="landing-bg_comp"
        />
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} className="landing-bg_comp"/>
      </div>
  )
}

export default LandingBackground