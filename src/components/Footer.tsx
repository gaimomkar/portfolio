
import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcons } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-theme-secondary text-theme-bg-subtle">
      {/* Primary Footer */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Column 1: Navigation */}
          <div>
            <h2 className="text-lg font-semibold text-theme-bg-white mb-4 font-heading">Kumar Omkar</h2>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-theme-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-theme-primary transition-colors">About</Link></li>
              <li><Link to="/blog" className="hover:text-theme-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Column 2: Connect */}
          <div>
            <h2 className="text-lg font-semibold text-theme-bg-white mb-4 font-heading">Connect</h2>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-theme-primary transition-colors">Contact</Link></li>
              <li><Link to="/booking" className="hover:text-theme-primary transition-colors">Appointment</Link></li>
              <li><Link to="/subscribe" className="hover:text-theme-primary transition-colors">Subscribe</Link></li>
            </ul>
          </div>

          {/* Column 3: Social */}
          <div>
             <h2 className="text-lg font-semibold text-theme-bg-white mb-4 font-heading">Follow Me</h2>
             <div className="flex flex-col items-center md:items-start space-y-3">
               <a href="https://www.linkedin.com/in/omkarbd01/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-theme-primary transition-colors" aria-label="LinkedIn">
                {SocialIcons.linkedin}
                <span>LinkedIn</span>
              </a>
              <a href="https://x.com/omkarbd01" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-theme-primary transition-colors" aria-label="Twitter">
                {SocialIcons.twitter}
                 <span>Twitter</span>
              </a>
               <a href="https://www.instagram.com/omkarbd01/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-theme-primary transition-colors" aria-label="Instagram">
                {SocialIcons.instagram}
                <span>Instagram</span>
              </a>
             </div>
          </div>

        </div>
      </div>
      
      {/* Below Footer */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-slate-400 text-center md:text-left mb-4 md:mb-0">
                Copyright © 2025 Kumar Omkar
            </p>
            <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
                <Link to="/terms" className="text-slate-400 hover:text-white transition-colors">Terms</Link>
                <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy</Link>
                <Link to="/refund" className="text-slate-400 hover:text-white transition-colors">Refund</Link>
            </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
