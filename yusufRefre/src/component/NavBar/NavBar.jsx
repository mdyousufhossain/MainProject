import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-10">
      <div className="hidden md:block">
      <Link>Home</Link>
      <Link>About</Link>
      <Link>Contact</Link>
      </div>

      <div  className='text-right md:hidden'>
        <button onClick={() => setIsOpen(!isOpen)}>Toggle Menu</button>
        {isOpen && (
          <ul>
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
