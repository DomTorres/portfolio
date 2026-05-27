import Hero from './public/Hero';
import Projects2 from './public/Projects2';
import Footer from './public/Footer';
import { useEffect } from 'react';
import Parallax from './public/Parallax';
import Lenis from 'lenis';
import Skills from './public/Skills';

function App() {
    useEffect(() => {
        document.title = 'Portfolio | Dom Torres';
      }, []);

      useEffect( () => {
        const lenis = new Lenis()
    
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
    
        }
        requestAnimationFrame(raf)
      }, [])

  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-custom1 selection:text-white'>
        <div className='fixed top-0 -z-10 h-full w-full'></div>
        <Parallax />
        <div className='container mx-auto px-5 sm:px-8'>
            <Hero />
            <Skills />
            <Projects2 />
        </div>
        <Footer />
    </div>
  )
}

export default App
