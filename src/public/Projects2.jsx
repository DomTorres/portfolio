import { useState } from 'react'
import sar_1 from '../assets/sar_1.png'
import sar_2 from '../assets/sar_2.png'
import abckidz_1 from '../assets/abckidz_1.png'
import abckidz_2 from '../assets/abckidz_2.png'
import abckidz_3 from '../assets/abckidz_3.png'
import newsolingodemo from '../assets/newsolingodemo.png'
import binarydemo from '../assets/binarydemo.png'
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Strait of Georgia Currents Prediction Tool',
    link: 'https://domtorres.github.io/vitforecaster/',
    images: [
      {
        src: sar_1,
        alt: 'Strait of Georgia Currents Prediction Tool - Current Visualization',
      },
      {
        src: sar_2,
        alt: 'Team Photo at Ocean Hackathon 2025 in Brest, France',
      },
    ],
    descriptions: [
      'Built an application for Search and Rescue teams to visualize present and predicted ocean currents in the Strait of Georgia.',
      'Trained a six-hour prediction model on 43,807 HF-radar records from Ocean Networks Canada, spanning approximately five years of current data.',
      'The model used a Vision Transformer and Autoencoder architecture, improving prediction accuracy by 47.4% over persistence.',
      'Hosted the model with Docker on Hugging Face Spaces and exposed inference through a REST API. The project won 1st place in the Victoria, BC regional qualifier and 2nd place at the international final in Brest, France.',
    ],
    technologies: ['PyTorch', 'Machine Learning', 'Docker', 'Data Analysis', 'Numpy', 'Python', 'FastAPI'],
  },
  {
    title: 'ABCKidz',
    // subtitle: 'Projects 3 Course | Jan - April 2026',
    link: 'https://www.abckidz.org',
    images: [
      {
        src: abckidz_1,
        alt: 'ABCKidz Home Page',
      },
      {
        src: abckidz_2,
        alt: 'ABCKidz Media Hub',
      },
      {
        src: abckidz_3,
        alt: 'ABCKidz Course Management Page',
      },
    ],
    descriptions: [
      'ABCKidz is a full-stack educational platform built for a nonprofit organization to deliver structured multimedia course content to young learners.',
      'Our team developed the platform using Node.js and TypeScript, with authentication and authorization powered by Clerk to secure access to videos, PDFs, and slide-based learning materials.',
      'The application was deployed and monitored on Microsoft Azure using Azure Web Apps, PostgreSQL, and Blob Storage integrations.',
    ],
    technologies: ['Node.js', 'TypeScript', 'Clerk', 'Azure Web Apps', 'PostgreSQL', 'Blob Storage'],
  },
  {
    title: 'Newsolingo',
    link: 'https://github.com/DomTorres/Newsolingo',
    images: [
      {
        src: newsolingodemo,
        alt: 'Newsolingo demo',
      },
    ],
    descriptions: [
      'Newsolingo is a web application that gamifies news reading and encourages users to know more about the world.',
      'Users receive curated world news that they read to fulfill their daily goal. A daily streak encourages users to build a news-reading habit. Users may also check out other world news through an interactive map.',
      'The app was built using HTML/CSS, JavaScript, Bootstrap, and Google Firebase. The project was done in sprints with weekly scrum sessions between the developers.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Firestore', 'Firebase'],
  },
  {
    title: 'Binary',
    link: 'https://github.com/clam920/Binary',
    images: [
      {
        src: binarydemo,
        alt: 'Binary demo',
      },
    ],
    descriptions: [
      "Binary (pronounced bin-ary) is a full-stack web application that scans and classifies users' waste and tracks waste habits.",
      'Users take a picture of their waste, and the app tells which bin it belongs to. Users can also see their waste habits, read info on household waste management, and find the nearest recycling centres nearby.',
      'A machine learning model was trained to classify images of household waste using TensorFlow and the Keras ResNet101v2 model.',
      'The app was built using HTML/CSS, JavaScript, Node.js, MongoDB, and Cloudinary. The developers held scrum sessions with a product manager to discuss feature progress and roadblocks.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'TensorFlow', 'Python', 'MongoDB', 'Cloudinary'],
  },
]

const renderProjectLink = (link) => {
  if (!link) {
    return null
  }

  return (
    <a
      href={link}
      target='_blank'
      rel='noreferrer'
      aria-label='Open project link'
      className='grid h-10 w-10 shrink-0 place-items-center text-black transition-colors hover:text-custom1'
    >
      <FaExternalLinkAlt />
    </a>
  )
}

