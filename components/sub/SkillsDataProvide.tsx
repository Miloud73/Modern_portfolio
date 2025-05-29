"use client"
import React from 'react'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import Image from 'next/image'


interface Props{
  src : string,
  width : number,
  height : number,
  index : number,
}
const SkillsDataProvide = (src , width , height , index) => {

  const [ref,InView] = useInView({
    triggerOnce: true
  })

  const imageVariants={
    hidden:{opacity:0},
    visible : {opacity:1}
  }

  const animationDelay = 0.3

  return (
    <motion.div
      ref={ref}
      initial = "hidden"
      variants={imageVariants}
      animate={InView ? "visible":"hidden"}
      custom = {index}
      transition={{delay: index * animationDelay} }
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt="skill images"
      />
      
    </motion.div>
  )
}

export default SkillsDataProvide
