import React from 'react'
import "./intro.css";
import Projects from "../projects/projects";
import intro_left from "../../assets/intro_left.png"
import intro_right from "../../assets/intro_right.png"

const Intro = () => {
  return (
    <div className='intro'>
      <div className="left">
        <h3>Hello, </h3>
        <h1>I'm Shreya Joshi</h1>
        <div className="edit">
          {/* <img src={intro_left} alt="" /> */}
          <h2>Software & Web Developer. </h2>
        </div>
        <span>Specializing in software and web development with a growing skill set and passionate about innovative solutions and problem-solving.</span>

        <button>Download Resume</button>
      </div>

      <div className="right">
        <img src="" alt="photo" />
      </div>
    </div>
  )
}

export default Intro