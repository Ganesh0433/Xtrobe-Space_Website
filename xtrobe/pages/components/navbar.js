import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-900 to-black text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-5">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <h1 className="text-3xl font-extrabold tracking-wider text-white hover:text-blue-400 transition-all duration-300">
            Xtrobe
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10 text-lg font-medium">
          <a href="/latestnews" className="hover:text-blue-400 transition-colors duration-200">Space News</a>
          <a href="/rocket" className="hover:text-blue-400 transition-colors duration-200">Rocket Events</a>
          <a href="/astronomy" className="hover:text-blue-400 transition-colors duration-200">Astronomy Events</a>
          <a href="/astroid" className="hover:text-blue-400 transition-colors duration-200">Space</a>
          <a href="/community-hub" className="hover:text-blue-400 transition-colors duration-200">Community Hub</a>
        </div>

        {/* Profile & Mobile Menu */}
        <div className="flex items-center space-x-6">
      

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white hover:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className="md:hidden flex flex-col space-y-6 p-5 bg-gray-800 text-white text-lg font-medium">
        <a href="/profiles" className="hover:text-blue-400 transition-colors duration-200">Profiles</a>
        <a href="/space-news" className="hover:text-blue-400 transition-colors duration-200">Space News</a>
        <a href="/rocket-events" className="hover:text-blue-400 transition-colors duration-200">Rocket Events</a>
        <a href="/astronomy-events" className="hover:text-blue-400 transition-colors duration-200">Astronomy Events</a>
        <a href="/community-hub" className="hover:text-blue-400 transition-colors duration-200">Community Hub</a>
      </div>
    </nav>
  );
};

export default Navbar;
