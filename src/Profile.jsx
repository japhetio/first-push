import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Profile= () => {
  const [darkMode, setDarkMode] = useState(true);

  const styles = {
    page: {
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: darkMode ? '#0f0f0f' : '#f5f5f5',
      color: darkMode ? '#fff' : '#111',
      transition: 'all 0.3s ease',
      padding: '2rem',
      maxWidth: '1200px',
      margin: 'auto'
    },
    button: {
      cursor: 'pointer',
      padding: '0.5rem 1rem',
      border: 'none',
      borderRadius: '8px',
      fontWeight: 'bold',
      backgroundColor: darkMode ? '#00ffd5' : '#111',
      color: darkMode ? '#000' : '#fff',
      marginBottom: '2rem'
    },
    hero: {
      textAlign: 'center',
      marginBottom: '3rem'
    },
    heroTitle: {
      fontSize: '3rem',
      background: 'linear-gradient(135deg, #00ffd5, #6a00ff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    heroText: {
      fontSize: '1.2rem',
      color: darkMode ? '#dadada' : '#333'
    },
    resumeBtn: {
      display: 'inline-block',
      marginTop: '1rem',
      padding: '0.5rem 1rem',
      backgroundColor: '#00ffd5',
      color: '#000',
      borderRadius: '8px',
      textDecoration: 'none',
      fontWeight: 'bold'
    },
    section: {
      marginBottom: '4rem'
    },
    sectionTitle: {
      fontSize: '2rem',
      marginBottom: '1rem',
      borderBottom: `1px solid ${darkMode ? 'rgba(255,255,255,0.2)' : '#ccc'}`,
      paddingBottom: '0.5rem'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem'
    },
    card: {
      backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : '#fff',
      backdropFilter: 'blur(10px)',
      borderRadius: '16px',
      padding: '1rem',
      boxShadow: darkMode ? '0 8px 24px rgba(0,255,213,0.2)' : '0 8px 24px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease'
    },
    cardHover: {
      transform: 'scale(1.03)'
    },
    cardImg: {
      width: '100%',
      borderRadius: '12px',
      marginBottom: '1rem',
      objectFit: 'cover'
    },
    cardTitle: {
      margin: '0.5rem 0',
      fontSize: '1.2rem'
    },
    skillsList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      marginTop: '1rem'
    },
    skill: {
      background: darkMode ? 'rgba(255,255,255,0.1)' : '#eee',
      padding: '0.5rem 1rem',
      borderRadius: '8px',
      fontSize: '1rem',
      boxShadow: darkMode ? '0 0 10px rgba(0,255,213,0.2)' : '0 0 10px rgba(0,0,0,0.05)'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      marginTop: '1rem'
    },
    input: {
      padding: '0.75rem',
      border: 'none',
      borderRadius: '8px',
      background: darkMode ? 'rgba(255,255,255,0.1)' : '#fff',
      color: darkMode ? '#fff' : '#000',
      fontSize: '1rem'
    },
    textarea: {
      padding: '0.75rem',
      border: 'none',
      borderRadius: '8px',
      background: darkMode ? 'rgba(255,255,255,0.1)' : '#fff',
      color: darkMode ? '#fff' : '#000',
      fontSize: '1rem'
    },
    submitBtn: {
      padding: '0.75rem',
      background: '#00ffd5',
      color: '#000',
      border: 'none',
      borderRadius: '8px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background 0.3s ease'
    },
    footer: {
      textAlign: 'center',
      fontSize: '0.9rem',
      color: darkMode ? '#aaa' : '#555',
      marginTop: '2rem'
    }
  };

  const skills = [
    'React', 'JavaScript', 'TypeScript', 'Node.js', 'Tailwind CSS',
    'Figma', 'Git', 'Framer Motion', 'Firebase', 'MongoDB', 'GraphQL'
  ];

  const achievements = [
    { title: 'Hackathon Winner', desc: 'Smart agriculture app', img: 'https://source.unsplash.com/400x250/?award' },
    { title: 'AI Challenge Finalist', desc: 'Traffic prediction model', img: 'https://source.unsplash.com/400x250/?ai' },
    { title: 'IEEE Publication', desc: 'Neural networks research', img: 'https://source.unsplash.com/400x250/?research' }
  ];

  const projects = [
    { title: 'SmartFarm', desc: 'IoT crop monitoring', img: 'https://source.unsplash.com/400x250/?iot' },
    { title: 'EduConnect', desc: 'Offline e-learning', img: 'https://source.unsplash.com/400x250/?education' },
    { title: 'PortfolioX', desc: 'Drag-and-drop builder', img: 'https://source.unsplash.com/400x250/?portfolio' }
  ];

  return (
    <div style={styles.page}>
      <div style={{ textAlign: 'right' }}>
        <button style={styles.button} onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <motion.div style={styles.hero} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1 style={styles.heroTitle}>Hi, I'm Japhet 👨‍💻</h1>
        <p style={styles.heroText}>Frontend Developer | UI/UX Designer | Tech Enthusiast</p>
        <a href="/resume.pdf" download style={styles.resumeBtn}>Download Resume</a>
      </motion.div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🛠️ Skills</h2>
        <div style={styles.skillsList}>
          {skills.map(skill => <span key={skill} style={styles.skill}>{skill}</span>)}
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🏆 Achievements</h2>
        <div style={styles.grid}>
          {achievements.map((a, i) => (
            <div key={i} style={styles.card}>
              <img src={a.img} alt={a.title} style={styles.cardImg} />
              <h3 style={styles.cardTitle}>{a.title}</h3>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🚀 Projects</h2>
        <div style={styles.grid}>
          {projects.map((p, i) => (
            <div key={i} style={styles.card}>
              <img src={p.img} alt={p.title} style={styles.cardImg} />
              <h3 style={styles.cardTitle}>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>📬 Contact Me</h2>
        <form style={styles.form}>
          <input type="text" placeholder="Your Name" style={styles.input} required />
          <input type="email" placeholder="Your Email" style={styles.input} required />
                    <input type="text" placeholder="Your Name" required style={styles.input} />
          <input type="email" placeholder="Your Email" required style={styles.input} />
          <textarea placeholder="Your Message" rows="5" required style={styles.textarea}></textarea>
          <button type="submit" style={styles.submitBtn}>Send Message</button>
        </form>
      </div>

      <footer style={styles.footer}>
        <p>© 2025 Japhet. Built with ❤️ using React & Framer Motion.</p>
      </footer>
    </div>
  );
};

export default Profile;
