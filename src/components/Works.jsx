import { Tilt } from 'react-tilt'
import { m as motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  const imageSources = Array.isArray(image) ? image : null
  const hasSource = source_code_link && source_code_link !== 'https://github.com/'
  const SourceBadge = hasSource ? 'a' : 'span'
  const sourceProps = hasSource
    ? {
      href: source_code_link,
      target: '_blank',
      rel: 'noopener noreferrer',
      'aria-label': `View ${name} source on GitHub (opens in a new tab)`,
    }
    : { role: 'img', 'aria-label': `Source link unavailable for ${name}` }

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed:450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className="relative w-full h-[230px]">
          <img
            src={imageSources?.[0] ?? image}
            srcSet={imageSources ? `${imageSources[0]} 640w, ${imageSources[1]} 960w` : undefined}
            sizes={imageSources ? '(min-width: 640px) 320px, calc(100vw - 88px)' : undefined}
            alt={name}
            loading="lazy"
            decoding="async"
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <SourceBadge
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center"
              {...sourceProps}
            >
              <img src={github} alt="" loading="lazy" decoding="async" className='w-1/2 h-1/2 object-contain' />
            </SourceBadge>
          </div>
        </div>

        <div className="mt-5">
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          These are my projects that i've been done recently
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")