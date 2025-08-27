import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { motion } from 'framer-motion';

function Navbar() {
  const location = useLocation();

  const links = [
    { label: 'HOME', path: '/home' },
    { label: 'PROFILE', path: '/profile' },
    { label: 'POLIFOLIO', path: '/Polifolio' },
    { label: 'ABOUT', path: '/About' },
    { label: 'CONTACT', path: '/contact' },
  ];

  return (
    <motion.div
      className="container"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
    >
      <div className="brand-area">
        <motion.div
          className="robot-bounce"
          whileHover={{ scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span role="img" aria-label="robot" className="robot-icon">🤖</span>
          <span className="speech-bubble">Welcome</span>
        </motion.div>
        <div className="brand gradient-text">
          <span className="first">H</span>onor
        </div>
      </div>
      <ul>
        {links.map((link, idx) => (
          <motion.li
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link 
              to={link.path} 
              className={location.pathname === link.path ? 'active' : ''}
            >
              {link.label}
              <motion.div 
                className="underline"
                layoutId={location.pathname === link.path ? 'underline' : ''}
              />
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Navbar;
