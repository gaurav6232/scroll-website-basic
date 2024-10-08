import { motion } from 'framer-motion'
import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-screen bg-slate-950 relative'>
<motion.div 
  initial="hidden"
  whileInView="visible"
  viewport={{once: true}}
  transition={{duration: 1.5}}
  variants={{
    visible: {opacity: 1, scale: 1,}, 
    hidden: {opacity: 0, scale: 0, }
  }}
  className='w-[100vw] h-[100vh] bg-gray-50  absolute'>
</motion.div>
    </div>
  )
}

export default Home
