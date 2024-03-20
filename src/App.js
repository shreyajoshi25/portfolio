import React from 'react'
import Projects from './components/projects/projects'
import Footer from './components/footer/footer'
import Intro from './components/intro/intro'
import Skills from './components/skills/skills'
import Navbar from './components/navbar/navbar'
import Contact from './components/contact/contact'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App