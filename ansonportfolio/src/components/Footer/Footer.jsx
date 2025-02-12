import React from 'react';
import './Footer.css'
import { UilFacebookF, UilTwitterAlt, UilInstagram } from '@iconscout/react-unicons';

const Footer = () => {
  const footerLinks = [
    { href: '#services', text: 'Services' },
    { href: '#portfolio', text: 'Portfolio' },
    { href: '#contact', text: 'Contact Me' },
  ];

  const socialLinks = [
    { href: 'https://www.facebook.com', icon: <UilFacebookF />, label: 'Facebook' },
    { href: 'https://www.twitter.com', icon: <UilTwitterAlt />, label: 'Twitter' },
    { href: 'https://www.instagram.com', icon: <UilInstagram />, label: 'Instagram' },
  ];

  return (
    <footer className="footer">
      <div className="footer_bg">
        <div className="footer_container container grid">
          <div>
            <h1 className="footer_title">Anson</h1>
            <span className="footer_subtitle">Frontend Developer</span>
          </div>
          <ul className="footer_links">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="footer_link">{link.text}</a>
              </li>
            ))}
          </ul>
          <div className="footer_social">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer_social"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <p className="footer_copy">&#169; All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
