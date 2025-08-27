import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

const portfolioData = [
  {
    id: 1,
    title: "AI Chatbot",
    description: "Conversational assistant built with React, Node.js, and OpenAI API.",
    image: "ji.webp"
  },
  {
    id: 2,
    title: "E-Commerce Store",
    description: "Full MERN stack store with Stripe payments and dashboard features.",
    image: "OIP.webp"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Modern animated portfolio built with React and Framer Motion.",
    image: "P.webp"
  },
  {
    id: 4,
    title: "Weather App",
    description: "React app that fetches weather data and displays in elegant UI.",
    image: "OIP (1).webp"
  },
  {
    id: 5,
    title: "Task Manager",
    description: "A productivity app to track tasks, priorities, and deadlines.",
    image: "TI.webp"
  },
  {
    id: 6,
    title: "Blog Platform",
    description: "Full-stack blog with authentication, posts, and comments system.",
    image: "SI.webp"
  }
];

function Hero() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [gradientMode, setGradientMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="hero">
      {/* Toggle Buttons */}
      <button
        className="toggle-mode"
        onClick={() => setDarkMode(d => !d)}
        aria-label="Toggle dark/light mode"
      >
        {darkMode ? '🌞' : '🌙'}
      </button>

      <button
        className="toggle-gradient"
        onClick={() => setGradientMode(g => !g)}
        aria-label="Toggle gradient mode"
      >
        {gradientMode ? '🌈' : '🎨'}
      </button>

      {/* Hero Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="japhet.avif"
          alt="Profile"
          className="hero-photo"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        <div className="hero-text">
          <h1 className="title">
            <span className={gradientMode ? 'gradient-text active' : 'gradient-text'}>
              Japhet
            </span>
            <span className="robot-emoji">🤖</span>
          </h1>
          <p className="subtitle">
            {gradientMode
              ? 'Gradient Mode: Vibrant Full Stack Developer | UI/UX Enthusiast'
              : 'Full Stack Developer | UI/UX Enthusiast'}
          </p>

          <div className="hero-actions">
            <Link to="/polifolio" className="hero-btn">View Portfolio</Link>
            <Link to="/contact" className="hero-btn secondary">Contact Me</Link>
          </div>
        </div>
      </motion.div>

      {/* Portfolio Cards */}
      <motion.div
        className="cards-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {portfolioData.map((card) => (
          <motion.div
            className="portfolio-card"
            key={card.id}
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7 }}
            style={gradientMode ? { background: 'linear-gradient(135deg, #ffecd2, #fcb69f)', color: '#222' } : {}}
          >
            <div className="card-icon">
              <img src={card.image} alt={card.title} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <Link to="/about" className="card-link">See More →</Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Hero;
