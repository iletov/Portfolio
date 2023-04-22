import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrapp, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';


const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data))
  },[])

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
            <img src={urlFor(item.imgUrl)} alt={item.title}/>
            <h2 className='bold-text' style={{ marginTop: 20 }}>{item.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{item.description}</p>
          </motion.div>
        ))}

      </div>
    </>
  )
}

export default AppWrapp(
  MotionWrap(About, 'app__about'),
  'about', "app__whitebg"
  );