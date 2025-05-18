import React from 'react';
import { FaGithub, FaLinkedin, FaKaggle, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Resume', href: '#resume' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/', label: 'LinkedIn' },
    { icon: <FaKaggle />, href: 'https://kaggle.com/', label: 'Kaggle' },
    { icon: <FaYoutube />, href: 'https://youtube.com/', label: 'YouTube' },
  ];

  return (
    <footer className="bg-primary-light py-12 border-t border-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Copyright */}
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-primary font-heading font-bold text-xl">
              Vijay<span className="text-foreground">.dev</span>
            </a>
            <p className="text-muted-foreground mt-2">© {new Date().getFullYear()} Vijay Takbhate. All rights reserved.</p>
          </div>
          
          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                {React.cloneElement(link.icon as React.ReactElement, { className: 'text-xl' })}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
