 import React from 'react'
import './Footer.css'
import { FaGithub, FaPhone, FaUser } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaHistory } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

import { FaBuilding } from 'react-icons/fa';
import  { FaComments } from 'react-icons/fa';

import { FaBook } from 'react-icons/fa';
import { FaUsers} from 'react-icons/fa';
import { FaServer } from 'react-icons/fa';
function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-grid">
        <section>
          <h5>Contact</h5>
          <ul>
            <ol><a href="japhet@gmail.com"><FaEnvelope size={30}/> Email Me</a></ol>
            <ol><a href="tel:+1234567890"><FaPhone size={30}/> Call</a></ol>
            <ol><a href="/contact"><FaComments size={30}/> Reach Out</a></ol>
          </ul>
        </section>
        <section>
          <h5>Community</h5>
          <ul>
            <ol><a href="https://github.com/"><FaGithub size={60} className='icon-item' color='white'/>GitHub</a></ol>
            <ol><a href="https://twitter.com/"> <FaTwitter size={60} scale={30} color='white' className='icon-item'/>X (Twitter)</a></ol>
            <ol><a href="https://discord.com/"><FaDiscord className='icon-item' size={60} scale={50} color='white'/> Discord</a></ol>
          </ul>
        </section>
        <section>
          <h5>Society</h5>
          <ul>
            <ol><a href="#"><FaUser size={30}/> Meetups</a></ol>
            <ol><a href="#"><FaBook size={30}/> Articles</a></ol>
            <ol><a href="#"><FaBuilding size={30}/> Discussions</a></ol>
          </ul>
        </section>
        <section>
          <h5>Company</h5>
          <ul>
            <ol><a href="#"><FaHistory size={30}/> Our Story</a></ol>
            <ol><a href="#"><FaUsers size={30}/> Join Us</a></ol>
            <ol><a href="#"><FaServer size={30}/> Terms</a></ol>
          </ul>
        </section>
      </div>
      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Honor Portfolio. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;