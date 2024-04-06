import React from 'react'
import "./intro.css";
import Projects from "../projects/projects";
import intro_left from "../../assets/intro_left.png"
import intro_right from "../../assets/intro_right.png"

const Intro = () => {
  return (
    <div className='intro'>
      <div className="left">
        <h1>Hi, I'm Shreya Joshi</h1>
        <div className="edit">
          {/* <img src={intro_left} alt="" /> */}
          <h2>Software & Web Developer. </h2>
          {/* <img src={intro_right} alt="" /> */}
        </div>
      </div>

      <div className="right">
        <img src="" alt="photo" />
      </div>
    </div>
  )
}

export default Intro