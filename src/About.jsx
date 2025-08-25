import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const About= () => {
  const [counter, setCounter] = useState({ websites: 0, hours: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => ({
        websites: Math.min(prev.websites + 1, 10),
        hours: Math.min(prev.hours + 10, 500)
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #433e58ff, #616063ff);
          color: #fff;
        }

        .portfolio-wrapper {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          align-items: flex-start;
          padding: 2rem;
        }

        .content {
          flex: 1;
          min-width: 300px;
          max-width: 600px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
          border-radius: 20px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
          padding: 2rem;
          margin: 1rem;
        }

        .content h1 {
          font-size: 3rem;
          margin-bottom: 0.5rem;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
        }

        .content h2 {
          font-size: 1.5rem;
          font-weight: 400;
          color: #00ffd5;
          margin-bottom: 1rem;
        }

        .section {
          margin: 2rem 0;
          background: rgba(255, 255, 255, 0.05);
          padding: 1rem;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        .section h2 {
          color: #00ffd5;
          margin-bottom: 0.5rem;
        }

        .section ul {
          list-style: none;
          padding: 0;
        }

        .section li {
          margin: 0.5rem 0;
          font-weight: 500;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.05);
          padding: 1rem;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
        }

        .skill-bar {
          margin: 1rem 0;
        }

        .skill-bar span {
          display: block;
          margin-bottom: 0.3rem;
          font-weight: bold;
        }

        .bar {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          overflow: hidden;
          height: 10px;
        }

        .fill {
          background: #00ffd5;
          height: 100%;
          animation: fillBar 2s ease forwards;
        }

        @keyframes fillBar {
          from { width: 0; }
          to { width: 100%; }
        }

        .stats {
          display: flex;
          justify-content: space-around;
          margin-top: 1rem;
        }

        .stat {
          background: rgba(255, 255, 255, 0.05);
          padding: 1rem;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
          text-align: center;
          transition: transform 0.3s ease;
        }

        .stat:hover {
          transform: scale(1.05);
        }

        .stat h3 {
          font-size: 2rem;
          color: #00ffd5;
          margin-bottom: 0.5rem;
        }

        .icon-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
          text-align: center;
        }

        .icon-item {
          background: rgba(255, 255, 255, 0.05);
          padding: 1rem;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
        }

        .icon-item:hover {
          transform: scale(1.1);
          animation: pulse 0.6s ease;
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1.1); }
        }

        .icon-item img {
          width: 40px;
          margin-bottom: 0.5rem;
        }

        .image-container {
          flex: 1;
          max-width: 400px;
          margin: 1rem;
        }
 .image {
          flex: 1;
          max-width: 400px;
          margin: 1rem;
        }
        .image-container img {
          width: 100%;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
        }

 .image img {
          width: 100%;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
        }
        @media (max-width: 768px) {
          .portfolio-wrapper {
            flex-direction: column;
            align-items: center;
          }

          .content {
            margin-bottom: 2rem;
          }

          .image-container {
            max-width: 300px;
          }
        }
         .write-up {
  margin-top: -2rem; /* lifts it slightly upward */
  text-align: right; /* or use 'center' for centered layout */
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
        .write-up p {
  line-height: 1.6;
    font-size: 1.1rem;
    color: #d5dfe0;
    margin-bottom: 1rem;
    text-align: justify; /* ensures text is justified */
    padding: 0 1rem; /* adds some padding for better readability */
    }
     .polifolio-wrapper {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  width: 100vw;
  height: 100vh;
}
        .polifolio-wrapper::-webkit-scrollbar {
    display: none; /* Hide scrollbar for a cleaner look */
    }
.section {
  flex: 0 0 100vw;
  scroll-snap-align: start;
  padding: 2rem;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}
 /* HERO LAYOUT */
.hero {
  display: grid;
  grid-template-columns: 1.2fr 1fr; /* left: write-up, right: image */
  align-items: start;               /* image stays at the top */
  gap: 2rem;
  margin-bottom: 2rem;
}

/* Reuse your write-up, but reset the lift here */
.hero .write-up {
  margin-top: 0;        /* override the -2rem lift for hero */
  text-align: left;     /* hero text aligned left on desktop */
  margin-left: 0;
  margin-right: 0;
}

/* Image container inside hero aligns to the top-right */
.hero .image-container {
  max-width: 440px;     /* slight bump from 400 for visual balance */
  justify-self: end;    /* push to the right side in the grid */
  align-self: start;    /* stay at the top */
}

/* THREE-COLUMN GRID BELOW HERO */
.below-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-top: 1rem;
}

.below-grid .section {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

/* Responsive behavior */
@media (max-width: 1024px) {
  .hero {
    grid-template-columns: 1fr 0.9fr;
  }
}

@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;  /* stack on mobile */
    gap: 1.25rem;
  }

  /* Image first, text second on mobile */
  .hero .image-container {
    order: 1;
    justify-self: center;
    max-width: 320px;
  }

  .hero .write-up {
    order: 2;
    text-align: left; /* keep readable layout */
  }

  /* Below grid goes 2 columns on tablets, 1 column on phones */
  .below-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 520px) {
  .below-grid {
    grid-template-columns: 1fr;
  }
      
}
  .write-up {
  color: #fff;
  background: linear-gradient(135deg, #ff7eb3, #ff758c, #ffb199);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}
  .contact a {
  color: #00ffd5;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
  }
  


  .contact a:hover {
    color: #ff7eb3;
  text-decoration: underline;
  }.image-container {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 1rem;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  box-shadow: 0 0 30px rgba(0, 255, 213, 0.4),
              0 0 60px rgba(0, 255, 213, 0.3),
              0 0 90px rgba(0, 255, 213, 0.2);
  animation: morphContainer 8s ease-in-out infinite;
  overflow: hidden;
  transition: transform 0.5s ease;
}

.image-container:hover {
  transform: scale(1.03);
  box-shadow: 0 0 40px rgba(0, 255, 213, 0.6),
              0 0 80px rgba(0, 255, 213, 0.4);
}

/* Morphing animation */
@keyframes morphContainer {
  0% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  50% {
    border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
  }
  100% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
}
  .image-container img {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 255, 213, 0.6),
              0 0 40px rgba(0, 255, 213, 0.4);
  transition: transform 0.5s ease;
}

.image-container img:hover {
  transform: scale(1.05);
}
.image {
  width: 100%;
  max-width: 400px;
  border-radius: 20px;
  background: linear-gradient(135deg, #00ffe0, #8a7c9eff);
  padding: 8px;
  box-shadow: 0 0 20px rgba(106, 0, 255, 0.4),
              0 0 40px rgba(0, 255, 224, 0.3);
  animation: floatPulse 6s ease-in-out infinite;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

/* Hover shimmer effect */
.image:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px rgba(181, 153, 221, 0.6),
              0 0 60px rgba(0, 255, 224, 0.5);
  background: linear-gradient(135deg, #857996ff, #00ffe0);
}

/* Floating pulse animation */
@keyframes floatPulse {
  0% {
    transform: translateY(0px);
    box-shadow: 0 0 20px rgba(0, 225, 255, 0.4);
  }
  50% {
    transform: translateY(-10px);
    box-shadow: 0 0 40px rgba(0, 255, 224, 0.5);
  }
  100% {
    transform: translateY(0px);
    box-shadow: 0 0 20px rgba(0, 204, 255, 0.4);
  }
}


  `}</style>
 <div className="hero">
        <motion.div className="content" variants={fadeUp} initial="hidden" whileInView="visible">
            <h1>Welcome to My Polifolio</h1>
            <h2>Showcasing My Journey</h2>
            <p>             This is a collection of my work, skills, and achievements. Each section highlights different aspects of my professional journey.
            </p>
            <ul>
                <li>🌟 Passionate about frontend development</li>
                <li>💻 Building responsive and user-friendly interfaces</li>
                <li>📈 Focused on performance and scalability</li>
                <li>🌐 Always learning and adapting to new technologies</li>
            </ul>
   
            </motion.div>
          < motion.div className="image-container" variants={fadeUp} initial="hidden" whileInView="visible">
            <img src="/japhet.avif" alt="Profile" /></motion.div>
             <motion.div className="section" variants={fadeUp} initial="hidden" whileInView="visible">
            <h2>📊 Stats</h2>
            <div className="stats">
              <div className="stat">
                <h3>{counter.websites}</h3>
                <p>Websites Built</p>
              </div>
              <div className="stat">
                <h3>{counter.hours}</h3>
                <p>Hours of Coding</p>
              </div>
                <div className="stat">
                    <h3>10+</h3>
                    <p>Projects Completed</p>
                </div>
            </div>
              <motion.div className="image-container" variants={fadeUp} initial="hidden" whileInView="visible">
            <img src="/hi.avif" alt="Profile" />  </motion.div>
                    
            </motion.div>
                    
 </div>

          
      <div className="hero below-grid ">
        <motion.div className="content " variants={fadeUp} initial="hidden" whileInView="visible">
          <h1>Honor</h1>
          <h2>My Portfolio</h2>
          <p>
            Welcome to my digital showcase. Here you'll find the story of my growth, my achievements, and the vision I carry forward.
          </p>

         

          

          <motion.div className="section" variants={fadeUp} initial="hidden" whileInView="visible">
            <h2>🧠 My Skills</h2>
            {['React', 'CSS', 'JavaScript'].map((skill, i) => (
              <div className="skill-bar" key={i}>
                <span>{skill}</span>
                <div className="bar">
                  <div className="fill" style={{ width: `${90 - i * 5}%` }}></div>
                </div>
              </div>
            ))}
            </motion.div>
            
            <motion.div
  className="section"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
>
  <h2>🚀 About Me</h2>
  <p>
    I'm a passionate frontend developer with a love for clean design and smooth user experiences.
  </p>
</motion.div>


            <motion.div className="section" variants={fadeUp} initial="hidden" whileInView="visible">
                <h2>🔧 Technologies I Use</h2>
                <div className="icon-grid">
                {['react', 'css3', 'javascript'].map((icon, i) => (
                    <div className="icon-item" key={i}>
                    <img src={`https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/${icon}.svg`} alt={icon} />
                    <p>{icon.charAt(0).toUpperCase() + icon.slice(1)}</p>
                    </div>
                ))}
                </div>
            </motion.div>
            
            </motion.div>
            
            <motion.div className="image" variants={fadeUp} initial="hidden" whileInView="visible">
            <img src="/japhet.avif" alt="Profile" />
 <motion.div className="section" variants={fadeUp} initial="hidden" whileInView="visible">
            <h2>🚀 Achievements</h2>
            <ul>
              <li>Led ₦50M innovation project</li>
              <li>Boosted team efficiency by 40%</li>
              <li>Mentored 20+ rising leaders</li>
              <li>Built 10+ websites with React and CSS</li>
            </ul>
          </motion.div>
            <motion.div className="section" variants={fadeUp} initial="hidden" whileInView="visible">
            <h2>🌐 My Projects</h2>
            <div className="project-grid">
              {['Portfolio Website', 'E-commerce Store', 'Blog Platform', 'Landing Page'].map((title, i) => (
                <motion.div whileHover={{ scale: 1.05 }} className="project-card" key={i}>
                  <h3>{title}</h3>
                  <p>Placeholder description for {title.toLowerCase()}.</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
            </motion.div>
<motion.div className="section" variants={fadeUp} initial="hidden" whileInView="visible">
  <h2>🚀 About Me</h2>
  <p>
    I'm a passionate frontend developer with a love for clean design and smooth user experiences.
    </p>
    
    <div className="write-up">
            <p>
              My journey in tech has been a blend of creativity and logic. From building responsive websites to crafting engaging user interfaces, I strive to create digital experiences that resonate with users.
            </p>
            <p>
              I believe in the power of collaboration and continuous learning. Each project is an opportunity to innovate
                and push the boundaries of what's possible. Whether it's through mentoring others or diving into new technologies, I'm always looking to grow and contribute to the tech community.
            </p>
            <p>
                Join me on this journey as I continue to explore, create, and inspire. Together, we can build a brighter digital future.
            </p>
            <p>
              Feel free to connect with me on my social media platforms or reach out via email. I'm
                always open to new opportunities and collaborations.


⚛️ *The React Bug That Taught Me Everything*

It started with a simple idea: build a personal portfolio using React. I had just learned about components, props, and hooks, and I was eager to put it all together. The layout was clean, the animations were smooth — until they weren’t.

Suddenly, the page stopped rendering. My `useEffect` hook was firing endlessly, and the console was flooded with warnings. I stared at the code, trying to trace the logic. I rewrote the component. Split it into smaller ones. Googled like my life depended on it.

Then, at 3:17 AM, I found it: I had forgotten to include the dependency array in `useEffect`. One tiny omission had triggered an infinite loop.

But instead of frustration, I felt a strange sense of pride. Because React didn’t just teach me how to build interfaces — it taught me how to think in terms of state, lifecycle, and reactivity. It taught me that every bug is a breadcrumb leading to deeper understanding.

Since then, I’ve built apps with Redux, styled-components, and even deployed with Vite and Netlify. But I’ll never forget that night — because it was the moment I stopped just writing code and started *engineering* solutions.

            </p>
            <div className="contact">
                <a href="mailto:>
                directly to my email">Contact Me</a>
            </div>
            </div>
    </motion.div>
          

   

        </div>
      
      

      

        </>

    );
    };


  export default About;
