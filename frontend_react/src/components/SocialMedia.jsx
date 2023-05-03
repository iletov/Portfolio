import React from 'react';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
    <div>
      <a href='https://github.com/iletov' target='_blank'>
        <BsGithub /> 
      </a>
      
    </div>
    <div>
       <a href='https://www.linkedin.com/feed/' target='_blank'>
        <BsLinkedin />
      </a>
     
    </div>
    <div>
       <a href='https://twitter.com/home?lang=bg' target='_blank'>
        <BsTwitter />
      </a>
    </div>
  </div>
  )
}

export default SocialMedia