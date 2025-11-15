
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClasses = 'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300';
  const activeLinkClasses = 'bg-slate-900 text-white';
  const inactiveLinkClasses = 'text-slate-300 hover:bg-slate-700 hover:text-white';

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${navLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`;

  const navLinks = (
    <>
      <NavLink to="/" className={getNavLinkClass} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
      <NavLink to="/about" className={getNavLinkClass} onClick={() => setIsMenuOpen(false)}>About</NavLink>
      <NavLink to="/blog" className={getNavLinkClass} onClick={() => setIsMenuOpen(false)}>Blog</NavLink>
      <NavLink to="/contact" className={getNavLinkClass} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
    </>
  );

  return (
    <nav className="bg-slate-800 shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-white font-bold text-xl">
              Kumar Omkar
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
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
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            {navLinks}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
