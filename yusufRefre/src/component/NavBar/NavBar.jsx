import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { menu } from '../../constants/info';
import ThemeIcon from '../../constants/darkmodUI';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-10">
      <div className="hidden flex items-center md:block">
        { menu && menu.map((m) => (
          <Link className="navbarMentu" key={m.id} to={m.link}>
            {m.titile} icon={m.icon}
          </Link>
        ))}
        <ThemeIcon />
      </div>
      {/* there will be animation delay and humberguer mennu maybe a bit animation  */}

      <div className="text-right md:hidden">
        <button
          type="button"
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-slate-500 mx-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
        {isOpen && (
          <ul>
            { menu && menu.map((m) => (
              <li><Link className="navbarMentu" key={m.id} to={m.link}>{m.titile}</Link></li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
