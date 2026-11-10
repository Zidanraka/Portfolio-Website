import { useEffect } from 'react'
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Hero, Navbar, Tech, Works } from './components'
import StarsCanvas from './components/canvas/Stars'

const App = () => {
  useEffect(() => {
    // The browser can resolve the fragment before React mounts the sections.
    const anchor = document.getElementById(window.location.hash.slice(1))
    anchor?.scrollIntoView({ behavior: 'instant' })
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <BrowserRouter>
          <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
          </div>
        </BrowserRouter>
      </LazyMotion>
    </MotionConfig>
  )
}

export default App
