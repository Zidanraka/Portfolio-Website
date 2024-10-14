import { motion } from 'framer-motion'
import { styles } from '../styles'
import { TypeAnimation } from 'react-type-animation'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-100 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, i'm <span className='text-[#915eff]'>Zidan</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <TypeAnimation
              sequence={[
                  'I am a Web Developer',
                  3000,
                  'I am a UI/UX Designer',
                  3000,
                  'I am a Database Engineer',
                  3000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          {/* <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.dev 
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
          </div> */}
        </a>
      </div>
    </section>
  )
}

export default Hero