const renderProjectHeader = (project) => (
  <div className='mt-8 mb-3 w-full sm:mt-10'>
    <div className='flex items-start justify-between gap-3'>
      <div className='min-w-0'>
        <h2 className='font-heading text-2xl text-black tracking-tight sm:text-4xl lg:text-5xl'>
          {project.title}
        </h2>
        {/* {project.subtitle && (
          <p className='mt-2 font-heading text-base text-black/70 tracking-tight sm:text-xl'>
            {project.subtitle}
          </p>
        )} */}
      </div>
      {renderProjectLink(project.link)}
    </div>
  </div>
)

const renderProjectImages = (project, currentIndex, onPrevious, onNext, onSelect) => {
  if (!project.images?.length) {
    return null
  }

  const activeImage = project.images[currentIndex] || project.images[0]
  const hasMultipleImages = project.images.length > 1

  return (
    <div className='mt-8 sm:mx-4 sm:mt-10 xl:mx-10'>
      <div className='aspect-video overflow-hidden shadow-lg shadow-black/15'>
        <img
          src={activeImage.src}
          alt={activeImage.alt}
          className='block h-full w-full object-cover object-top'
        />
      </div>

      {hasMultipleImages && (
        <div className='mt-4 flex items-center justify-center gap-3 sm:gap-4'>
          <button
            type='button'
            onClick={onPrevious}
            className='grid h-10 w-10 shrink-0 place-items-center text-black shadow-lg shadow-black/15 transition-colors hover:text-custom1'
            aria-label={`Show previous image for ${project.title}`}
          >
            <FaChevronLeft />
          </button>

          <div className='flex flex-wrap items-center justify-center gap-2'>
            {project.images.map((image, index) => (
              <button
                key={image.src}
                type='button'
                onClick={() => onSelect(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-black' : 'bg-black/25 hover:bg-black/50'
                }`}
                aria-label={`Show image ${index + 1} for ${project.title}`}
              />
            ))}
          </div>

          <button
            type='button'
            onClick={onNext}
            className='grid h-10 w-10 shrink-0 place-items-center text-black shadow-lg shadow-black/15 transition-colors hover:text-custom1'
            aria-label={`Show next image for ${project.title}`}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  )
}

const renderProject = (project, currentIndex, onPrevious, onNext, onSelect) => (
  <article className='mb-12 flex h-full min-w-0 flex-col sm:mb-16'>
    {renderProjectImages(project, currentIndex, onPrevious, onNext, onSelect)}

    {renderProjectHeader(project)}

    <div className='flex flex-1 flex-col'>
      {project.descriptions.map((description) => (
        <p
          key={description}
          className='font-heading mb-4 text-lg text-black tracking-tight sm:text-justify sm:text-xl xl:text-2xl'
        >
          {description}
        </p>
      ))}
    </div>

    <div className='mt-6 flex flex-wrap justify-start gap-2 sm:mt-8'>
      {project.technologies.map((tech) => (
        <span key={tech} className='max-w-full break-words px-2 py-1 text-sm font-medium text-black shadow-lg shadow-black/15'>
          {tech}
        </span>
      ))}
    </div>
  </article>
)

const Projects2 = () => {
  const [slideIndexes, setSlideIndexes] = useState({})

  const setProjectSlide = (projectTitle, updateIndex) => {
    const project = projects.find(({ title }) => title === projectTitle)
    const imageCount = project?.images?.length || 0

    if (imageCount < 2) {
      return
    }

    setSlideIndexes((currentIndexes) => {
      const currentIndex = currentIndexes[projectTitle] || 0
      const nextIndex = typeof updateIndex === 'function'
        ? updateIndex(currentIndex, imageCount)
        : updateIndex

      return {
        ...currentIndexes,
        [projectTitle]: (nextIndex + imageCount) % imageCount,
      }
    })
  }

  return (
    <div className='my-20 px-0 sm:my-32 sm:px-4'>
      <h1 className='font-heading my-12 text-center text-5xl text-black tracking-tight sm:my-16 sm:text-left sm:text-7xl lg:text-8xl'>
        Projects
      </h1>
      <div className='grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-20 xl:gap-x-28'>
        {projects.map((project) => {
          const currentIndex = slideIndexes[project.title] || 0

          return (
            <div key={project.title}>
              {renderProject(
                project,
                currentIndex,
                () => setProjectSlide(project.title, (index) => index - 1),
                () => setProjectSlide(project.title, (index) => index + 1),
                (index) => setProjectSlide(project.title, index),
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects2
