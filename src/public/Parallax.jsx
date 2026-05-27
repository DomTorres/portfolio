import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react'

const Parallax = () => {
    const baseUrl = import.meta.env.BASE_URL;
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

  return (
    <div 
        className='w-full h-screen overflow-hidden relative grid place-items-center'
        ref={ref}
    >
      <motion.h1 
        style={{ y: textY }}
        className='absolute top-28 z-10 max-w-[96vw] whitespace-nowrap text-center font-heading text-5xl text-white tracking-tight sm:top-36 sm:text-6xl md:text-7xl lg:top-40 lg:text-8xl xl:text-9xl'>
        Hi! I&apos;m Dom Torres.
      </motion.h1>

      <motion.div 
        className='absolute inset-0 z-0'
        style={{
            y: backgroundY,
            backgroundImage: `url(${baseUrl}vancouver.jpg)`,
            backgroundPosition: 'top',
            backgroundSize: 'cover' 
        }}
      />

      <div 
        className='absolute inset-0 z-20'
        style={{
            backgroundImage: `url(${baseUrl}vancouver-without-bg.png)`,
            backgroundPosition: 'top',
            backgroundSize: 'cover'   
        }}
      />

    </div>
  )
}

export default Parallax
