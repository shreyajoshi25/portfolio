import React from 'react'
import "./resume.css"
const Resume = () => {
  return (
    <div className='resume'>
      <div className="left">
        <h4 className='top'>QUALIFICATIONS</h4>
        <h2>My Education</h2>

        <div className="point">

          <div className="design">
            <div className="bullet">
              <div className="purple"></div>
            </div>
            <div className="line"></div>
          </div>

          <div className="exp">
            <div className="detail">
              <div className="head">
                <h4>IGDTUW, Delhi</h4>
                <span>(08/2021 - Present)</span>
              </div>
              <span>Started as a mentor for a CodeSolstice Mentorship Cohort at Protege, IGDTUW</span>
              <button>B.Tech in ECE-AI</button>
            </div>
          </div>
        </div>

        <div className="point">

          <div className="design">
            <div className="bullet">
              <div className="purple"></div>
            </div>
            <div className="line"></div>
          </div>

          <div className="exp">
            <div className="detail">
              <div className="head">
                <h4>Sneh International School</h4>
                <span>(03/2020 - 05/2021)</span>
              </div>
              <span>Started as a mentor for a CodeSolstice Mentorship Cohort at Protege, IGDTUW</span>
              <button>Senior Secondary School of Education</button>
            </div>
          </div>
        </div>

        <div className="point">

          <div className="design">
            <div className="bullet">
              <div className="purple"></div>
            </div>
            {/* <div className="line"></div> */}
          </div>
            
          
          <div className="exp">
            <div className="detail">
              <div className="head">
                <h4>IGDTUW, Delhi</h4>
                <span>(03/2018 - 05/2019)</span>
              </div>
              <span>Started as a mentor for a CodeSolstice Mentorship Cohort at Protege, IGDTUW</span>
              <button>Secondary School of Education</button>
            </div>
          </div>
        </div>

      </div>

      <div className='right'>
        <h4 className='top'>WORK EXPERIENCE AND MEMBERSHIPS</h4>
        <h2>My Experience</h2>
        <div className="point">

          <div className="design">
            <div className="bullet">
              <div className="purple"></div>
            </div>
            <div className="line"></div>
          </div>


          <div className="exp">
            <div className="detail">
              <div className="head">
                <h4>Protege, IGDTUW</h4>
                <span>(02/2024 - Present)</span>
              </div>
              <span>Started as a mentor for a CodeSolstice Mentorship Cohort at Protege, IGDTUW</span>
              <button>CodeSolstice'24 Mentor</button>
            </div>
          </div>
        </div>

        <div className="point">
          <div className="design">
            <div className="bullet">
              <div className="purple"></div>
            </div>
            <div className="line"></div>
          </div>

          <div className="exp">
            <div className="detail">
              <div className="head">
                <h4>Microsoft Students Chapter, IGDTUW</h4>
                <span>(05/2023 - Present)</span>
              </div>
              <span>Working as a member of the web development team and also as the Social Media Manager of MSC.</span>
              <div className="buttons">
                <button>Social Media Manager</button>
                <button>Web Developer</button>
              </div>
            </div>
          </div>
        </div>


        <div className="point">
          <div className="design">
            <div className="bullet">
              <div className="purple"></div>
            </div>
            <div className="line"></div>
          </div>

          <div className="exp">
            <div className="detail">
              <div className="head">
                <h4>Taarangana, IGDTUW</h4>
                <span>(01/2022 - Present)</span>
              </div>
              <span>Currently serving as a core member of the Event Management team for Taarangana's 2023-2024 session. Previously held roles as Coordinator and Head Coordinator for IGDTUW's cultural fest in 2022, followed by promotion to the Associate position in 2023.</span>
              <button>Event Management CORE</button>
            </div>
          </div>
        </div>

        <div className="point">
          <div className="design">
            <div className="bullet">
              <div className="purple"></div>
            </div>
            <div className="line"></div>
          </div>

          <div className="exp">
            <div className="detail">
              <div className="head">
                <h4>NoQS Digital Pvt. Ltd.</h4>
                <span>(06/2023 - 07/2023)</span>
              </div>
              <span>worked as a web developer intern in NoQS Digital Pvt Ltd for 1.5 months.</span>
              <button>Web Developer Intern</button>
            </div>
          </div>
        </div>

        <div className="point">
          <div className="design">
            <div className="bullet">
              <div className="purple"></div>
            </div>
            {/* <div className="line"></div>  */}
          </div>

          <div className="exp">
            <div className="detail">
              <div className="head">
              <h4>Hypnotics, IGDTUW</h4>
                <span>(09/2022 - 12/2023)</span>
              </div>
              <span>PR head of the Western Dance Society of Indira Gandhi Delhi Technical University for Women.</span>
              <button>PR head</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume