import React from 'react'
import "./skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <h1>My Skills</h1>
      <div className="points">
        <div className="webd left" >
          <span>Web Development</span>
        </div>
        <div className="point right">
          <span>Java</span>
        </div>
        <div className="point left">
          <span>DBMS</span>
        </div>
        <div className="point right">
          <span>OOPs</span>
        </div>
        <div className="point left">
          <span>Python</span>
        </div>
        <div className="point right">
          <span>ReactJS</span>
        </div>
      </div>
    </div>
  )
}

export default Skills