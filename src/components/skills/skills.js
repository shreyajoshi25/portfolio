import React from 'react'
import "./skills.css";

const Skills = () => {
  return (
    <div className="skills">
      
      <div className="points">
        <div className="webd top" >
          <span>Web Development</span>
        </div>
        <div className="in">
          <div className="left-in">
            <div className="point">
              <span>HTML</span>
            </div>
          </div>
          <div className="right-in">
            <div className="point">
              <span>CSS3</span>
            </div>
          </div>
        </div>
        <div className="sides">
          <div className="left">
            <div className="point">
              <span>Java</span>
            </div>
            <div className="point">
              <span>MySQL</span>
            </div>
          </div>
          <h1>My Skills</h1>
          <div className="right">
            <div className="point">
              <span>OOPs</span>
            </div>
            <div className="point">
              <span>Python</span>
            </div>
          </div>
        </div>
        <div className="in">
          <div className="left-in">
            <div className="point">
              <span>Javascript</span>
            </div>
          </div>
          <div className="right-in">
            <div className="point">
              <span>Bootstrap</span>
            </div>
          </div>
        </div>

        <div className="bottom point">
          <span>ReactJS</span>
        </div>
      </div>
    </div>
  )
}

export default Skills