import React from 'react'
import "./intro.css";

const Intro = () => {
  return (
    <div className='intro'>
      <div className="left">
        <h1>Hi, I'm Shreya Joshi</h1>
        <h2>A Software Developer, Upcoming SDE Summer Intern at Amazon </h2>
      </div>


      <div className='right'>
        <div className="exp">
          <div className="date">
            <span>02/2024 - Present</span>
          </div>
          <div className="detail">
            <h4>CodeSolstice'24 Mentor</h4>
            <h5>Protege, IGDTUW</h5>
            <span>Started as a mentor for a CodeSolstice Mentorship Cohort at Protege, IGDTUW</span>
          </div>
        </div>

        <div className="exp">
          <div className="date">
            <span>05/2023 - Present</span>
          </div>
          <div className="detail">
            <h4>Social Media Manager and Web Development Team</h4>
            <h5>Microsoft Students Chapter, IGDTUW</h5>
            <span>Working as a member of the web development team and also as the Social Media Manager of MSC.</span>
          </div>
        </div>


        <div className="exp">
          <div className="date">
            <span>01/2022 - Present</span>
          </div>
          <div className="detail">
            <h4>Event Management CORE</h4>
            <h5>Taarangana, IGDTUW</h5>
            <span>Currently serving as a core member of the Event Management team for Taarangana's 2023-2024 session. Previously held roles as Coordinator and Head Coordinator for IGDTUW's cultural fest in 2022, followed by promotion to the Associate position in 2023.</span>
          </div>
        </div>


        <div className="exp">
          <div className="date">
            <span>06/2023 - 07/2023</span>
          </div>
          <div className="detail">
            <h4>Web Developer Intern</h4>
            <h5>NoQS Digital Pvt. Ltd.</h5>
            <span>worked as a web developer intern in NoQS Digital Pvt Ltd for 1.5 months.</span>
          </div>
        </div>


        <div className="exp">
          <div className="date">
            <span>09/2022 - 12/2023</span>
          </div>
          <div className="detail">
            <h4>PR HEAD</h4>
            <h5>Hypnotics, IGDTUW</h5>
            <span>PR head of the Western Dance Society of Indira Gandhi Delhi Technical University for Women.</span>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Intro