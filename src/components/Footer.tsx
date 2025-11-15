import React from 'react';
import { SocialIcons } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Kumar Omkar. All rights reserved.
        </p>
        <div className="flex space-x-6">
           <a href="https://www.linkedin.com/in/omkarbd01/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
            {SocialIcons.linkedin}
          </a>
          <a href="https://x.com/omkarbd01" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300" aria-label="Twitter">
            {SocialIcons.twitter}
          </a>
           <a href="https://www.instagram.com/omkarbd01/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300" aria-label="Instagram">
            {SocialIcons.instagram}
          </a>
           <a href="https://www.youtube.com/@omkarbd01" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300" aria-label="YouTube">
            {SocialIcons.youtube}
          </a>
          <a href="mailto:omkarbd01@gmail.com" className="text-slate-400 hover:text-white transition-colors duration-300" aria-label="Email">
            {SocialIcons.mail}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;