import React from 'react'
import Projects from './components/projects/projects'
import Footer from './components/footer/footer'
import Intro from './components/intro/intro'
import Skills from './components/skills/skills'
import {BrowserRouter as Main, Route, Routes} from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Intro/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App