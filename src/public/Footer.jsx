export default function Footer() {

  return (
    <div 
      className='relative h-[320px] bg-gradient-to-r from-custom1 via-custom2 to-custom3 sm:h-[350px]'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
        <div className='fixed bottom-5 w-full'>
            <div className='mx-5'>
                <a href='mailto:neildominictorres@gmail.com' className='block font-heading text-xl text-white tracking-tight sm:text-2xl'>Email</a>
                <a href='https://www.linkedin.com/in/neil-dominic-torres/' target='_blank' rel='noreferrer' className='block font-heading text-xl text-white tracking-tight sm:text-2xl'>LinkedIn</a>
                <a href='https://github.com/DomTorres' target='_blank' rel='noreferrer' className='mb-8 block font-heading text-xl text-white tracking-tight sm:mb-10 sm:text-2xl'>GitHub</a>
                <div className='flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
                    <h1 className='font-heading text-5xl text-white tracking-tight sm:text-7xl lg:text-8xl'>Let&apos;s get in touch!</h1>
                    <div className='max-w-sm font-heading text-sm text-white tracking-tight sm:text-md'>This website was made with React, Tailwind, and FramerMotion.</div>
                </div>
            </div>
        </div>
    </div>

  )
}
