import profile from '../assets/profile.jpg'

const Hero = () => {
  return (
    <div className='mt-16 sm:mt-28'>
        <h1 className='font-heading text-5xl text-black tracking-tight sm:text-7xl lg:text-8xl'>About Me</h1>
        <div className='mt-10 grid gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-24'>
            <div className='flex flex-col justify-center'>
                <div className='font-heading mb-4 text-xl text-black tracking-tight sm:text-2xl sm:text-justify'>
                    I&apos;m Dom Torres, a Computer Systems Technology graduate at the
                    British Columbia Institute of Technology specializing in Predictive Analytics.
                </div>
                <div className='font-heading mb-4 text-xl text-black tracking-tight sm:text-2xl sm:text-justify'>
                    Through my co-op at Ideon Technologies and project work, I&apos;ve worked across
                    web development, system administration, cloud infrastructure, and machine learning.
                </div>
                <div className='font-heading my-10 text-xl text-black tracking-tight sm:my-20 sm:text-2xl'>
                    Vancouver, B.C.
                </div>
            </div>
            <div className='flex justify-center lg:justify-end'>
                <div className='aspect-[4/5] w-full max-w-xs overflow-hidden shadow-lg shadow-black/15 sm:max-w-sm'>
                    <img 
                        src={profile}
                        alt="Dom looking handsome"
                        className="h-full w-full object-cover object-[65%_42%]"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
