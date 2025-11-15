
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BlogCategory } from '../types';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setBlogDropdownOpen] = useState(false);

  const navLinkClasses = 'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 font-heading flex items-center';
  const activeLinkClasses = 'text-theme-primary';
  const inactiveLinkClasses = 'text-theme-secondary hover:text-theme-primary';

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${navLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`;

  const ArrowDownIcon = () => (
    <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );
  
  const closeAllMenus = () => {
    setIsMenuOpen(false);
  };
  
  const closeDropdowns = () => {
    setAboutDropdownOpen(false);
    setBlogDropdownOpen(false);
  };

  const aboutDropdownContent = (onLinkClick: () => void) => (
     <div className="py-1">
        <NavLink to="/about" className="block px-4 py-2 text-sm text-theme-secondary hover:bg-theme-bg-subtle" onClick={onLinkClick}>
          Projects
        </NavLink>
      </div>
  );

  const blogDropdownContent = (onLinkClick: () => void) => (
    <div className="py-1">
      {Object.values(BlogCategory).map(cat => (
         <NavLink 
            key={cat}
            to={`/blog?category=${cat}`} 
            className="block px-4 py-2 text-sm text-theme-secondary hover:bg-theme-bg-subtle"
            onClick={onLinkClick}
          >
           {cat}
         </NavLink>
      ))}
    </div>
  );
  
  const desktopNavLinks = (
     <div className="flex items-baseline space-x-1">
        <NavLink to="/" className={getNavLinkClass} onClick={closeDropdowns}>Home</NavLink>
        
        <div className="relative" onMouseEnter={() => setAboutDropdownOpen(true)} onMouseLeave={() => setAboutDropdownOpen(false)}>
          <NavLink to="/about" className={getNavLinkClass} onFocus={() => setAboutDropdownOpen(true)} onBlur={() => setTimeout(()=>setAboutDropdownOpen(false), 200)}>
            About <ArrowDownIcon />
          </NavLink>
          {isAboutDropdownOpen && (
             <div className="absolute z-10 top-full pt-2 w-48 rounded-md shadow-lg bg-theme-bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              {aboutDropdownContent(closeDropdowns)}
             </div>
          )}
        </div>

        <div className="relative" onMouseEnter={() => setBlogDropdownOpen(true)} onMouseLeave={() => setBlogDropdownOpen(false)}>
           <NavLink to="/blog" className={getNavLinkClass} onFocus={() => setBlogDropdownOpen(true)} onBlur={() => setTimeout(()=>setBlogDropdownOpen(false), 200)}>
            Blog <ArrowDownIcon />
          </NavLink>
          {isBlogDropdownOpen && (
            <div className="absolute z-10 top-full pt-2 w-48 rounded-md shadow-lg bg-theme-bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              {blogDropdownContent(closeDropdowns)}
            </div>
          )}
        </div>
        <NavLink to="/contact" className={getNavLinkClass} onClick={closeDropdowns}>Contact</NavLink>
     </div>
  );
  
  const mobileNavLinks = (
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <NavLink to="/" className="block px-3 py-2 rounded-md text-base font-medium text-theme-secondary hover:text-theme-primary hover:bg-theme-bg-subtle" onClick={closeAllMenus}>Home</NavLink>
        
        <div>
           <div className="flex justify-between items-center w-full">
             <NavLink to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-theme-secondary hover:text-theme-primary hover:bg-theme-bg-subtle flex-grow" onClick={closeAllMenus}>About</NavLink>
             <button onClick={() => { setAboutDropdownOpen(!isAboutDropdownOpen); setBlogDropdownOpen(false); }} className="p-2 text-theme-secondary rounded-md hover:bg-theme-bg-subtle">
                <ArrowDownIcon />
             </button>
           </div>
           {isAboutDropdownOpen && (
             <div className="pl-4 border-l-2 border-theme-bg-subtle ml-3">
               {aboutDropdownContent(closeAllMenus)}
             </div>
           )}
        </div>
        
        <div>
           <div className="flex justify-between items-center">
             <NavLink to="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-theme-secondary hover:text-theme-primary hover:bg-theme-bg-subtle flex-grow" onClick={closeAllMenus}>Blog</NavLink>
             <button onClick={() => { setBlogDropdownOpen(!isBlogDropdownOpen); setAboutDropdownOpen(false); }} className="p-2 text-theme-secondary rounded-md hover:bg-theme-bg-subtle">
                <ArrowDownIcon />
             </button>
           </div>
           {isBlogDropdownOpen && (
             <div className="pl-4 border-l-2 border-theme-bg-subtle ml-3">
               {blogDropdownContent(closeAllMenus)}
             </div>
           )}
        </div>
        
        <NavLink to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-theme-secondary hover:text-theme-primary hover:bg-theme-bg-subtle" onClick={closeAllMenus}>Contact</NavLink>
    </div>
  );

  return (
    <header className="bg-theme-bg-white shadow-sm fixed w-full top-0 z-50 border-b border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/">
              <img className="h-20 w-auto" src="https://res.cloudinary.com/dk0uj1jry/image/upload/v1763219584/logo_ko_svg_ulp0nm.svg" alt="Kumar Omkar Logo" />
            </NavLink>
          </div>

          <div className="hidden md:block">
            {desktopNavLinks}
          </div>

          <div className="flex items-center">
            <div className="hidden md:block">
              <Link to="/subscribe" className="bg-theme-primary text-white font-semibold px-4 py-2 text-sm rounded-md hover:bg-theme-primary-hover transition-colors duration-300 shadow">
                Subscribe
              </Link>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="bg-theme-bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-theme-secondary hover:bg-theme-bg-subtle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-secondary"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-theme-bg-white border-t border-theme-border" id="mobile-menu">
          {mobileNavLinks}
           <div className="p-4 border-t border-theme-border mt-2">
             <Link to="/subscribe" onClick={closeAllMenus} className="w-full text-center block bg-theme-primary text-white font-semibold px-4 py-2 text-sm rounded-md hover:bg-theme-primary-hover transition-colors duration-300 shadow">
                Subscribe
             </Link>
           </div>
        </div>
      )}
    </header>
  );
};

export default Header;
