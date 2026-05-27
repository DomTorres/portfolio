const skillGroups = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C'],
  },
  {
    category: 'Web Frameworks',
    skills: ['Node.js', 'Spring Boot', 'React'],
  },
  {
    category: 'Cloud and Infrastructure',
    skills: ['Azure', 'Docker', 'Kubernetes', 'Helm', 'ArgoCD', 'Entra', 'Intune', 'Microsoft 365'],
  },
  {
    category: 'Operating Systems',
    skills: ['Linux (Ubuntu)', 'Windows', 'macOS'],
  },
  {
    category: 'Machine Learning',
    skills: ['PyTorch', 'TensorFlow', 'MLflow', 'Apache Spark'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Firestore'],
  },
  {
    category: 'Testing and Tooling',
    skills: ['JUnit', 'Jest', 'Git', 'GitHub Actions'],
  },
]

const Skills = () => {
  return (
    <section className='mt-10'>
      <h1 className='my-12 font-heading text-5xl text-black tracking-tight sm:my-16 sm:text-7xl lg:text-8xl'>Skills</h1>
      <div className='space-y-8 sm:space-y-10'>
        {skillGroups.map((group) => (
          <div key={group.category} className='grid gap-4 sm:grid-cols-[minmax(12rem,16rem)_1fr] sm:items-start'>
            <h2 className='font-heading text-2xl text-black tracking-tight sm:text-3xl'>
              {group.category}
            </h2>
            <div className='flex flex-wrap gap-3 sm:gap-4'>
              {group.skills.map((skill) => (
                <div
                  key={skill}
                  className='max-w-full break-words px-4 py-2 font-heading text-lg text-black tracking-tight shadow-lg shadow-black/15 transition-colors sm:px-6 sm:text-2xl'
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
