import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <Link>Home</Link>
      <Link>About</Link>
      <Link>Contact</Link>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Menu</button>
      {isOpen && (
        <ul>
          <li><Link>Home</Link></li>
          <li><Link>About</Link></li>
          <li><Link>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
