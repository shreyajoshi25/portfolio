import React from 'react'
import Projects from './components/projects/projects'
import Footer from './components/footer/footer'
import Intro from './components/intro/intro'
import Skills from './components/skills/skills'
import Navbar from './components/navbar/navbar'
import Contact from './components/contact/contact'
import Exp from './components/exp/exp'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Exp/>
      <Contact/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App