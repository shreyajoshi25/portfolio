import React from 'react'
import Projects from './components/projects/projects'
import Footer from './components/footer/footer'
import Intro from './components/intro/intro'

const App = () => {
  return (
    <div>
      <Intro/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App