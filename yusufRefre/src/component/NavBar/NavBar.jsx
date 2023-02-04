import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-10">
      <div className="hidden flex items-center md:block">
        <Link className="navbarMentu">Home</Link>
        <Link className="navbarMentu">Product</Link>
        <Link className="navbarMentu">Service</Link>
        <Link className="navbarMentu">About</Link>
        <Link className="navbarMentu">Contact</Link>
      </div>
      {/* there will be animation delay and humberguer mennu maybe a bit animation  */}

      <div className="text-right md:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-slate-500 "
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
        {isOpen && (
          <ul className="delay-200 transition-all">
            <li><Link>Home</Link></li>
            <li><Link>About</Link></li>
            <li><Link>Contact</Link></li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
