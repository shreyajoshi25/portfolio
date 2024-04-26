import React from 'react'
import Projects from './components/projects/projects'
import Footer from './components/footer/footer'
import Intro from './components/intro/intro'
import Skills from './components/skills/skills'
import Navbar from './components/navbar/navbar'
import Contact from './components/contact/contact'
import Resume from './components/resume/resume'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'

// const App = () => {
//   return (
//     <BrowserRouter>
//     <Navbar/>
//     <Routes>
//       <Route path='/' element={<Intro/>}/>
//       <Route path='/skills' element={<Skills/>}/>
//       <Route path='/projects' element={<Projects/>}/>
//       <Route path='/resume' element={<Resume/>}/>
//       <Route path='/contact' element={<Contact/>}/>
//     </Routes>
//     <Footer/>
//     </BrowserRouter>

//     // <div className="App">
//     //   <Navbar/>
//     //   <Intro/>
//     //   <Projects/>
//     //   <Resume/>
//     //   <Contact/>
//     //   <Footer/>
//     // </div>

//   )
// }

// export default App


const LandingPage = () => {
  return (
    <div>
      <Intro />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;