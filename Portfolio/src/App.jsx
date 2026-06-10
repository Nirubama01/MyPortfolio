import { Routes, Route } from 'react-router-dom'
import AboutMe from './assets/Pages/AboutMe'
import Resume from './assets/Pages/Resume'
import Projects from './assets/Pages/Projects'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<AboutMe />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
