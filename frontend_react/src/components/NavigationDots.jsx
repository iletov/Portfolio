import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((dot, index) => (
      <a
        href={`#${dot}`}
        key={dot + index}
        className="app__navigation-dot"
        style={ active === dot ? { backgroundColor: '#313BAC' } : {} }
      />
    ))}
  </div>
);

export default NavigationDots;

