import React from 'react';

const navbar = ['home', 'about', 'work', 'skills', 'testimonials', 'contact'];

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {navbar.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#313bac' } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
