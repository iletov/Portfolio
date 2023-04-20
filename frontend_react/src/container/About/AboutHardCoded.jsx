import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './About.scss';


const abouts = [
  {title: 'Web Development', description: 'I am a web developer', imgUrl: images.about01},
  {title: 'Front-End', description: 'React Developer', imgUrl: images.about02},
  {title: 'Python', description: 'Python and Django', imgUrl: images.about03},
]

const About = () => {

  return (
    <>
      <h2 className='head-text'>
        I know That <span>Good Design</span><br/> means <span>Good Business</span>
      </h2>
      <div className='app__profiles'>
        {abouts.map((item, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={item.title + index}
          >
            <img src={item.imgUrl} alt={item.title}/>
            <h2 className='bold-text' style={{ marginTop: 20 }}>{item.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{item.description}</p>
          </motion.div>
        ))}

      </div>
    </>
  )
}

export default About