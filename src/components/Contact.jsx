import { useState, useRef } from 'react'
import { m as motion } from 'framer-motion'
import { styles } from '../styles'
import EarthCanvas from './canvas/Earth'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const emptyForm = { name: '', email: '', message: '' }
const feedback = {
  success: 'Thank you! Your message was sent.',
  error: 'Your message could not be sent. Please try again.',
}

const Contact = () => {
  const submitting = useRef(false)
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('idle')
  const loading = status === 'sending'

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (submitting.current) return

    submitting.current = true
    setStatus('sending')

    try {
      const { default: emailjs } = await import('@emailjs/browser')
      await emailjs.send(
        'service_z5nd1ki',
        'template_mqphimn',
        {
          from_name: form.name,
          to_name: 'Zidan',
          from_email: form.email,
          reply_to: form.email,
          to_email: 'zidanraka99@gmail.com',
          message: form.message,
        },
        { publicKey: 'PG1ObxrlGu9mUz55r' }
      )
      setForm(emptyForm)
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      submitting.current = false
    }
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn("left", "between", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
        <form onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
              type="text" 
              name="name"
              required
              value={form.name} 
              onChange={handleChange} 
              placeholder="What's your Name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
              type="email" 
              name="email"
              required
              value={form.email} 
              onChange={handleChange} 
              placeholder="What's your Email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Message</span>
            <textarea
              rows="7"  
              name="message"
              required
              value={form.message} 
              onChange={handleChange} 
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' 
            />
          </label>

          <div>
            <button type='submit' disabled={loading} className='bg-tertiary py-3 px-8 w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
              {loading ? 'Sending...' : 'Send'}
            </button>
            <p role="status" className="mt-3 text-sm text-secondary empty:mt-0">
              {feedback[status]}
            </p>
          </div>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "between", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")