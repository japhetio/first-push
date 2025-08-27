import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon } from "react-icons/fa";
import "./Polifolio.css";

// Skills & Testimonials
const skills = ["React", "JavaScript", "TypeScript", "Node.js", "Framer Motion", "CSS", "HTML", "REST APIs"];
const testimonials = [
  { id: 1, text: "A brilliant developer with a keen eye for detail.", author: "Jane Doe, Tech Lead" },
  { id: 2, text: "Consistently delivers high‑quality work on time.", author: "John Smith, Project Manager" }
];

// Animations
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

// Components
const Section = ({ id, title, children, delay = 0 }) => (
  <motion.section
    id={id}
    className="section"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, delay }}
    aria-labelledby={`${id}-title`}
  >
    <h2 id={`${id}-title`} className="section-title">{title}</h2>
    {children}
  </motion.section>
);

const ThemeToggle = ({ theme, setTheme }) => {
  const isDark = theme === "dark";
  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      {isDark ? <FaSun aria-hidden /> : <FaMoon aria-hidden />}
    </button>
  );
};

const NavBar = () => {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" }
  ];
  return (
    <nav className="navbar" role="navigation" aria-label="Main">
      <a className="brand" href="#home">Polifolio</a>
      <div className="nav-links">
        {links.map(l => (
          <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
        ))}
      </div>
    </nav>
  );
};

const SocialIcons = () => (
  <div className="social-icons" role="list" aria-label="Social links">
    <a role="listitem" aria-label="Email" href="mailto:example@email.com"><FaEnvelope /></a>
    <a role="listitem" aria-label="GitHub" href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
    <a role="listitem" aria-label="LinkedIn" href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
  </div>
);

export default function Polifolio() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const containerVariants = useMemo(() => ({ initial: { opacity: 0 }, animate: { opacity: 1 } }), []);

  return (
    <motion.div className="App" variants={containerVariants} initial="initial" animate="animate" transition={{ duration: 0.8 }} id="home">

      <NavBar />
      <ThemeToggle theme={theme} setTheme={setTheme} />

      {/* Hero */}
      <motion.header className="hero" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="hero-content">
          <img src="/japhet.avif" alt="Website showcase" className="hero-photo"/>
          <div className="hero-text">
            <h1 className="title">Your Web Project</h1>
            <p className="subtitle">A beautiful web experience designed to be interactive, modern, and accessible. Explore features and enjoy smooth animations throughout.</p>
            <SocialIcons />
          </div>
        </div>
      </motion.header>

      {/* Skills Section */}
      <Section id="skills" title="Skills" delay={0.2}>
        <div className="skills-grid">
          {skills.map(s => <motion.div key={s} className="skill-card" whileHover={{ scale: 1.06 }} whileFocus={{ scale: 1.03 }}>{s}</motion.div>)}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section id="testimonials" title="Testimonials" delay={0.3}>
        <div className="testimonials-grid">
          {testimonials.map(t => (
            <motion.blockquote key={t.id} className="testimonial-card" whileHover={{ scale: 1.02 }}>
              “{t.text}”
              <footer>— {t.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Connect" delay={0.35}>
        <p>Let’s build something great together.</p>
        <SocialIcons />
        <p className="footer-text">© {new Date().getFullYear()} Your Name — All rights reserved.</p>
      </Section>

      <a href="#home" className="to-top" aria-label="Back to top">↑</a>
    </motion.div>
  );
}
